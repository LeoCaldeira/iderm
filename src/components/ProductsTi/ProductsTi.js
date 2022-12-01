import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import React, { useState } from 'react'
import productsTi from 'productsTi.json'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import './ProductsTi.scss'
import { Link } from 'react-router-dom'

const ProductsTi = () => {
    const tags = Object.keys(productsTi)
    const [selectedTags, setSelectedTags] = useState([''])

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
                                {productsTi[tag].map((product) => (
                                    <div className="product" key={product.name}>
                                        <img src={product.image} alt="" />
                                        <div className="product__infos">
                                            <h4>{product.name}</h4>

                                            <p>{product.descriptions[0]}</p>

                                            <Link
                                                to={`/catalogo/${product.name.replace(/\s/g, '-').toLowerCase()}`}
                                                state={{ product: product }}
                                                onClick={() => window.scrollTo(0, 0)}
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

export default ProductsTi
