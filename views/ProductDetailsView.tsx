import React, { useEffect} from 'react'
import MainMenu from '../sections/MainMenu'
import Breadcrumb from '../sections/Breadcrumb'
import ProductDetails from '../sections/ProductDetails'
import { useParams } from 'react-router-dom'
import { ProductContext, ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView: React.FC = () => {
    const {id} = useParams<string>()
    const ProductContext = useProductContext() as ProductContextType

    useEffect(() => {
        ProductContext.get(id)
    }, [])

    return (
        <>
        <MainMenu />
        <Breadcrumb parentPage="Products" currentPage={ProductContext.product.name} />
        <ProductDetails item={ProductContext.product} />
        </>
    )
}

export default ProductDetailsView


