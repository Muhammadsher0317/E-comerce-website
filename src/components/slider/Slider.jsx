import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./Slider.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <div className="heropagiantio">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper_boxs">
            <div className="swiper_left">
              <h1>Your Products are great.</h1>
              <div className="slider_btns_button">
                <Link to={"/shop"}>
                  <Button className="swiper_button" variant="contained">
                    Shop Product
                  </Button>
                </Link>
              </div>
            </div>
            <div className="swiper_img">
              <img src="/imgs/wath.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="swiper_boxs">
            <div className="swiper_left">
              <h1>Your Products are great.</h1>
              <div className="slider_btns_button">
                <Link to={"/shop"}>
                  <Button className="swiper_button" variant="contained">
                    Shop Product
                  </Button>
                </Link>
              </div>
            </div>
            <div className="swiper_img">
              <img src="/imgs/wath.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="swiper_boxs">
            <div className="swiper_left">
              <h1>Your Products are great.</h1>
              <div className="slider_btns_button">
                <Link to={"/shop"}>
                  <Button className="swiper_button" variant="contained">
                    Shop Product
                  </Button>
                </Link>
              </div>
            </div>
            <div className="swiper_img">
              <img src="/imgs/wath.svg" alt="" />
            </div>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
}

export default Slider;
