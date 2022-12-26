import {useContext, useState } from "react"
import { createContext } from "react"
import { ProductItem } from "../models/ProductModels"

interface ProductProviderType {
    children: any
}
export interface ProductContextType {
    product: ProductItem
    allProducts: ProductItem[]
    featured: ProductItem[]
    get: (productId?: string) => void
    getAll: (take?: number) => void
    getFeatured: (take?: number) => void    
}

export const ProductContext = createContext <ProductContextType | null >(null)

export const useProductContext = () => {
  return useContext(ProductContext)
}
export const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = {productId: -1, name: '', category:'', price: 0, imageName:'' }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [allProducts, setAllProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])

    const get = async (productId?: string) => {
        if (productId !== undefined) {
            const res = await fetch(baseUrl + ` /${productId}`)
        setProduct (await res.json()) 
        } 
    }

    const getAll = async (take: number = 0) => { //Hämtar alla produkter
        let url = baseUrl

        if (take !==0)
            url = baseUrl + `?take=${take}`

        const res = await fetch(url )
        setAllProducts(await res.json())
    }
    const getFeatured = async (take: number = 0) => {
        let url = baseUrl /*+ `tag=featured`*/

        if (take !==0)
            url += `?&take=${take}`

        const res = await fetch(url )
        setFeatured(await res.json())
    }
    return <ProductContext.Provider value={{product, allProducts, featured, get, getAll, getFeatured}}>
     {children}
    </ProductContext.Provider>
}

export default ProductProvider