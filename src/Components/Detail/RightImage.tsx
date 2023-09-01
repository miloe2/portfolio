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
        <div className=' w-full h-full flex relative justify-end items-center'>
            <div className={`w-1/2 h-full flex justify-center items-center flex-col`}>
                <div className='w-72 h-auto '>
                    <div className='text-4xl/12 font-bold whitespace-pre-line  py-2 ' style={{ color: txtColor }}> {title} </div>
                    <div className='text-sm/6 whitespace-pre-line mt-5'> 
                        {desc}
                    </div>
                </div>
            </div>
            <div className={`w-1/2 h-auto py-40 bg-${bgColor} flex justify-center items-${items} flex-col`}>
                <div className='w-3/4 h-72'>
                    <img src={img} alt="" className='w-full h-full object-cover'/>
                </div>

            </div>
            
        </div>
    );
};

export default RightImage;