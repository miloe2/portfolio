import { useMemo, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const stats = [
  { value: "4", suffix: "+", label: "Years" },
  { value: "4", suffix: "", label: "Projects" },
  { value: "2", suffix: "", label: "Companies" },
  { value: "10", suffix: "+", label: "Stacks" },
];

const ImpactStats = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const refs = useMemo(() => [divRef], []);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (_target: Element, isIntersecting: boolean) => {
    setIsVisible(isIntersecting);
  };

  useIntersectionObserver(refs, handleVisibilityChange);

  return (
    <div
      ref={divRef}
      className="max-w-7xl w-full mx-auto mt-40 grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-4 px-4 lg:px-0"
    >
      {stats.map((item, index) => (
        <div
          key={item.label}
          className={`
            flex flex-col items-center transition-all duration-1000 transform
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
          style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
        >
          <div className="roboto-font font-black text-6xl lg:text-8xl leading-none bg-gradient-to-b from-[#FF5851] to-[#242424] bg-clip-text text-transparent">
            {item.value}
            <span className="text-3xl lg:text-5xl align-top">{item.suffix}</span>
          </div>
          <div className="mt-4 text-sm lg:text-base tracking-[0.3em] uppercase text-zinc-400 font-semibold">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactStats;
