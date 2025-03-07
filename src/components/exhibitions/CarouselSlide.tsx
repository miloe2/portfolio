import { useState, useRef } from "react";
import { BsFillPauseFill, BsPlayFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import carouselData from "../../assets/data/CarouselData";
import TitleText from "../common/TitleText";
import Text from "../common/Text";
const bulletStyle = `
  .custom-pagination .swiper-pagination-bullet {
    width: 0.4rem;
    height: 0.4rem;
    background-color: white;
    opacity: 0.7;
    border-radius: 999px;
    transition: all 0.5s;
  }
  .custom-pagination .swiper-pagination-bullet-active {
    background-color: #D81519;
    width: 1.5rem;
    opacity: 1;
  }
`;

const CarouselSlide = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); 

  // 재생/일시정지
  const handleToggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop(); 
    } else {
      swiperRef.current.autoplay.start(); 
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="mx-auto mb-60 w-full px-10 xl:px-0">
      <style>{bulletStyle}</style>
      <div className="mx-auto max-w-7xl">
        <TitleText title={"주요프로젝트"} txtColor="#D81519" />
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.5}
        loop={true}
        centeredSlides={true}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
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
            <div className="relative w-full 2xl:h-96 h-80 cursor-pointer">
              <img src={imgUrl} alt="" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />
              <div
                className="absolute text-white opacity-100 max-w-xs w-full top-1/2 -translate-y-1/2
                left-1/2 -translate-x-1/2 px-4
                md:left-16 md:translate-x-0 md:px-0
              "
              >
                <Text desc={location} txtColor="#aaa" size="sm" />
                <TitleText title={title} txtColor="white" />
                <Text desc={desc} txtColor="white" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center mt-4">
          <div className="custom-pagination !w-auto" />
          <button
            className="mt-1 ml-2 text-white ring-1 ring-white opacity-70 rounded-full w-5 h-5 justify-center flex items-center"
            onClick={handleToggleAutoplay}
          >
                    <IconContext.Provider value={{ className: "w-4 h-4" }}> {/* ✅ 아이콘 스타일 설정 */}
            
            {!isPlaying ? 
            <BsPlayFill /> : <BsFillPauseFill />}
            </IconContext.Provider>
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default CarouselSlide;
