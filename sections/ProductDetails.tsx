import React from 'react'
import { ProductItem } from '../models/ProductModels'


interface ProductDetailsType {
   item: ProductItem
}

const ProductDetails: React.FC<ProductDetailsType> = ({item}) => {
  return (
    <section className="product-details">
        <div className="container">
            <div>
            <div>{item.name}</div>
            <img src={'http://localhost:5000/api/products/image/' + item.productId} />
        </div>
        </div>        
    </section>

  )
}

export default ProductDetails
