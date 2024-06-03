import React from 'react';

interface LeftImageProps {
    bgColor: string;
    txtColor :string;
    img1: string;
    img2: string;
    img3: string;
    title : string;
    desc : string;

  }
  

const Left3Image :React.FC<LeftImageProps> = ({ bgColor, txtColor, img1, img2, img3, title, desc }) => {
    return (
        <div className='lg:w-[1240px] w-full h-full mx-auto flex lg:flex-row flex-col-reverse  relative justify-center items-center mb-60 '>
            <div className={`lg:w-1/2 w-full ring-0 h-full  flex justify-center items-center flex-col`}
            style={{ backgroundColor : bgColor}}>
                <div className=' w-8/12 h-40  mb-10'>
                    <img src={img1} alt="" className='w-full h-full object-cover object-center'/>
                </div>
                <div className=' w-8/12 h-60  mb-10'>
                    <img src={img2} alt="" className='w-full h-full object-cover object-center'/>
                </div>
                <div className=' w-8/12 h-40'>
                    <img src={img3} alt="" className='w-full h-full object-cover object-center'/>
                </div>
            </div>
            <div className={`lg:w-1/2 w-full  lg:mt-0 mt-4 h-full  flex justify-center items-center flex-col`}>
                <div className='w-72 h-72'>
                    <div className={`text-4xl/12 font-bold whitespace-pre-line py-2 `} style={{ color: txtColor }}> {title} </div>
                    <div className='text-sm/6 whitespace-pre-line h-24 mt-5'> 
                        {desc}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Left3Image;

