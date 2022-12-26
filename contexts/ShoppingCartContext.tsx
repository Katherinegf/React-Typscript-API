import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { CartItem } from "../models/ShoppingCartModels";

interface ShoppingCartProviderType {
    children: any
}

export interface ShoppingCartContextType {
    items: CartItem []
     totalQuantity: number
     increment: (cartItem: CartItem) => void
     decrement: (cartItem: CartItem) => void
     remove: (productId: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null)
 export const useShoppingCartContext = () => { return useContext(ShoppingCartContext)}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderType> = ({children}) => {
    const [items, setItems] = useState<CartItem[]>([])
    const totalQuantity = items.reduce((quantity, item) => item.quantity + quantity, 0)

    const increment = (cartItem: CartItem) => {
        const {productId, product} = cartItem

        setItems(items => {
            if (items.find(item => item.productId === productId) == null) {
               return [...items,  {  productId, product, quantity: 1 }] 
        } else {
            return items.map(item => {
                if (item.productId === productId) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        }
    })
}

const decrement = (CartItem: CartItem) => {
    const {productId} = CartItem

    setItems(items => {
        if (items.find(item => item.productId === productId)?.quantity === 1) {
            return items.filter(item => item.productId !== productId)
        } else {
            return items.map(item => {
                if (item.productId === productId) {
                    return {...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
        }
    })
}

const remove = (productId: number) => {
    setItems(items => {return items.filter(item => item.productId !== productId)
    })
}

return (<ShoppingCartContext.Provider value={{items, totalQuantity, increment, decrement, remove}}>
    {children}
    <ShoppingCart />
</ShoppingCartContext.Provider>)

}