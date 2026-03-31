import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { PiLinkedinLogo } from "react-icons/pi";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_top">
            <div className="footer_leftinfo">
              <img src="/imgs/logo.svg" alt="" />
              <div className="fotter_toptitle">
                Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
                Gravida massa volutpat aenean odio erat nullam fringilla.
              </div>
              <div className="footer_top_icons">
                <FaFacebook />
                <BsInstagram />
                <BsTwitter />
                <PiLinkedinLogo />
                <BsYoutube />
              </div>
            </div>
            <div className="quick_sort">
              <div className="top_name">Quick links</div>
              <ul className="links_footer">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/cart"}>Cart</NavLink>
                </li>
                <li>
                  <NavLink to={"/shop"}>Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"/Product_page"}>Product page</NavLink>
                </li>
                <li>
                  <NavLink to={"/checkup"}>Check up </NavLink>
                </li>
              </ul>
            </div>
            <div className="help_info">
              <div className="top_name">Help & info</div>
              <h2>Track Your Order</h2>
              <h2>Returns policies</h2>
              <h2>Shipping + Delivery </h2>
              <h2>Contact Us</h2>
              <h2>Faqs</h2>
            </div>
            <div className="contact_us">
              <div className="top_name">Contact us</div>
            
            <div className="question_email">
              Do you have any queries or suggestions?
              <span>yourinfo@gmail.com</span>
            </div>
            <div className="question_email">
              If you need support? Just give us a call.
              <span>+55 111 222 333 44</span>
            </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="footer_bottom_left">
              <div className="footer_shift">
                <h2>We ship with:</h2>
               <div className="imgs_footer_botmo">
                 <img src="/imgs/fa-brands_dhl.svg" alt="" />
                <img src="/imgs/arcticons_post.svg" alt="" />
               </div>

              </div>
               <div className="footer_shift">
                <h2>Payment options:</h2>
                <div className="imgs_footer_botmo">
                     <img src="/imgs/brandico_visa.svg" alt="" />
                <img src="/imgs/brandico_mastercard.svg" alt="" />
                <img src="/imgs/fontisto_paypal.svg" alt="" />
               </div>
              </div>
            </div>
            <div className="footer_botom_title">
              © Copyright 2023 MiniStore. Design by <a href=""> TemplatesJungle</a>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
