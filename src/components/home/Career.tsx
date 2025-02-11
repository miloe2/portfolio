import { useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CareerDescription from "./CareerDescription";
import { career, project, skills, education } from "../../assets/data/careerData";

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibilityChange = (_target: Element, isIntersecting: boolean) => {
    setIsVisible(isIntersecting);
  };

  const careerList = [
    { content: career, delay: "" },
    { content: project, delay: "delay-100" },
    { content: skills, delay: "delay-300" },
    { content: education, delay: "delay-500" },
  ];

  const divRef = useRef(null);
  useIntersectionObserver([divRef], handleVisibilityChange);

  return (
    <div
      ref={divRef}
      className={`
        max-w-7xl w-full mx-auto mt-40 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-16
      `}
    >
      {careerList.map((item, index) => (
        <div
          key={index}
          className={`transition-all duration-1000 transform delay ${item.delay} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <CareerDescription content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default Career;
