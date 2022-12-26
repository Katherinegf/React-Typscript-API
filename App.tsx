import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ProductProvider from './contexts/ProductContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import TestView from './views/TestView';
import './assets/scss/style.scss'

function App() {
    return (
    //   <BrowserRouter>

    //     {/* <ShoppingCartProvider>
    //       <ProductProvider>

    //     </ProductProvider>
    //   </ShoppingCartProvider> */}
    //   <Routes>
    //     < Route path="/" element={<TestView />} />
    //   </Routes>

    //  </BrowserRouter>

        <BrowserRouter>
           <ShoppingCartProvider >
             <ProductProvider>
          <Routes>
            < Route path="/" element={<HomeView />} />
            < Route path="/products" element={<ProductsView />} />
            < Route path="/products/:name" element={<ProductDetailsView />} />
            < Route path="/contacts" element={<ContactsView/>} />
            < Route path="*" element={<NotFoundView />} />
          </Routes>
          </ProductProvider>
          </ShoppingCartProvider>
        </BrowserRouter>
    );
}
      
export default App;