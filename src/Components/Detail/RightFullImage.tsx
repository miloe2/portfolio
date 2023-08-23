import React from 'react';

interface RightFullImageProps {
    bgColor: string;
    txtColor: string;
    title : string;
    desc : string;
    img : string;
}
// bg-${bgColor}
const RightFullImage :React.FC<RightFullImageProps> = ({bgColor, txtColor, title, desc, img}) => {
    return (
        <div className={` w-full h-screen flex relative justify-end items-center `}>
            
            <div className={`w-1/2 h-full  flex justify-center items-center flex-col  `}>
                <div className={`w-full h-7/12  bg-${bgColor} flex justify-center items-center flex-col`}>
                    <div className={`text-4xl leading-12 font-bold whitespace-pre-line text-${txtColor} `}> {title} </div>
                    <div className='text-xs leading-6 whitespace-pre-line mt-5 '> 
                        {desc}
                    </div>
                </div>
            </div>
            <div className={`w-1/2 h-3/4 flex justify-start items-start  `}>
                <div className='w-full h-full'>
                    <img src={img} alt="" className='w-full h-full object-left-top object-cover'/>
                </div>
            </div>
            
        </div>
    );
};

export default RightFullImage;