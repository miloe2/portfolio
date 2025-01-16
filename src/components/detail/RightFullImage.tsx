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
    <div className={`lg:w-[1240px] w-full mx-auto flex flex-col lg:flex-row relative justify-end items-center mb-60 `}>
            
      <div className={`lg:w-1/2 w-full h-full  flex justify-center items-center flex-col  `}>
        <div
          className={`w-full py-32 flex justify-center items-center lg:items-start flex-col  p-16`}
          style={{ backgroundColor : bgColor}}>
          <div
            className={`lg:text-4xl/12 text-3xl/10 font-bold whitespace-pre-line `}
            style={{ color: txtColor }}> 
            {' '}
            {title}
            {' '}
          </div>
          <div
            className={`lg:text-base/8 text-sm/6 whitespace-pre-line mt-5 `}
            style={{ color: descColor }}> 
            {desc}
          </div>
        </div>
      </div>
      <div className={`lg:w-1/2 w-full h-3/4 flex justify-start items-start  `}>
        <div className='w-full h-full'>
          <img
            src={img}
            alt=""
            className='w-full h-full object-left-top object-cover shadow-md'/>
        </div>
      </div>
            
    </div>
  );
};

export default RightFullImage;