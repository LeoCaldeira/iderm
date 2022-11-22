import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import React, { useState } from 'react'
import products from 'products.json'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import './Products.scss'
import { Link } from 'react-router-dom'

const Products = () => {
    const tags = Object.keys(products)
    const [selectedTags, setSelectedTags] = useState(['corporais', 'esteticos', 'laser'])

    const handleTag = (tag) => {
        let newTags = []
        if (selectedTags?.includes(tag))
            selectedTags.forEach((oldTag) => {
                if (oldTag !== tag) {
                    newTags.push(oldTag)
                }
            })
        else {
            newTags = [...selectedTags, tag]
        }

        setSelectedTags([...newTags.sort()])
    }

    return (
        <AuthLayout>
            <div className="products-wrapper">
                {tags.map((tag) => (
                    <>
                        <div className="tag-wrapper" onClick={() => handleTag(tag)}>
                            <span className="tag">{tag}</span>
                            {selectedTags?.includes(tag) ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
                        </div>
                        {selectedTags?.includes(tag) && (
                            <div className="products-content">
                                {products[tag].map((product) => (
                                    <div className="product">
                                        <img src={product.image} alt="" />
                                        <div className="product__infos">
                                            <h4>{product.name}</h4>

                                            <p>{product.description[0]}</p>

                                            <Link
                                                to={`/products/${product.name.replace(/\s/g, '-').toLowerCase()}`}
                                                state={{ product: product }}
                                            >
                                                <button className="more-info-button">Mais detalhes</button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ))}
            </div>
        </AuthLayout>
    )
}

export default Products
