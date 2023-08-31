import { useEffect, useState } from 'react';
import carouselData from '../../assets/Data/CarouselData';  
import {BsFillPauseFill, BsPlayFill} from 'react-icons/bs';
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';


const CarouselSlide = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false); // 일시정지 여부 상태


    const onClickNextButton = () => {
        if (currentSlide === carouselData.length - 1) {
        setCurrentSlide(0);
        } else {
        setCurrentSlide(currentSlide + 1);
        }
    };

    const onClickDot = (index :number) => {
        setCurrentSlide(index);
    }
    const togglePause = () => {
      setIsPaused((prevState) => !prevState); // 일시정지 상태 토글
    };
  
    useEffect(() => {
      let intervalId: NodeJS.Timeout | null = null;
  
      if (!isPaused) {
        intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) =>
            prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
          );
        }, 2000);
      }
  
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [isPaused]);

  const NEXT_SLIDE: number = currentSlide === carouselData.length - 1 ? 0 : currentSlide + 1;
  const PREV_SLIDE: number = currentSlide === 0 ? carouselData.length - 1 : currentSlide - 1;

  return (
       <div className='bg-black w-auto h-screen  flex justify-center items-center whitespace-nowrap relative overflow-x-hidden '>
            <div className='w-full h-16 flex  items-end absolute top-0 pl-48'>
                <div className='text-white relative top-10 text-lg font-bold'>주요프로젝트</div>
            </div>


            {/*  PREV */}
            
            <div className=" w-7/12 h-3/6 rounded-3xl flex relative items-center flex-shrink-0 mx-10 ">
                <div className='bg-gradient-to-l from-neutral-700 to-transparent w-1/3 h-full absolute right-0 rounded-r-3xl'/> 
                <img src={carouselData[PREV_SLIDE].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
            </div>
            {/*  현재 */}
            <div className="w-7/12 h-3/5 rounded-3xl flex relative items-center flex-shrink-0 mx-10 ">
                <div className='bg-gradient-to-r from-white to-transparent w-4/5 h-full absolute left-0 rounded-l-3xl '/> 
                <div className=' absolute left-0  pl-10 tracking-tight'>
                    <div className='text-xs text-zinc-600'> {carouselData[currentSlide].location} </div>
                    {/* <div className='text-sm'> {carouselData[currentSlide].venue} </div> */}
                    <div className='text-4xl font-bold py-2 '> {carouselData[currentSlide].title} </div>
                    <div className='text-xs leading-6 whitespace-pre-line h-24'> {carouselData[currentSlide].desc} </div>
                </div>
                <img src={carouselData[currentSlide].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
            </div>

            {/* NEXT */}
            <div className=" w-7/12 h-3/6  rounded-3xl flex relative items-center flex-shrink-0 mx-10 ">
            <div className='bg-gradient-to-l from-transparent to-neutral-700 w-1/3 h-full absolute left-0 rounded-l-3xl'/> 
                    <img src={carouselData[NEXT_SLIDE].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
            </div>

            {/* 버튼 */}
            <div className='  w-full h-16 flex justify-center items-center absolute bottom-10'>
            <button className='w-4 h-4 bg-gray-100 mr-3 rounded-full flex justify-center items-center' onClick={onClickNextButton}><MdKeyboardArrowLeft/> </button>

                {    carouselData.map((item) => (                    
                    <div key={item.id} className=' mx-1  cursor-pointer '  onClick={() => onClickDot(item.id)}>
                        
                        {currentSlide === item.id ? <div className=' w-5 h-2 bg-[#616060] rounded-full'/> :<div className=' w-2 h-2 bg-white rounded-full'/>}
                    </div>
                ))}

                {/* 일시정지 / 재생 버튼 */}

                <button
                className="w-5 h-5  rounded-full flex justify-center items-center ml-3 text-4xl text-white"
                onClick={togglePause}
              >
                {isPaused ? <BsPlayFill/> : <BsFillPauseFill />}
              </button>

              <button className='w-4 h-4 bg-gray-100 ml-3 rounded-full flex justify-center items-center' onClick={onClickNextButton}><MdKeyboardArrowRight/> </button>


            </div>
      </div>

   
  );
}

export default CarouselSlide;