import { useState, useEffect } from "react";
const MainWork = () => {
  const [width, setWidth] = useState("25%"); // 초기값으로 75% 설정

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 스크롤 위치에 따라 width 값 계산

      const newWidth = Math.max(25, 30 + scrollY * 0.13) + "%";
      // console.log(newWidth);
      setWidth(newWidth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex items-center relative mb-40">
      <div className="h-11/12 bg-white" style={{ width: width }}>
        <div className="absolute top-1/3 left-[23%] text-9xl font-black text-[#134DB9]">
          WO <br /> RK.
        </div>
      </div>
      <div className="w-3/4 h-11/12 bg-[#F6EF49] right-0"></div>
    </div>
  );
};

export default MainWork;
