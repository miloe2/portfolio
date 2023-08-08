import React, { useState } from 'react';
import carouselData from '../../assets/Data/CarouselData';  


const CarouselSlide = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onClickButton = () => {
    if (currentSlide === carouselData.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const NEXT_SLIDE: number = currentSlide === carouselData.length - 1 ? 0 : currentSlide + 1;
  const PREV_SLIDE: number = currentSlide === 0 ? carouselData.length - 1 : currentSlide - 1;

  return (
    <div>
      <button onClick={onClickButton} className='w-full'>
        {currentSlide}
        {carouselData.length}
      </button>
       <div className='bg-red-400 w-auto h-screen  flex justify-center items-center whitespace-nowrap  overflow-x-hidden'>

          <div className="bg-slate-500 w-8/12 h-3/4 rounded-3xl flex relative items-center flex-shrink-0 mx-10 ">
          <div className='bg-gradient-to-r from-white to-transparent w-1/3 h-full absolute left-0 rounded-l-3xl'/> 
          {PREV_SLIDE}
                  <div className=' absolute left-0  pl-10 tracking-tight'>
                      <div className='text-sm'> {carouselData[PREV_SLIDE].venue} </div>
                      <div className='text-sm'> {carouselData[PREV_SLIDE].id} </div>
                      <div className='text-4xl font-bold py-2 '> {carouselData[PREV_SLIDE].title} </div>
                      <div className='text-xs leading-6 whitespace-pre-line'> {carouselData[PREV_SLIDE].desc} </div>

                  </div>
                  <img src={carouselData[PREV_SLIDE].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
          </div>


          <div className="bg-slate-500 w-8/12 h-3/4 rounded-3xl flex relative items-center flex-shrink-0 mx-10 ">


          {/* <div className='bg-gradient-to-r from-white to-transparent w-1/3 h-full absolute left-0 rounded-l-3xl'/>  */}
          {currentSlide}
                  <div className=' absolute left-0  pl-10 tracking-tight'>
                      {/* <div className='text-sm'> {carouselData[currentSlide].venue} </div> */}
                      <div className='text-sm'> {carouselData[currentSlide].id} </div>
                      <div className='text-4xl font-bold py-2 '> {carouselData[currentSlide].title} </div>
                      <div className='text-xs leading-6 whitespace-pre-line'> {carouselData[0].desc} </div>

                  </div>
                  <img src={carouselData[currentSlide].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
          </div>

          {/* 넥스트 */}
          <div className="bg-slate-500 w-8/12 h-3/4 rounded-3xl flex relative items-center flex-shrink-0 mx-10 ">
          <div className='bg-gradient-to-r from-white to-transparent w-1/3 h-full absolute left-0 rounded-l-3xl'/> 
          {NEXT_SLIDE}
                  <div className=' absolute left-0  pl-10 tracking-tight'>
                      <div className='text-sm'> {carouselData[NEXT_SLIDE].venue} </div>
                      <div className='text-sm'> {carouselData[NEXT_SLIDE].id} </div>
                      <div className='text-4xl font-bold py-2 '> {carouselData[NEXT_SLIDE].title} </div>
                      <div className='text-xs leading-6 whitespace-pre-line'> {carouselData[NEXT_SLIDE].desc} </div>

                  </div>
                  <img src={carouselData[NEXT_SLIDE].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
          </div>



      </div>
    </div>

   
  );
}

export default CarouselSlide;

        // // <div className='text-xl font-bold py-8  text-white pl-48 '> 프로젝트 </div>
        // <div className='flex-col flex bg-red-500'>

        // <div className='w-3/4 h-3/4 flex relative ml-20 bg-slate-800 rounded-3xl'>
        //     {/* <div className='bg-gradient-to-t to-black from-transparent w-screen h-12 absolute top-0 '/> */}
        //         <div className=' w-3/12 h-3/5 items-center flex justify-center '>
        //             <div className='w-full h-3/5 flex justify-center flex-col text-white bg-blue-500'>
        //                 <div className='text-sm'> {carouselData[0].venue} </div>
        //                 <div className='text-5xl font-bold py-4'> {carouselData[0].title} </div>
        //                 <div className='text-xs leading-6 whitespace-pre-line'> {carouselData[0].desc} </div>
        //             </div>
        //         </div>
        //         <div className='bg-red-400 w-9/12 h-full'>
        //             <img src={carouselData[0].imgUrl} alt="" className='object-cover w-full h-full'/>

        //         </div>
        //     {/* <div className='bg-gradient-to-t from-black to-transparent w-screen h-12 absolute bottom-0 '/> */}
        // </div>
        // </div>
// 한국에서 만든 백업
        // <div className='bg-red-400 w-auto h-screen  flex justify-center items-center whitespace-nowrap  overflow-x-auto'>
        // <div className="bg-slate-500 w-8/12 h-3/4 rounded-3xl flex relative items-center flex-shrink-0 ">
        // <div className='bg-gradient-to-r from-white to-transparent w-1/3 h-full absolute left-0 rounded-l-3xl'/> 
        //         <div className=' absolute left-0  pl-10 tracking-tight'>
        //             <div className='text-sm'> {carouselData[0].venue} </div>
        //             <div className='text-4xl font-bold py-2 '> {carouselData[0].title} </div>
        //             <div className='text-xs leading-6 whitespace-pre-line'> {carouselData[0].desc} </div>

        //         </div>
        //          <img src={carouselData[0].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
        // </div>
        // <div className="bg-slate-500 w-8/12 h-3/4 rounded-3xl flex relative items-center flex-shrink-0 ">
        // <div className='bg-gradient-to-r from-white to-transparent w-1/3 h-full absolute left-0 rounded-l-3xl'/> 
        //         <div className=' absolute left-0  pl-10 tracking-tight'>
        //             <div className='text-sm'> {carouselData[0].venue} </div>
        //             <div className='text-4xl font-bold py-2 '> {carouselData[0].title} </div>
        //             <div className='text-xs leading-6 whitespace-pre-line'> {carouselData[0].desc} </div>

        //         </div>
        //          <img src={carouselData[0].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
        // </div>
        // <div className="bg-slate-500 w-8/12 h-3/4 rounded-3xl flex relative items-center flex-shrink-0 ">
        // <div className='bg-gradient-to-r from-white to-transparent w-1/3 h-full absolute left-0 rounded-l-3xl'/> 
        //         <div className=' absolute left-0  pl-10 tracking-tight'>
        //             <div className='text-sm'> {carouselData[0].venue} </div>
        //             <div className='text-4xl font-bold py-2 '> {carouselData[0].title} </div>
        //             <div className='text-xs leading-6 whitespace-pre-line'> {carouselData[0].desc} </div>

        //         </div>
        //          <img src={carouselData[0].imgUrl} alt="" className='object-cover w-full h-full rounded-3xl'/>
        // </div>


    // </div>
    // // <div className='bg-black w-screen h-screen  flex justify-center items-center'>
    // //     <div className="bg-slate-500 w-3/4 h-3/4 rounded-3xl flex">
    // //         <div className=' w-1/4 h-full  rounded-l-3xl items-center flex'>
    // //             <div className=' ml-4'>
    // //                 <div className='text-sm'> {carouselData[0].venue} </div>
    // //                 <div className='text-5xl font-bold py-4'> {carouselData[0].title} </div>
    // //                 <div className='text-xs leading-6 whitespace-pre-line'> {carouselData[0].desc} </div>
    // //             </div>
    // //         </div>
    // //         <div className='w-9/12 h-full '>
    // //              <img src={carouselData[0].imgUrl} alt="" className='object-cover w-full h-full rounded-r-3xl'/>
    // //          </div>
    // //     </div>
    // // </div>