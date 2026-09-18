import { useMemo, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { career } from "../../assets/data/careerData";

const Career = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleVisibilityChange = (_target: Element, isIntersecting: boolean) => {
    setIsVisible(isIntersecting);
  };

  const divRef = useRef<HTMLDivElement>(null);
  const refs = useMemo(() => [divRef], []);
  useIntersectionObserver(refs, handleVisibilityChange);

  return (
    <div ref={divRef} className="max-w-7xl w-full mx-auto mt-64 px-4 lg:px-0">
      <p
        className={`text-xs tracking-[0.3em] uppercase text-zinc-400 font-semibold mb-10 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        {career.title}
      </p>
      <div className="flex flex-col divide-y divide-zinc-200">
        {career.desc.map((item, index) => (
          <div
            key={index}
            className={`flex items-baseline gap-4 sm:gap-8 py-6 first:pt-0 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
          >
            <span className="text-xs text-zinc-300 font-semibold min-w-[24px]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex-1">
              <p className="text-2xl sm:text-3xl font-bold leading-tight">{item.content}</p>
              <p className="text-sm text-zinc-500 mt-1">{item.subText}</p>
            </div>

            <p className="whitespace-pre-line text-right text-xs text-zinc-400 shrink-0">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
