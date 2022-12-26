import {  ProductItem,  } from "./ProductModels"

export interface CartItem {
    productId: number
    product: ProductItem
    quantity: number
}

