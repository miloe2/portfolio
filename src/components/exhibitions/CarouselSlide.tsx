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

const bulletStyle = `
  .custom-pagination .swiper-pagination-bullet {
    width: 0.4rem;
    height: 0.4rem;
    background-color: white;
    opacity: 1;
    border-radius: 999px;
    transition: all 0.5s;
  }
  .custom-pagination .swiper-pagination-bullet-active {
    background-color: #D81519;
    width: 1.5rem;
  }
`;

const CarouselSlide = () => {
  return (
    <section className="mx-auto mb-60 w-full px-10 xl:px-0">
      <style>{bulletStyle}</style>
      <div className="mx-auto max-w-7xl">
        <TitleText title={"주요프로젝트"} txtColor="#D81519" />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.5}
        loop={true}
        centeredSlides={true}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        style={{ paddingBottom: "40px", width: "100%" }}
      >
        {carouselData.map(({ imgUrl, title, desc, location }, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-80">
              <img src={imgUrl} alt="" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />
              <p
                className="absolute text-white bg-red-00 max-w-xs w-full top-1/2 -translate-y-1/2
                left-1/2 -translate-x-1/2 px-4
                md:left-16 md:translate-x-0 md:px-0
              "
              >
                <Text desc={location} txtColor="#aaa" size="sm" />
                <TitleText title={title} txtColor="white" />
                <Text desc={desc} txtColor="white" />
              </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination bg-blue-00 bottom-20 absolute w-full flex justify-center"></div>
      </Swiper>
    </section>
  );
};

export default CarouselSlide;
