import Input from 'components/elements/Input/Input'
import { UserContext } from 'context/userContext'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { mockedUsers } from 'utils'
import './Login.scss'

const Login = (props) => {
    const { user, setUser } = useContext(UserContext)

    const [loginUser, setLoginUser] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [errorUser, setErrorUser] = useState(false)
    const navigate = useNavigate()

    const handleLogin = () => {
        const selectedUser = mockedUsers.filter(
            (user) => loginUser === user.email && loginPassword === user.password
        )[0]

        if (selectedUser) {
            setUser(selectedUser)
            navigate('/home')
        } else {
            setErrorUser(true)
        }
    }

    useEffect(() => {
        console.log('loginUser', loginUser) //TODO remove log
    }, [loginUser])

    useEffect(() => {
        console.log('loginPassword', loginPassword) //TODO remove log
    }, [loginPassword])

    return (
        <div className="login-wrapper">
            <div className="container">
                <Input
                    value={loginUser}
                    setValue={setLoginUser}
                    error={errorUser}
                    errorMessage="Valor Invalido"
                    onFocus={() => setErrorUser(false)}
                />
                <Input
                    value={loginPassword}
                    setValue={setLoginPassword}
                    type="password"
                    error={errorUser}
                    errorMessage="Valor Invalido"
                    onFocus={() => setErrorUser(false)}
                />
                <button onClick={handleLogin}>Entrar</button>
            </div>
        </div>
    )
}

export default Login
