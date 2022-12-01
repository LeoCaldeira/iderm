import React, { useEffect, useState } from 'react'
import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import products from 'productsTi.json'
import './EspecificTiProduct.scss'
import { Link } from 'react-router-dom'

const EspecificTiProduct = () => {
    const path = decodeURI(window.location.pathname.split('/').pop())
    const productName = path.replaceAll('-', ' ')
    const [product, setProduct] = useState({})
    const productsTitles = Object.keys(products)

    useEffect(() => {
        let jsonProducts = []
        Object.values(products).forEach((products) => products.forEach((product) => jsonProducts.push(product)))

        let product = jsonProducts.filter((product) => product.name.toLowerCase() === productName.toLowerCase())[0]

        setProduct(product)
    }, [product, productName])

    return (
        <AuthLayout>
            <div className="especific-product__wrapper">
                <div className="content">
                    <div className="header">
                        <h1>{product.name}</h1>
                        <img src={product.image} alt="" className="photo" />
                    </div>

                    {product?.descriptions?.map((description, i) => (
                        <p key={i}>{description}</p>
                    ))}
                    <div className="options">
                        <p>
                            <span>
                                Situação:
                                <br />
                            </span>
                            {` ${product.situation}`}
                        </p>
                        <p>
                            <span>
                                Prioridade:
                                <br />
                            </span>
                            {` ${product.priority}`}
                        </p>
                        <br />
                        <p>
                            <span>
                                Responsabilidade:
                                <br />
                            </span>
                            {` ${product.responsability}`}
                        </p>
                    </div>
                </div>
                <div className="divider" />
                <div className="products">
                    {productsTitles.map((title) => {
                        return (
                            <div className="product">
                                <h1>{title.toUpperCase()}</h1>
                                {products[title].map((prod) => (
                                    <Link
                                        to={`/catalogo/${prod.name.replace(/\s/g, '-').toLowerCase()}`}
                                        state={{ product: prod }}
                                        onClick={() => {
                                            window.scrollTo(0, 0)
                                            setProduct(prod)
                                        }}
                                    >
                                        <p
                                            className={`${
                                                productName.toLowerCase() === prod.name.toLowerCase() ? 'active' : ''
                                            } `}
                                        >
                                            {prod.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </AuthLayout>
    )
}

export default EspecificTiProduct
