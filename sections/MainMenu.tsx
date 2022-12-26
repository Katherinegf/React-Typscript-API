import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'


const MainMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)  // C# public bool {get; set; }
  const { totalQuantity} = useShoppingCartContext() as ShoppingCartContextType

  const toggleMenu =() => {
    setShowMenu (!showMenu)
  }
  return (
  <nav className="mainmenu container">
      <NavLink to="/" end className="logo">Fixxo.</NavLink>
    
      <div className={`menu-links ${ showMenu ? "d-grid": ""}`}>
          <NavLink to="/" end className="menu-link">Home</NavLink>
          <NavLink to="/categories" end className="menu-link">Categories</NavLink>
          <NavLink to="/products"  className="menu-link">Products</NavLink>
          <NavLink to="/contacts" end className="menu-link">Contacts</NavLink>
      </div>
      <div className="menu-icons">
        <button className="menu-icon btn-menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{totalQuantity}</span>
          <i className="fa-regular fa-shopping-bag"></i>
        </button>
        <button onClick={toggleMenu} className="menu-icon btn-menu-icon d-xl-none">
           <i className="fa-regular fa-bars"></i>
        </button>
      </div>
      {/* <div className="menu-link-icons">
        <NavLink  to="/search" end className="menu-link-icon">
           <i className="fa-regular fa-magnifying-glass"></i>
        </NavLink>
       
        <NavLink to="/compare" end className="menu-link-icon d-none d-md-flex">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme"></span>
          <i className="fa-regular fa-code-compare"></i>
        </NavLink>
        <NavLink to="/wishlist" end className="menu-link-icon d-none d-md-flex">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme"></span>
          <i className="fa-regular fa-heart"></i>
        </NavLink>
        
        <button className= "menu-link-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">totalQuantity</span>
            <i className="fa-regular fa-bag-shopping"></i>
        </button>

        
      </div> */}
   </nav>
  )
}

export default MainMenu