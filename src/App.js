import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import Home from 'components/Home/Home'
import { UserContext } from 'context/userContext'
import { useEffect, useMemo, useState } from 'react'
import Login from 'components/Login/Login'
import Products from 'components/Products/Products'
import Contact from 'components/Contact/Contact'

function App() {
    const [user, setUser] = useState({
        role: 'user',
        name: 'Leonardo Caldeira',
        image: '',
    })
    const userProvider = useMemo(() => ({ user, setUser }), [user, setUser])

    useEffect(() => {
        if (!user) return <Navigate to="/login" />
    }, [user])

    return (
        <div className="App">
            <Router>
                <UserContext.Provider value={userProvider}>
                    <Routes>
                        <Route element={<Home />} path="/" exact />
                        <Route element={<Home />} path="/home" />
                        <Route element={<Products />} path="/products" />
                        <Route element={<Contact />} path="/contact" />
                    </Routes>
                </UserContext.Provider>
            </Router>
        </div>
    )
}

export default App
