import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Mobile_product.css";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../App";
function Mobile_product() {
  const { kinddata } = useContext(DataContext);
  return (
    <>
      {kinddata.map(() => {
        return;
      })}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwipersecon"
      >

        {
          kinddata.map((items)=>{
            return <SwiperSlide className="secondslider">
          <div className="slider_box">
            <div className="slider_img">
              <img src={items.img} alt="" />
            </div>

            <div className="slider_title">
              <h2>{items.name}</h2>
              <h3 className="newsh2">{items.price}</h3>
            </div>
            <Button className="swiper_buttonslar" variant="contained">
              Add to cart <FaShoppingCart />
            </Button>
          </div>
        </SwiperSlide>
          })
        }
        
        

        <SwiperSlide className="secondslider">
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
        <SwiperSlide className="secondslider">
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

export default Mobile_product;
