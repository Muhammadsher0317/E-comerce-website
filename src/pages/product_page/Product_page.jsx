import React from "react";
import "./Product_page.css";
import Mobile_product from "../../components/slider/Mobile_product";
import { BsStars } from "react-icons/bs";
import { BiStar } from "react-icons/bi";
import { Button } from "@mui/material";
function Product_page() {
  return (
    <>
      <div className="pinkwathch">
        <div className="container">
          <div className="pinkleft">
            <img src="/imgs/pinkwathch.svg" alt="" />
          </div>
          <div className="pinkright">
            <h1 className="pinkwdthch">Pink Watch</h1>
            <div className="star_pink">
              <BiStar /> 5.0
              </div>
              <div className="price_product">$870.00</div>
              <div className="productpagedata">
                Justo, cum feugiat imperdiet nulla molestie ac vulputate
                scelerisque amet. Bibendum adipiscing platea blandit sit sed
                quam semper rhoncus. Diam ultrices maecenas consequat eu tortor
                orci, cras lectus mauris, cras egestas quam venenatis neque.
              </div>
              <h2 className="colorname">Color</h2>
              <div className="coloor_row">
                <h3>Orange</h3>
                <h3>Green</h3>
                <h3>Blue</h3>
                <h3>Black</h3>
              </div>
              <h2 className="texttsixe">Size</h2>
              <div className="size_row">
                <h3>XL</h3>
                <h3>L</h3>
                <h3>M</h3>
                <h3>S</h3>
              </div>
              <div className="stock">2 in stock</div>
              <div className="number_title">
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
              <div className="realted_buttons">
                <Button variant="contained">Buy now</Button>
                <Button className="addtocart" variant="contained">Add to cart</Button>
              </div>
              <div className="sku">SKU: 1223</div>
              <div className="categoryslar">Category: Watch, Screen touch</div>
              <div className="madeslarda">Tags: Classic, Modern</div>
            </div>
          
        </div>
      </div>

      <div className="newrealted">
        <div className="container">
          <div className="moile_product_entrance">
            <h1>Related Products</h1>
            <span>Go to Shop</span>
          </div>
          <div className="mobiler_sliders">
            <Mobile_product />
          </div>
        </div>
      </div>

      <div className="subscribe_toward">
        <div className="container">
          <div className="subscripe_left">
            <h1>Subscribe Us now</h1>
            <p>
              Get latest news, updates and deals directly mailed to your inbox.
            </p>
          </div>
          <div className="subscripe_right">
            <input type="text" placeholder="Your email address here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_page;
