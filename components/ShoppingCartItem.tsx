import React from 'react'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { CartItem } from '../models/ShoppingCartModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface ShoppingCartItemType {
    item: CartItem
}

const ShoppingCartItem: React.FC<ShoppingCartItemType> = ({item}) => {
    const {increment, decrement, remove} = useShoppingCartContext() as ShoppingCartContextType

    return (
        <div className="shopping-cart-item">
            <div className="item-image">
                <img src={'http://localhost:5000/api/products/image/' + item.productId} alt= {item.product.name} />
            </div>
            <div className="item-info">
                <div className="item-info-quantity">
                    <button className="box-button-right" onClick={() => decrement(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="box-button-right" onClick={() => increment(item)}>+</button>
                    </div>
                </div>
            <div className="item-price">
                <div>{currencyFormatter(item.product.price * item.quantity)}</div>
                <button onClick={() => remove(item.productId)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}

export default ShoppingCartItem