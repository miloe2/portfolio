import { useEffect, useRef, useState } from "react";
import projectData from "../../assets/data/ProjectData";
import TitleText from "../common/TitleText";

const ProjectRow = () => {
  const diaryImageRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!diaryImageRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = diaryImageRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    };

    if (diaryImageRef.current) {
      diaryImageRef.current.addEventListener("scroll", updateProgress);
      updateProgress();
    }

    return () => {
      diaryImageRef.current?.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      <section className="w-full max-w-7xl ml-auto  flex justify-center flex-col pb-60 pl-10 xl:pl-0">
        <TitleText title="프로젝트" txtColor="#D81519" />
        <div
          ref={diaryImageRef}
          className="items-center whitespace-nowrap flex overflow-x-auto scrollbar-hide space-x-4 mt-4 pr-10"
        >
          {projectData.map((item, index) => (
            <div className="w-72 h-96 flex-shrink-0 relative" key={index}>
              <div
                className="w-full h-3/5 bg-cover rounded-t-lg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="w-full h-2/5 p-4 absolute bottom-0 text-gray-200 flex flex-col bg-[#353742] rounded-b-lg">
                <p className="text-sm/6 "> {item.date} </p>
                <p className="text-base/6 font-thin"> {item.location} </p>
                <p className="text-xl font-medium whitespace-pre-wrap mt-2">{item.title} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-xs w-full h-2 bg-[#616060] mt-8">
          <div
            className="h-full bg-[#D81519]"
            style={{ width: `${Math.min(scrollProgress, 100)}%` }}
          />
        </div>
      </section>
    </>
  );
};

export default ProjectRow;
