import React from "react";
import { BsInstagram } from "react-icons/bs";
import "./Checkup.css";
import { MdArrowRight } from "react-icons/md";
function Checkup() {
  return (
    <>
      <div className="chechup">
        <div className="container">
          <h1>Checkout</h1>
          <p>
            Home <MdArrowRight /> Checkout
          </p>
        </div>
      </div>
      <div className="biiling_detail">
        <div className="container">
          <div className="billingdetail_left">
            <h1>Billing Details</h1>
            <div className="first_name">
              <h2>First name *</h2>
              <input type="text" />
            </div>
            <div className="first_name">
              <h2>Last name *</h2>
              <input type="text" />
            </div>

            <div className="first_name">
              <h2>Company name (optional)</h2>
              <input type="text" />
            </div>

            <div className="first_name">
              <h2>Country / Region *</h2>
              <input type="text" placeholder="United States (US)" />
            </div>

            <div className="first_name">
              <h2>Street address *</h2>
              <input type="text" placeholder="House number and street name" />
            </div>

            <div className="street_adres">
              <h2>Street address *</h2>
              <input type="text" placeholder="House number and street name" />
              <input type="text" placeholder="Appartments, suite, etc." />
            </div>
            <div className="townwithcity">
              <h2>Town / City *</h2>
              <input type="text" />
            </div>

            <div className="townwithcity">
              <h2>State *</h2>
              <input type="text" placeholder="Florida" />
            </div>

            <div className="townwithcity">
              <h2>ZIP Code *</h2>
              <input type="text" placeholder="Florida" />
            </div>
            <div className="phone">
              <h2>Phone *</h2>
              <input type="text" />
            </div>
            <div className="email">
              <h2>Email address *</h2>
              <input type="text" />
            </div>
          </div>
          <div className="billings_right">
            <h1>Additional Information</h1>
            <h2>Order notes (optional)</h2>
            <input
              type="text"
              placeholder="Notes about your order. Like special notes for delivery."
            />
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

export default Checkup;
