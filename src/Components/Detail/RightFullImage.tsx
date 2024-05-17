import React from 'react';

interface RightFullImageProps {
    bgColor: string;
    title : string;
    desc : string;
    img : string;
    txtColor :string,
    descColor : string,
}
const RightFullImage :React.FC<RightFullImageProps> = ({bgColor, txtColor, descColor, title, desc, img}) => {
    return (
        <div className={` w-full h-screen flex flex-col lg:flex-row relative justify-end items-center mt-40 `}>
            
            <div className={`lg:w-1/2 w-full h-full  flex justify-center items-center flex-col  `}>
                <div className={`w-full lg:h-7/12 h-full  bg-${bgColor} flex justify-center  flex-col lg:pl-24 pl-10`}>
                    <div className={`lg:text-5xl/12 text-4xl/10 font-bold whitespace-pre-line text-${txtColor}`}> {title} </div>
                    <div className={`sm:text-lg/8 text-sm/6 whitespace-pre-line mt-5 text-${descColor}`}> 
                        {desc}
                    </div>
                </div>
            </div>
            <div className={`lg:w-1/2 w-full h-3/4 flex justify-start items-start  `}>
                <div className='w-full h-full'>
                    <img src={img} alt="" className='w-full h-full object-left-top object-cover shadow-md'/>
                </div>
            </div>
            
        </div>
    );
};

export default RightFullImage;