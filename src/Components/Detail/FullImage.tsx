import React from 'react';
interface FullImageProps {  
    img :string;
    title: string;
    desc: string;
    txtColor :string;
}


const FullImage: React.FC<FullImageProps> = ({img, txtColor, title, desc }) => {
    return (
      <div className={`w-full h-screen flex relative items-center`}>
            <div className='absolute left-40 '>
                <div className='text-4xl/12 font-bold whitespace-pre-line  py-2 ' style={{ color: txtColor }}> {title} </div>
                <div className='text-sm/6 whitespace-pre-line '> 
                    {desc}
                </div>
            </div>
            <div className='w-full h-full'>
                <img src={img} alt="" className='w-full h-full object-cover'/>
            </div>
      </div>
    );
  };

export default FullImage;