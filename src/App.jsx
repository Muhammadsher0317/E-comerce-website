import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Cart from './pages/cart/Cart'
import Shop from './pages/shop/Shop'
import Product_page from './pages/product_page/Product_page'
import Checkup from './pages/checkup/Checkup'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/Product_page' element={<Product_page/>}/>
      <Route path='/checkup'element={<Checkup/>}/>
     </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App