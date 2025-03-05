import { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

const Hello = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full h-auto relative bg-white">
        <div className="sticky top-0 h-full w-full overflow-hidden">
          <div className=" w-full h-screen justify-start items-center flex sm:pl-10 pl-0">
            <div
              className="box-border min-w-1/2 h-11/12 relative bg-[#FF5851] transition-width duration-700 ease-in-out"
              style={scrollY < 50 ? { width: "50%" } : { width: "95%" }}
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 leading-tight right-0 translate-x-1/2 font-black text-[#242424] transition-opacity duration-1000 text-hello-heading ${scrollY > 50 ? "opacity-0" : "opacity-100"}`}
              >
                안녕
                <br />
                하세요<span className="text-[#FF5851]">.</span>
              </div>
              <div
                className={`absolute left-1/12 sm:left-3/12 top-1/2 text-white transition-all duration-700
                ${scrollY > 0 && scrollY < 1000 ? "-translate-y-1/2 opacity-100" : "opacity-0"}`}
              >
                <p className="text-4xl leading-normal whitespace-nowrap font-bold text-hello-title">
                  내안에 빛이 있으면 <br />
                  스스로 빛나는 법이다.
                </p>
              </div>
            </div>
          </div>

          <div
            className="animate-bounce left-1/3 flex  items-center w-2/12 h-auto justify-end transition-all duration-700   text-white absolute bottom-20"
            style={scrollY < 1000 ? { opacity: "100" } : { opacity: "0" }}
          >
            <div className="-rotate-90">
              <div className=" text-lg flex">
                <BsArrowLeft />
                <span className="text-xs ml-2">Scroll</span>
              </div>
            </div>
          </div>
        </div>
        {/* sticky 속성을 위한 height 추가 */}
        <div className="h-[50vh]"></div>
      </div>
    </>
  );
};

export default Hello;
