import React, { useEffect} from 'react'
import MainMenu from '../sections/MainMenu'
import Breadcrumb from '../sections/Breadcrumb'
import ProductTiles from '../sections/ProductTiles'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductsView: React.FC  = () => {
  const {allProducts, getAll} = useProductContext() as ProductContextType

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
    <MainMenu />
    <Breadcrumb currentPage="Products" />
    <ProductTiles title="Products" items={allProducts} />
    </>
  )
}

 export default ProductsView