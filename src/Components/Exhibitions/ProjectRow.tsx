import React, { useEffect, useRef, useState } from 'react';
import { ImageUrl3 } from './ImgUrl';


const ProjectRow = () => {

    // 가로 스크롤 적용
    function scrollHorizontally(e:WheelEvent) {
        e.preventDefault();
        (e.currentTarget as HTMLElement).scrollLeft += (e.deltaY + e.deltaX) * 1.4;
      }
      const diaryImageRef = useRef<HTMLDivElement | null>(null);
      useEffect(() => {
        const scrollElement = diaryImageRef.current;
        if (scrollElement) {
          scrollElement.addEventListener('wheel', scrollHorizontally);
        }
        return () => {
          if (scrollElement) {
            scrollElement.removeEventListener('wheel', scrollHorizontally);
          }
        };
      }, []);

      const [scrollX, setScrollX] = useState(0);
    
      // 스크롤 이벤트 핸들러
      const handleScroll = () => {
        setScrollX(window.scrollX);
      };
      
      // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  
      useEffect(() => {
          console.log(scrollX);
      }, [scrollX]);
        

    return (
        <>
        
        <div className='w-screen h-screen bg-blue-500 flex justify-center pl-48 flex-col  '>
            <div ref={diaryImageRef} className='bg-red-500 w-screen h-2/3 items-center whitespace-nowrap flex  overflow-x-auto  scrollbar-hide'>
                {ImageUrl3.map((item, index) => (
                    <div className='bg-yellow-300 w-80 h-full border-4 box-border flex-shrink-0 overflow-hidden' key={index}>
                    <img src={item} alt="" className='w-full h-full object-cover'/>
                    </div>
                ))}
            </div>
            <div className='bg-green-300 w-full h-16'>
                스크롤바
            </div>
            
        </div>
        </>
    );
};

export default ProjectRow;