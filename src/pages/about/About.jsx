import React from "react";
import "./About.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Note from "../../components/slider/Note";
import { BsInstagram } from "react-icons/bs";
function About() {
  return (
    <>
      <div className="about_entarce">
        <div className="container">
          <h1>About us</h1>
          <div className="abours_title_row">
            Home <IoIosArrowForward /> <span>About us</span>
          </div>
        </div>
      </div>

      <div className="home_extradata">
        <div className="container">
          <div className="extra_data_box">
            <div className="extra_data_icons">
              <FaShoppingCart />
            </div>
            <div className="extra_data_info">
              <h1>Free delivery</h1>
              <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="extra_data_box">
            <div className="extra_data_icons">
              <FaShoppingCart />
            </div>
            <div className="extra_data_info">
              <h1>Free delivery</h1>
              <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="extra_data_box">
            <div className="extra_data_icons">
              <FaShoppingCart />
            </div>
            <div className="extra_data_info">
              <h1>Free delivery</h1>
              <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="extra_data_box">
            <div className="extra_data_icons">
              <FaShoppingCart />
            </div>
            <div className="extra_data_info">
              <h1>Free delivery</h1>
              <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="minidtore_found">
        <div className="container">
          <img src="/imgs/backrouindvideoimg.svg" alt="" />
          <div className="mindtrone_right">
            <h1>How was Ministore Found?</h1>
            <p>
              Risus augue curabitur diam senectus congue velit et. Sed vitae
              metus nibh sit era. Nulla adipiscing pharetra pellentesque
              maecenas odio eros at. Et libero vulputate amet duis erat volutpat
              vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing
              pharetra pellentesque maecenas odio eros at. Quam libero etiam et
              in ac at quis. 
              <br />
              <br />
              Sed vitae metus nibh sit era. Nulla adipiscing
              pharetra pellentesque maecenas odio eros at. Et libero vulputate
              amet duis erat volutpat vitae eget. Quam libero etiam et in ac at
              quis. Risus augue curabitur diam senectus congue velit et.{" "}
            </p>
            <button>Shop Our store</button>
          </div>
        </div>
      </div>

      <div className="noteslar">
        <div className="container">
          <Note />
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

export default About;
