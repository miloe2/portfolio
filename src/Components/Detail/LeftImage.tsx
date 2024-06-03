import React from 'react';

interface LefttImageLeftProps {
    bgColor: string;
    txtColor :string;
    title : string;
    desc : string;
    source : string;
    items : string;
}
// bg-${bgColor} 
const LeftImage :React.FC<LefttImageLeftProps> = ({bgColor, txtColor, title, desc, source, items}) => {


    
    
    return (

        <div className={`w-full h-full flex relative justify-end items-center lg:flex-row flex-col-reverse mb-60 `}>

            <div className={`lg:w-1/2 w-full h-auto py-20 flex  mt-10
            justify-center items-${items} flex-col `} 
            style={{ backgroundColor: bgColor }}>

                <div className='w-3/4 h-72 max-[768px]:w-full'>

                {source.includes('mp4') ? (
                    <video autoPlay loop muted playsInline className='w-full h-full object-cover '>
                        <source src={source} type="video/mp4" />
                    </video>
                ) : (
                    <img src={source} alt="" className='w-full h-full object-cover object-left' />
                )}
                </div>

            </div>
            <div className={`lg:w-1/2 w-full h-full flex justify-center items-center flex-col`}>
                <div className='w-80  h-auto mx-auto'>
                    <div className={`text-4xl/12 font-bold whitespace-pre-line  py-2 `}  style={{ color: txtColor }}> {title} </div>
                    <div className='text-lg/8 whitespace-pre-line mt-5'> 
                        {desc}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LeftImage;