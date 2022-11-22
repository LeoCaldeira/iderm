import React, { useState, useEffect } from 'react'
import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import './EspecificProduct.scss'
import { useLocation } from 'react-router-dom'

const EspecificProduct = () => {
    const location = useLocation()
    const { product } = location.state
    const path = window.location.pathname.split('/').pop()

    useEffect(() => {
        console.log('product', product) //TODO remove log
    }, [product])

    return <AuthLayout>EspecificProduct</AuthLayout>
}

export default EspecificProduct
