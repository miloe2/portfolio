import React from 'react';

interface LeftImageProps {
    bgColor: string;
    img1: string;
    img2: string;
    img3: string;

  }
  

const Left3Image :React.FC<LeftImageProps> = ({ bgColor, img1, img2, img3 }) => {
    return (
        <div className=' w-full h-full flex relative justify-center items-center'>
            <div className={`w-1/2 h-full bg-${bgColor} flex justify-center items-center flex-col`}>
                <div className=' w-3/4 h-40  mb-10'>
                    <img src={img1} alt="" className='w-full h-full'/>
                </div>
                <div className=' w-3/4 h-60  mb-10'>
                    <img src={img2} alt="" className='w-full h-full '/>
                </div>
                <div className=' w-3/4 h-40'>
                    <img src={img3} alt="" className='w-full h-full '/>
                </div>
            </div>
            <div className={`w-1/2 h-full  flex justify-center items-center flex-col`}>
                <div className='w-72 h-72'>
                    <div className='text-4xl font-bold py-2 '> Diverse <br/> Different <br/> Display </div>
                    <div className='text-xs leading-6 whitespace-pre-line h-24 mt-5'> 
                    전시 예매 및 정보 공유 커뮤니티입니다. <br/>
                    전시 예매, 전시 평가하기(다이어리), 동행찾기 등<br/>
                    세 가지 부분을 중점으로 설계되었습니다. 
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Left3Image;

{/* <div className={`w-1/2 h-full bg-${bgColor} flex justify-center items-center flex-col`}>
<div className=' w-3/4 h-40  mb-10'>
    <img src={img1} alt="" className='w-full h-full'/>
</div>
<div className=' w-3/4 h-60  mb-10'>
    <img src={img2} alt="" className='w-full h-full '/>
</div>
<div className=' w-3/4 h-40'>
    <img src={img3} alt="" className='w-full h-full '/>
</div>
</div> */}