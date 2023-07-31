import React, { useEffect, useRef, useState  } from 'react';
import { ImageUrl3 } from './ImgUrl';


const ProjectRow = () => {
    const diaryImageRef = useRef<HTMLDivElement | null>(null);
    const [scrollX, setScrollX] = useState(0);
    const [totalWidth, setTotalWidth] = useState(0);

    // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
    const scrollElement = diaryImageRef.current;
    useEffect(() => {
    setTotalWidth(scrollElement?.scrollWidth || 0);
    if (scrollElement) {
        scrollElement.addEventListener('wheel', scrollHorizontally);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
        if (scrollElement) {
        scrollElement.removeEventListener('wheel', scrollHorizontally);
        }
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    
    // 가로 스크롤 적용
    function scrollHorizontally(e: WheelEvent) {
        // console.log('움직입니다.');
        // console.log(scrollX)

        e.preventDefault();
        (e.currentTarget as HTMLElement).scrollLeft += (e.deltaY + e.deltaX) * 1.4;
            if (diaryImageRef.current) {
        const scrollX = diaryImageRef.current.scrollLeft;
        setScrollX(scrollX);

    }
      }
    
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
    if (diaryImageRef.current) {
        const scrollX = diaryImageRef.current.scrollLeft;
        setScrollX(scrollX);

    }
    };


    useEffect(() => {
        console.log(scrollX);
      }, [scrollHorizontally]);





    return (
        <>
        
        <div className='w-screen h-screen bg-blue-500 flex justify-center pl-48 flex-col  '>
            <div ref={diaryImageRef} 
                className='bg-red-500 w-screen h-2/3 items-center whitespace-nowrap flex  overflow-x-auto  scrollbar-hide'>
                {ImageUrl3.map((item, index) => (
                    <div className='bg-yellow-300 w-80 h-full border-4 box-border flex-shrink-0 overflow-hidden' key={index}>
                    <img src={item} alt="" className='w-full h-full object-cover'/>
                    </div>
                ))}
            </div>
            <div className=' w-full h-16 pr-48 justify-center items-center flex'>


                <div className='w-full h-6 bg-red-200' >
                    <div className=' h-full bg-black' 
                    style={{ width:  `${(scrollX / totalWidth) * 200}%`  }}
                    >
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProjectRow;


    
//   // 스크롤 이벤트 핸들러
//     const handleScroll = () => {
//         if (diaryImageRef.current) { // diaryImageRef.current가 null이 아닐 때만 처리
//             const test = diaryImageRef.current.scrollLeft;
//             console.log(test);
      
//             // 스크롤 위치를 상태로 업데이트
//             setScrollX(test);

//         }
//     };