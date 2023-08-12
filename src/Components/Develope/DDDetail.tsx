import { useRef, useState } from "react";
import useStore from "../../store";

const DDDetail = () => {
    const { devPrj, setDevPrj } = useStore();

    const componentRef = useRef<HTMLDivElement>(null);
  
    const handleButtonClick = () => {
        setDevPrj(true);
  
      // 스크롤
      if (componentRef.current) {
        window.scrollTo({
          top: componentRef.current.offsetTop,
          behavior: 'smooth',
        });
      }
    };
    return (
        <div className='w-screen h-screen bg-blue-500 px-44'>
            <div>
                <button onClick={handleButtonClick}>컴퍼넌트 열기</button>
                {devPrj && (
                    <div ref={componentRef}>
                    {/* 이 부분에 컴퍼넌트 내용을 넣으세요 */}
                    컴퍼넌트 내용이 여기에 들어갑니다.
                    </div>
                )}
            </div>
        </div>
    );
};

export default DDDetail;