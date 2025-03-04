import { useEffect, useState } from "react";
import carouselData from "../../assets/data/CarouselData";
import { BsFillPauseFill, BsPlayFill } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TitleText from "../common/TitleText";

const CarouselSlide = () => {
  return (
    <section className="max-w-7xl mx-auto w-full bg-yellow-500 container">
      <TitleText title={"주요프로젝트"} txtColor="red" />
      <div className="bg-red-500 mb-60 flex w-full h-80">
        {/* <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1.5}
          pagination={{ clickable: true }}
          style={{ backgroundColor: "white" }}
        >
          {
            carouselData.map((slide, i) => (
              <SwiperSlide>
                <div
                className="h-full bg-cover bg-center " 
                style={{backgroundImage: `url(${slide.imgUrl})`}}>

                </div>
              </SwiperSlide>
            ))
          }
          <SwiperSlide>
            <div className="bg-blue-500 h-full">hi</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-800 h-full">hi</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-500 h-full">hi</div>
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
};

export default CarouselSlide;
