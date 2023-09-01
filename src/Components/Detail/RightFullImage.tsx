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
        <div className={` w-full h-screen flex relative justify-end items-center `}>
            
            <div className={`w-1/2 h-full  flex justify-center items-center flex-col  `}>
                <div className={`w-full h-7/12  bg-${bgColor} flex justify-center  flex-col pl-24`}>
                    <div className={`text-4xl/12 font-bold whitespace-pre-line text-${txtColor}`}> {title} </div>
                    <div className={`text-xs/6 whitespace-pre-line mt-5 text-${descColor}`}> 
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