import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineCalendar } from 'react-icons/ai'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { slide as Menu } from 'react-burger-menu'
import { UserContext } from 'context/userContext'
import './DashboardLayout.scss'

const DashboardLayout = (props) => {
    const { title, subtitle } = props
    const [openMenu, setOpenMenu] = useState(null)
    const { user } = useContext(UserContext)

    const userRoutes = [
        {
            icon: <IoTicketOutline />,
            label: 'Reservas',
            routeLink: `/club/${user.id}/booking`,
            subroutes: [
                {
                    label: 'Entrada general',
                    routeLink: '/general-entrance',
                },
                {
                    label: 'Reservado',
                    routeLink: '/stage',
                },
            ],
        },
        {
            icon: <AiOutlineCalendar />,
            label: 'Eventos',
            routeLink: `/club/${user.id}/events`,
        },
        {
            icon: <TiLocationArrowOutline />,
            label: 'Notificaciones',
            routeLink: `/club/${user.id}/notifications`,
        },
    ]

    const routes = [...userRoutes]

    const { children } = props
    const currentPath = ''

    const handleOpenMenu = (link) => setOpenMenu(link)

    return (
        <div className="dashboard-layout">
            <div className="sidebar">
                <div className="logo">
                    <img src="#" alt="logo-full" />
                </div>

                {routes.map((route, i) => {
                    return <SideBarItems {...props} {...{ route, i, currentPath, openMenu, handleOpenMenu, user }} />
                })}
            </div>

            <div className="burger-menu-wrapper">
                <Menu>
                    {routes.map((route, i) => {
                        return (
                            <SideBarItems {...props} {...{ route, i, currentPath, openMenu, handleOpenMenu, user }} />
                        )
                    })}
                </Menu>
            </div>

            <div className="content">
                <div className="top-bar">
                    <div className="title__wrapper">
                        <div className="title">{title}</div>
                        <div className="subtitle-wrapper">{subtitle}</div>
                    </div>
                </div>
                <div className="content-children">{children}</div>
            </div>
        </div>
    )
}

export default DashboardLayout

const SideBarItems = ({ route, i, currentPath, openMenu, handleOpenMenu, user }) => {
    const hasSubroutes = route.subroutes?.length > 0
    const isMenuOpen = currentPath?.includes(route.routeLink) || openMenu === route.routeLink

    return (
        <div className="route">
            {hasSubroutes ? (
                <div
                    onClick={() => handleOpenMenu(route.routeLink)}
                    key={i}
                    className={`sidebar-item ${currentPath?.includes(route.routeLink) ? 'active' : null}`}
                    style={!user?.firstLogin && isMenuOpen ? { marginBottom: 0 } : {}}
                >
                    <div className="sidebar-icon">{route.icon}</div>
                    <div className="sidebar-label">{route.label}</div>
                </div>
            ) : (
                <Link
                    to={!user?.firstLogin ? route.routeLink : `/club/${user?.id}/my-club/edit-profile`}
                    key={i}
                    className={
                        !user?.firstLogin
                            ? `sidebar-item ${currentPath?.includes(route.routeLink) ? 'active' : null}`
                            : 'disabled-sidebar-item'
                    }
                >
                    <div className="sidebar-icon">{route.icon}</div>
                    <div className="sidebar-label">{route.label}</div>
                </Link>
            )}
            {isMenuOpen &&
                route.subroutes?.map((subroute, si) => {
                    return (
                        <Link
                            to={route.routeLink + subroute.routeLink}
                            key={si}
                            className={`sidebar-subroutes-link ${
                                currentPath?.includes(subroute.routeLink) ? 'active' : null
                            }`}
                        >
                            <div className="sidebar-subroutes-label">{subroute.label}</div>
                        </Link>
                    )
                })}
        </div>
    )
}
