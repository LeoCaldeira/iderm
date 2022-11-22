import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from 'components/Home/Home'
import Products from 'components/Products/Products'
import Team from 'components/Team/Team'
import EspecificProduct from 'components/EspecificProduct/EspecificProduct'
import Contact from 'components/Contact/Contact'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<Home />} path="/" exact />
                    <Route element={<Home />} path="/home" />
                    <Route element={<Products />} path="/products" />
                    <Route element={<EspecificProduct />} path={`/products/:productName`} />
                    <Route element={<Team />} path="/team" />
                    <Route element={<Contact />} path="/contact" />
                </Routes>
            </Router>
        </div>
    )
}

export default App
