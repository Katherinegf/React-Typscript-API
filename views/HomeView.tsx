import React, { useEffect} from 'react'
import MainMenu from '../sections/MainMenu'
import Showcase from '../sections/Showcase'
import ProductTiles from '../sections/ProductTiles'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const HomeView: React.FC = () => {
  const {featured, getFeatured} = useProductContext() as ProductContextType

    useEffect(() => {
      getFeatured(8)
    }, [])
  
  return (
    <>
      <header>
        <MainMenu />
        <Showcase />
      </header>
      <ProductTiles title="Featured Products"items= {featured}/>
    </>
  )
}

export default HomeView