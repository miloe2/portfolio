import React from 'react';

interface Left1ImageProps {
    bgColor: string;
    img1: string;
    title : string;
    desc : string;
    txtColor :string;

}

const Left1Image :React.FC<Left1ImageProps> = ({ bgColor, txtColor, img1, title, desc }) => {
  return (
    <div className='lg:w-[1240px] w-full h-full flex lg:flex-row flex-col-reverse relative justify-center items-center mx-auto mb-60'>
      <div
        className={`lg:w-2/3 w-full h-auto   flex justify-center items-start flex-col lg:p-0 p-6`}
        style={{ backgroundColor : bgColor}}>
        <img
          src={img1}
          alt=""
          className='w-full h-full '/>
      </div>
      <div className={`w-1/2 h-full  flex justify-center items-center flex-col`}>
        <div className='w-72 h-auto '>
          <div
            className='lg:text-4xl/12 text-3xl/10  font-bold whitespace-pre-line  py-2 '
            style={{ color: txtColor }}> 
            {' '}
            {title}
            {' '}
          </div>
          <div className='lg:text-base/8 text-sm/6 whitespace-pre-line mb-10 lg:mb-0 '> 
            {desc}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Left1Image;