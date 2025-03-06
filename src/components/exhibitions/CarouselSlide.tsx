// import { useEffect, useState } from "react";
import carouselData from "../../assets/data/CarouselData";
// import { BsFillPauseFill, BsPlayFill } from "react-icons/bs";
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
// // import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TitleText from "../common/TitleText";
import Text from "../common/Text";

const CarouselSlide = () => {
  return (
    <section className="mx-auto max-w-7xl mb-60">
      <TitleText title={"주요프로젝트"} txtColor="red" />
      <div className="bg-red-500 mt-4 flex w-full h-96">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1.5}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          centeredSlides={true}
          pagination={{ clickable: true }}
          style={{ backgroundColor: "black", padding: "" }}
        >
          {carouselData.map(({ imgUrl, title, desc, venue, location }, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img src={imgUrl} alt="" className="w-full h-full object-cover rounded-lg" />
                <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />
                <p
                  className="absolute text-white bg-red-00 max-w-xs w-full top-1/2 -translate-y-1/2
              left-1/2 -translate-x-1/2 
              sm:left-16 sm:translate-x-0"
                >
                  <Text desc={location} txtColor="#aaa" size="sm" />
                  <TitleText title={title} txtColor="white" />
                  <Text desc={desc} txtColor="white" />
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarouselSlide;
