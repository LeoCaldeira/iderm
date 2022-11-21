import React from 'react'
import { Link } from 'react-router-dom'
import './AuthLayout.scss'
import Logo from 'assets/logo.png'

const AuthLayout = (props) => {
    const { children } = props

    return (
        <div className="auth-wrapper">
            <div className="auth-header-wrapper">
                <Link to="/">Home</Link>
                <Link to="/products">Produtos</Link>
                <Link to="/">
                    <img src={Logo} alt="logo" className="logo" />
                </Link>
                <Link to="/contact">Contato</Link>
                <Link to="/products">Produtos</Link>
            </div>
            {children}
        </div>
    )
}

export default AuthLayout
