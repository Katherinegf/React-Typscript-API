import React from 'react'
import ProductTile from '../components/ProductTile'
import { ProductItem } from '../models/ProductModels'

interface ProductTilesType {
  title: string
  items: ProductItem[]
}

const ProductTiles: React.FC<ProductTilesType> = ({title, items = []}) => {
  return (
    <section className="product-tiles">
            <div className="container">
              <h1>{title}</h1>
                <div className ="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                  {
                    items.map( product => <ProductTile key={product.productId} item={product} />)
                  }         
                </div>
            </div>      
    </section>
  )
}

export default ProductTiles