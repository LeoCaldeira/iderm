import React from 'react'
import { Link } from 'react-router-dom'
import './AuthLayout.scss'
import Logo from 'assets/logo.png'

const AuthLayout = (props) => {
    const { children } = props
    const path = window.location.pathname

    return (
        <div className="auth-wrapper">
            <div className="auth-header-wrapper">
                <Link to="/">
                    <span className={`${path === '/' ? 'active' : ''}`}>Home</span>
                </Link>
                <Link to="/products">
                    <span className={`${path.includes('/products') ? 'active' : ''}`}>Produtos</span>
                </Link>
                <Link to="/">
                    <img src={Logo} alt="logo" className="logo" />
                </Link>
                <Link to="/about">
                    <span className={`${path.includes('/about') ? 'active' : ''}`}>Quem somos</span>
                </Link>
                <Link to="/contact">
                    <span className={`${path.includes('/contact') ? 'active' : ''}`}>Contato</span>
                </Link>
            </div>
            {children}
        </div>
    )
}

export default AuthLayout
