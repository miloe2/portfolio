import { useEffect } from "react";
import Intro from "../components/exhibitions/Intro";
import CarouselSlide from "../components/exhibitions/CarouselSlide";
import Whatidid from "../components/exhibitions/Whatidid";
import ProjectRow from "../components/exhibitions/ProjectRow";

const Exhibitions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // 스크롤을 최상단으로 이동
  }, []); // 빈 배열로 전달하여 컴포넌트가 처음 마운트될 때 한 번만 실행

  return (
    <div className="bg-black pb-40 ">
      <Intro />
      <Whatidid />
      {/* <CarouselSlide /> */}
      <ProjectRow />
    </div>
  );
};

export default Exhibitions;
