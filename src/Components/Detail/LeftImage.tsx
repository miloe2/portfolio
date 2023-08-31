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

        <div className={`w-full h-full flex relative justify-end items-center `}>

            <div className={`w-1/2 h-auto py-20  flex justify-center items-${items} flex-col `} 
            style={{ backgroundColor: bgColor }}>

                <div className='w-3/4 h-72'>

                {source.includes('mp4') ? (
                    <video autoPlay loop muted className='w-full h-full object-cover'>
                        <source src={source} type="video/mp4" />
                    </video>
                ) : (
                    <img src={source} alt="" className='w-full h-full object-cover' />
                )}
                </div>

            </div>
            <div className={`w-1/2 h-full flex justify-center items-center flex-col`}>
                <div className='w-72 h-auto '>
                    <div className={`text-4xl leading-12 font-bold whitespace-pre-line  py-2 text-${txtColor} `}> {title} </div>
                    <div className='text-xs leading-6 whitespace-pre-line mt-5'> 
                        {desc}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LeftImage;