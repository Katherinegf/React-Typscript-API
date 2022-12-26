import { useContext } from "react"
import { ProductContext, useProductContext } from "../contexts/ProductContext"
import { ShoppingCartContext, useShoppingCartContext } from "../contexts/ShoppingCartContext"

const TestView = () => {
    // const shoppingCartContext = /*useContext(ShoppingCartContext)*/ useShoppingCartContext()
    // const productContext = /*useContext(ProductContext)*/ useProductContext()

    // console.log("---------------")
    // console.log(shoppingCartContext?.items.length)
    // console.log("---------------")

    // console.log("---------------")
    // console.log(productContext?.allProducts.length)
    // console.log("---------------")

    return (
        <div>
            Test
        </div>
    )
}

export default TestView