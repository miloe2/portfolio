import React from 'react';
interface FullImageProps {  
    img :string;
    title: string;
    desc: string;
}


const FullImage: React.FC<FullImageProps> = ({img, title, desc }) => {
    return (
      <div className={`w-full h-screen flex  relative`}>
            <div className='w-72 h-72 bg-red absolute top-0'>
                <div className='text-4xl leading-12 font-bold whitespace-pre-line  py-2 '> {title} </div>
                <div className='text-xs leading-6 whitespace-pre-line '> 
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