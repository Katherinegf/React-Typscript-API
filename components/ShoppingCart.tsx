import React from 'react'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart: React.FC =() => {
 const {items} = useShoppingCartContext() as ShoppingCartContextType

  return (
    <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-aria-labelledby="shoppingCartLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping me-3"></i>Shopping Cart</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {
         items.map(item => (<ShoppingCartItem key={item.productId} item={item} /> ))
        }

      </div>
    </div>
  )
}

export default ShoppingCart