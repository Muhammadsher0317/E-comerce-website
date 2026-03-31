import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Note.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Rating, Stack } from "@mui/material";
function Note() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiperthirnote"
      >
        <SwiperSlide className="notelar_cards">
          <div className="note_boxslar">
            <img src="/imgs/notesvg.svg" alt="" />
            <p>
              “Tempus oncu enim pellen tesque este pretium in neque, elit morbi
              sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi
              suspen dise sagittis lorem habi tasse morbi.”
            </p>
            <div className="ratingrow">
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               
              </Stack>
            </div>
            <div className="note_nmaes">
                Emma Chamberlin
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide className="notelar_cards">
          <div className="note_boxslar">
            <img src="/imgs/notesvg.svg" alt="" />
            <p>
              “Tempus oncu enim pellen tesque este pretium in neque, elit morbi
              sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi
              suspen dise sagittis lorem habi tasse morbi.”
            </p>
            <div className="ratingrow">
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               
              </Stack>
            </div>
            <div className="note_nmaes">
                Emma Chamberlin
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide className="notelar_cards">
          <div className="note_boxslar">
            <img src="/imgs/notesvg.svg" alt="" />
            <p>
              “Tempus oncu enim pellen tesque este pretium in neque, elit morbi
              sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi
              suspen dise sagittis lorem habi tasse morbi.”
            </p>
            <div className="ratingrow">
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               
              </Stack>
            </div>
            <div className="note_nmaes">
                Emma Chamberlin
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide className="notelar_cards">
          <div className="note_boxslar">
            <img src="/imgs/notesvg.svg" alt="" />
            <p>
              “Tempus oncu enim pellen tesque este pretium in neque, elit morbi
              sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi
              suspen dise sagittis lorem habi tasse morbi.”
            </p>
            <div className="ratingrow">
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
               
              </Stack>
            </div>
            <div className="note_nmaes">
                Emma Chamberlin
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Note;
