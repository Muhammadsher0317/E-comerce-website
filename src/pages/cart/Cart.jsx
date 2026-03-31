import React from "react";
import "./Cart.css";
import { BsInstagram } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { Button } from "@mui/material";
function Cart() {
  return (
    <>
      <div className="card_entrance">
        <div className="container">
          <h1>Cart</h1>
          <h2>
            Home <IoMdArrowDropright /> Cart
          </h2>
        </div>
      </div>
      <div className="product_carts">
        <div className="container">
          <div className="product_title">
            <h2>Product</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </div>
          <div className="product_cards">
            <div className="product_rows">
              <div className="imgwithtitleforproduct">
                <img src="/imgs/iphoneproduct.svg" alt="" />
                <div className="iphonetitle">
                  <h2>Iphone 13</h2>
                  <span>$1500.00</span>
                </div>
              </div>
              <div className="number_title">
                <button>+</button>
                <span>0</span>
                <button>-</button>
              </div>
              <div className="product_price">$1500.00</div>
              <div className="deleteditem">
                <ImCancelCircle />
              </div>
            </div>
          </div>
          <div className="carttotalt">
            <div className="carttotal_top">
              <h1>Cart totals</h1>
             
            </div>
             <div className="subtotla">
                <div className="subtotla_item">
                  <h2>Subtotal</h2> <span>$1500.00</span>
                </div>
              </div>
              <div className="total">
                <h2>Total</h2> <span>$1500.00</span>
              </div>
              <div className="cartbotom">
                <Button  variant="contained">Update cart</Button>
                <Button variant="contained">Continue shopping</Button>
                <Button variant="contained">Proceed to checkout</Button>
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

export default Cart;
