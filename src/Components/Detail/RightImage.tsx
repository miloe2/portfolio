import React from 'react';

interface RightImageLeftProps {
    bgColor: string;
    title : string;
    desc : string;
    img : string;
    items : string;
    txtColor :string;
}


const RightImage :React.FC<RightImageLeftProps> = ({bgColor, txtColor, title, desc, img, items}) => {
    return (
        <div className=' lg:w-[1240px]  w-full mx-auto h-full flex lg:flex-row flex-col relative justify-end items-center mb-60'>
            <div className={`lg:w-1/2 w-full h-full flex justify-center items-center flex-col mx-auto`}>
                <div className='w-80 h-auto lg:mb-0 mb-10 '>
                    <div className='text-4xl/12 font-bold whitespace-pre-line  py-2 ' style={{ color: txtColor }}> {title} </div>
                    <div className='text-sm/6 whitespace-pre-line mt-5'> 
                        {desc}
                    </div>
                </div>
            </div>
            <div className={`lg:w-1/2 w-full h-auto lg:py-40 py-20 flex justify-center items-${items} flex-col`}
              style={{ backgroundColor : bgColor}}>
                <div className='lg:w-3/4 w-full h-auto'>
                    <img src={img} alt="" className='w-full h-full object-cover'/>
                </div>

            </div>
            
        </div>
    );
};

export default RightImage;