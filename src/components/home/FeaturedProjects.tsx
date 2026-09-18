import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import DevPrjData from "../../assets/data/DevPrjData";

const FEATURED_COUNT = 3;

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);
  const refs = useMemo(() => [divRef], []);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverState, setHoverState] = useState(new Array(FEATURED_COUNT).fill(false));

  const handleVisibilityChange = (_target: Element, isIntersecting: boolean) => {
    setIsVisible(isIntersecting);
  };
  useIntersectionObserver(refs, handleVisibilityChange);

  const featured = useMemo(() => [...DevPrjData].reverse().slice(0, FEATURED_COUNT), []);

  const handleMouseOver = (index: number) => {
    setHoverState(hoverState.map((_, idx) => idx === index));
  };
  const handleMouseLeave = () => {
    setHoverState(hoverState.map(() => false));
  };

  return (
    <div ref={divRef} className="max-w-7xl w-full mx-auto mt-24 px-4 lg:px-0">
      <div
        className={`flex items-baseline justify-between mb-6 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-400 font-semibold">
          Featured Projects
        </p>
        <button
          onClick={() => navigate("/work")}
          className="text-sm text-zinc-500 hover:text-[#242424] transition-colors"
        >
          전체 프로젝트 보기 ↗
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featured.map((item, index) => (
          <div
            key={item.slug}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/work/${item.slug}`, { state: { scrollToDetail: true } })}
            className={`w-full h-80 flex items-end relative text-black cursor-pointer overflow-hidden transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
          >
            <img
              src={item.imgUrl}
              alt={item.title}
              className="absolute top-0 w-full h-full object-cover"
            />
            <div
              className={`w-full h-full absolute top-0 ${hoverState[index] ? item.color.bg : ""} transition duration-500`}
            />
            <div className="m-6 z-0 relative">
              <div className={`text-xs mb-1 ${hoverState[index] ? item.color.text : "text-white"}`}>
                {hoverState[index] ? item.date : item.desc}
              </div>
              <div
                className={`text-2xl font-bold ${hoverState[index] ? item.color.title : "text-white"}`}
              >
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
