import { useEffect, useState, useRef, useCallback } from "react";
import { whatIdidPhotos, whatIdidText } from "../../assets/data/ExhibitData";
import Text from "../common/Text";
import TitleText from "../common/TitleText";

const Whatidid = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imageOffsets, setImageOffsets] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const blackBG = "bg-black w-full h-full absolute top-0 left-0 opacity-80  transition-opacity";
  const blackOpacity = "bg-black w-full h-full absolute top-0 left-0 opacity-5  transition-opacity";

  // 위치 값 배열에 초기값 세팅 
  useEffect(() => {
    if (imageRefs.current.length > 0) {
      const offsets = imageRefs.current.map(
        (el) => (el?.getBoundingClientRect().top || 0) - window.innerHeight / 2,
      );
      setImageOffsets(offsets);
    }
  }, [whatIdidPhotos]); 

  // 스크롤 이동시 activeIndex 변경
  const handleScroll = useCallback(() => {
    if (imageOffsets.length === 0) return;
    const scrollY = window.scrollY;
    let newIndex: number | null = null;

    for (let i = 0; i < imageOffsets.length; i++) {
      if (
        scrollY >= imageOffsets[i] &&
        (i === imageOffsets.length - 1 || scrollY < imageOffsets[i + 1])
      ) {
        newIndex = i;
        break;
      }
    }

    setActiveIndex((prevIndex) => (prevIndex !== newIndex ? newIndex : prevIndex));
  }, [imageOffsets]);

  // useEffect(() => {
  //   if (imageOffsets.length > 0) {
  //     handleScroll();
  //   }
  // }, [imageOffsets]);

  // 스크롤 이벤트 리스너 추가
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <section className="flex justify-between max-w-5xl mx-auto relative my-60 ">
        <div className="max-w-sm w-full flex flex-col ">
          {whatIdidPhotos.map((photo, index) => (
            <div
              className="w-full h-96 relative"
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
            >
              <img src={photo} alt={photo} className="w-full h-full object-cover" />
              <div className={activeIndex === index ? blackOpacity : blackBG} />
            </div>
          ))}
        </div>

        <div className="max-w-sm w-full sticky top-1/3 h-auto self-start">
          <figure>
            <Text desc="Exhibitions" txtColor="#71717A" />
            <TitleText title="What I did" txtColor="#D81519" />
            <Text
              desc="전시 대행사 해외컨벤션 팀에 근무하며
              해외 전시회 기획 및 현장 운영과
              제안서 기획/작성, 입찰 제안 발표를 수행하였습니다."
              txtColor="#fff"
            />
          </figure>
          <figure className="mt-6">
            <Text desc={`업무분야`} txtColor="#aaa" className="mt-0 mb-4 font-bold text-lg" />
            {whatIdidText.map((text, index) => (
              <Text
                key={index}
                desc={`${activeIndex === index ? "→ " : ""}${text}`}
                txtColor={activeIndex === index ? "#D81519" : "#71717A"}
                className={`mt-0 ${activeIndex === index ? "font-bold" : ""}`}
              />
            ))}
          </figure>
        </div>
      </section>
    </>
  );
};

export default Whatidid;
