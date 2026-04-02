import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Product_page from "./pages/product_page/Product_page";
import Checkup from "./pages/checkup/Checkup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
export const DataContext = createContext();
function App() {
  const [kinddata, setkinddata] = useState([
    {
      id: 1,
      name: "Iphone 17",
      price: 1200,
      description: "lorem12",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/apple-iphone-17-cnnu-review-credit-henry-t-casey-01.jpg?c=16x9&q=h_833,w_1480,c_fill",
    },
    {
      id: 2,
      name: "Iphone 16",
      price: 1000,
      description: "lorem16",
      img: "https://hips.hearstapps.com/hmg-prod/images/iphone-16-review-lead-6724ffef2985f.jpg?crop=0.6668170878459687xw:1xh;center,top&resize=640:*",
    },
    {
      id: 3,
      name: "Iphone 15",
      price: 900,
      description: "lorem15",
      img: "https://www.macworld.com/wp-content/uploads/2024/10/iPhone-15-review-1-2.jpg?quality=50&strip=all",
    },
    {
      id: 4,
      name: "Iphone 14",
      price: 700,
      description: "lorem14",
      img: "https://m.media-amazon.com/images/I/618Bb+QzCmL.jpg",
    },
  ]);

  return (
    <>
      <DataContext.Provider value={{kinddata,setkinddata}} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/Product_page" element={<Product_page />} />
            <Route path="/checkup" element={<Checkup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
