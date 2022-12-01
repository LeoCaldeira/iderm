import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import React from 'react'
import './Home.scss'
import Atendimento from 'components/elements/Atendimento/Atendimento'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <AuthLayout>
            <div className="home-wrapper">
                <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Atendimento />
                </div>
                <span className="home-bottom-image">Cuidando da sua beleza com ética e segurança</span>
            </div>
        </AuthLayout>
    )
}

export default Home
