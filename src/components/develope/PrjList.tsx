import React, { useState, useRef } from "react";
import DevPrjData from "../../assets/data/DevPrjData";
import useStore from "../../store";

const PrjList = () => {
  const { setDevOpen, setDevPage } = useStore();
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1); // opacity 상태 추가
  const circleRef = useRef<HTMLDivElement>(null);

  const latestArray = [...DevPrjData].reverse().map((item) => item);
  const [hoverState, setHoverState] = useState(new Array(latestArray.length).fill(false));

  const CircleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const circle = circleRef.current; // 타입 단언
    if (!circle) return;

    // 상위 div 요소의 좌표를 가져옴
    const rect = e.currentTarget.getBoundingClientRect();

    // 상위 div와 마우스 좌표간의 상대적인 위치를 계산
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setOffsetX(x - circle.offsetWidth / 2);
    setOffsetY(y - circle.offsetHeight / 2);
    setOpacity(1);
  };

  const CircleMouseLeave = () => {
    setOpacity(0); // 마우스가 div 밖으로 나갈 때 opacity를 0으로 설정
  };

  // onMouseDown 이벤트 핸들러
  const handleMouseOver = (index: number) => {
    const updatedHoverState = hoverState.map((_, idx) => (idx === index ? true : false));
    setHoverState(updatedHoverState);
  };

  // onMouseLeave 이벤트 핸들러
  const handleMouseLeave = () => {
    // 모든 컴포넌트의 hover 상태를 초기화하려면
    const updatedHoverState = hoverState.map(() => false);
    setHoverState(updatedHoverState);
  };

  return (
    <React.Fragment>
      <div className=" w-full h-10 px-10 text-right text-sm">
        클릭 하시면 자세히 보실수 있습니다.{" "}
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-screen h-auto px-10 relative"
        onMouseMove={CircleMouseMove}
        onMouseLeave={CircleMouseLeave}
      >
        <div
          ref={circleRef}
          className="z-50 absolute w-28 h-28 bg-white opacity-0 rounded-full text-xs
                transition-all ease-linear duration-100 pointer-events-none text-center flex flex-col justify-center items-center"
          style={{ left: `${offsetX}px`, top: `${offsetY}px`, opacity: opacity }}
        >
          {" "}
          VIEW <br />
          PROJECT <br />↓
        </div>

        {latestArray.map((item, index) => (
          <div
            key={index}
            className={`w-full h-96 flex items-end relative text-black cursor-pointer`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setDevOpen(true);
              setDevPage(item.title);
            }}
          >
            <img
              src={item.imgUrl}
              alt={item.imgUrl}
              className="absolute top-0 w-full h-full object-cover "
            />
            <div
              className={`w-full h-full absolute top-0 ${hoverState[index] ? item.color.bg : ""} transition duration-500`}
            />
            <div className="m-10 z-0 text-black absolute bottom-0">
              <div className={`text-xs h-6 ${hoverState[index] ? item.color.text : ""}`}>
                {item.date}
              </div>
              <div className={`text-4xl font-bold ${hoverState[index] ? item.color.title : ""}`}>
                {item.title}
              </div>
              {hoverState[index] && (
                <div className={`text-lg/10 font-bold ${item.color.text} transition duration-500`}>
                  {item.desc}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* <div
            className={`w-full h-96 flex items-end relative bg-zinc-100 text-white`}
            >
          <div className={`w-full h-full absolute top-0 transition duration-500`}/>
              <div className='m-10 z-0 text-white absolute bottom-0'>
                  <div className={`text-xs h-2 w-10 bg-zinc-300 rounded-full ml-1`}>  </div>
                  <div className={`text-4xl font-bold h-4 w-20 bg-zinc-300 rounded-full mt-4`}>  </div>
              </div>  
          </div> */}
      </div>
    </React.Fragment>
  );
};

export default PrjList;
