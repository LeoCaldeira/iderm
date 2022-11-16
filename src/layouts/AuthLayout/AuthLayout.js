import React from 'react'
import { Link } from 'react-router-dom'
import './AuthLayout.scss'

const AuthLayout = (props) => {
    const { children } = props

    return (
        <div className="home-wrapper">
            <div className="header-wrapper">
                <Link to="/home">
                    <img src="#" alt="logo" />
                </Link>
                <div className="header-options">
                    <div>
                        <Link to="/contact">Contato</Link>
                    </div>
                    <div>
                        <Link to="/products">Produtos</Link>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default AuthLayout
