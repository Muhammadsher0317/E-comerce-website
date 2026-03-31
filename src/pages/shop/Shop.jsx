import React from "react";
import "./Shop.css";
import { BsInstagram } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Shopslider from "../../components/slider/Shopslider";
function Shop() {
  return (
    <>
      <div className="shopmains">
        <div className="container">
          <div className="shopmains_left">
            <div className="shopmaintop">
              <h2>Showing 1–9 of 55 results</h2>
              <select className="shop_selct" name="" id="">
                <option value="">Default sorting</option>
              </select>
            </div>
        
            <div className="shopmainbottom">
              <Shopslider/>
            </div>
           
          </div>
          <div className="shopmains_right">
            <form className="shopsliderform" action="">
              <input className="search_input" type="text" placeholder="Search" />
              <button className="shopslider_button">
                <BiSearch />
              </button>
            </form>

            <div className="categorslar">
              <h1>categories</h1>
              <h2>All</h2>
              <h2>Phones</h2>
              <h2>Accessories</h2>
              <h2>Tablets</h2>
              <h2>Watches</h2>
            </div>
            <div className="categorslar">
              <h1>Tags</h1>
              <h2>White</h2>
              <h2>Cheap</h2>
              <h2>Mobile</h2>
              <h2>Modern</h2>
            </div>
             <div className="categorslar">
              <h1>Brands</h1>
              <h2>Apple</h2>
              <h2>Samsung</h2>
              <h2>Green</h2>
            
            </div>
              <div className="categorslar">
              <h1>Filter by price</h1>
              <h2>Less than $10</h2>
              <h2>$10- $20</h2>
              <h2>$20- $30</h2>
              <h2>$30- $40</h2>
              <h2>$40- $50</h2>
            </div>
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

      <div className="insta_imgs">
        <div className="container">
          <div className="imgbox_title">Shop our insta</div>
          <div className="img_box_cards">
            <div className="img_box">
              <img src="/imgs/iphonephone.svg" alt="" />
              <div className="img_boxicons">
                <BsInstagram />
              </div>
            </div>
            <div className="img_box">
              <img src="/imgs/iphonephone.svg" alt="" />
              <div className="img_boxicons">
                <BsInstagram />
              </div>
            </div>
            <div className="img_box">
              <img src="/imgs/iphonephone.svg" alt="" />
              <div className="img_boxicons">
                <BsInstagram />
              </div>
            </div>
            <div className="img_box">
              <img src="/imgs/iphonephone.svg" alt="" />
              <div className="img_boxicons">
                <BsInstagram />
              </div>
            </div>
            <div className="img_box">
              <img src="/imgs/iphonephone.svg" alt="" />
              <div className="img_boxicons">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
