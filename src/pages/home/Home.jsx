import React, { useContext } from "react";
import Slider from "../../components/slider/Slider";
import Mobile_product from "../../components/slider/Mobile_product";
import { FaShoppingCart } from "react-icons/fa";
import "./Home.css";
import Note from "../../components/slider/Note";
import { BsInstagram } from "react-icons/bs";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
function Home() {
  const { kinddata } = useContext(DataContext);
  console.log(kinddata);

  return (
    <>
      <Slider />
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
      <div className="mobile_products">
        <div className="container">
          <div className="moile_product_entrance">
            <h1>Mobile Products</h1>
            <span>Go to Shop</span>
          </div>
          <div className="mobiler_sliders">
            <Mobile_product />
          </div>
        </div>
      </div>
      <div className="mobile_products">
        <div className="container">
          <div className="moile_product_entrance">
            <h1>Smart Watches</h1>
            <span>Go to Shop</span>
          </div>
          <div className="mobiler_sliders">
            <Mobile_product />
          </div>
        </div>
      </div>
      <Slider />
      <div className="latest_post">
        <div className="container">
          <div className="latestpost">
            <h1>Latest Posts</h1>
            <span className="read_blogs">Read blogs</span>
          </div>
          <div className="post_cards">
            <div className="post_box">
              <img src="/imgs/posrboimg.svg" alt="" />
              <div className="box_post_titlw">
                <h2>feb 22, 2023 - Gadgets</h2>
                <h3>Get some cool gadgets in 2023</h3>
              </div>
            </div>
            <div className="post_box">
              <img src="/imgs/posrboimg.svg" alt="" />
              <div className="box_post_titlw">
                <h2>feb 22, 2023 - Gadgets</h2>
                <h3>Get some cool gadgets in 2023</h3>
              </div>
            </div>
            <div className="post_box">
              <img src="/imgs/posrboimg.svg" alt="" />
              <div className="box_post_titlw">
                <h2>feb 22, 2023 - Gadgets</h2>
                <h3>Get some cool gadgets in 2023</h3>
              </div>
            </div>
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
            {kinddata.map((item) => {
              return (
                <div className="img_box">
                  <img src={item.img} alt="" />
                  <div className="img_boxicons">
                    <Link>
                      <BsInstagram />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
