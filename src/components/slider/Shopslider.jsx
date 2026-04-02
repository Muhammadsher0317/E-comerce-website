import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";
import "swiper/css/pagination";

import "./Shopslider.css";

import { Grid, Pagination } from "swiper/modules";
import { Button } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
function Shopslider() {
  const { kinddata } = useContext(DataContext);
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwipershoplar"
      >
        {kinddata.map((item) => {
          return (
            <SwiperSlide className="slidershopsa">
              <div className="slider_box">
                <div className="slider_img">
                  <img src={item.img} alt="" />
                </div>

                <div className="slider_title">
                  <h2>{item.className}</h2>
                  <h3 className="newsh2">{item.price}</h3>
                </div>
                <Link to={"/cart"}>
                  <Button className="swiper_buttonslar" variant="contained">
                    Add to cart <FaShoppingCart />
                  </Button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slidershopsa">
          <div className="slider_box">
            <div className="slider_img">
              <img src="/imgs/pthone.svg" alt="" />
            </div>

            <div className="slider_title">
              <h2>Iphone 11</h2>
              <h3 className="newsh2">$1100</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Shopslider;
