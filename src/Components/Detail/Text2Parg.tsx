import React from 'react';
interface Text2PargProps {
    title : string;
    desc : string;
    txtColor: string;
}

const Text2Parg :React.FC<Text2PargProps>  = ({title, desc, txtColor}) => {
    return (
        <div className='lg:w-[600px] w-full h-auto py-5 grid lg:grid-cols-2 grid-cols-1  mx-auto mb-0'>
                <div className={`lg:text-4xl/12 text-3xl/10   justify-center font-bold 
                whitespace-pre-line mx-12 flex items-center `} style={{ color: txtColor }}>
                    {title}
                    </div>
                <div className=' lg:text-base/8 text-sm/6 lg:whitespace-pre-line whitespace-normal 
                flex items-center justify-center'> {desc}</div>
            {/* <div className='w-3/4 h-40  flex justify-center items-center  max-[1023px]:w-full'>
                <div className={`text-4xl/12 font-bold whitespace-pre-line mx-12 text-${txtColor}`}>{title}</div>
                <div className=' text-sm/6 whitespace-pre-line  mx-12'> {desc}</div>
            </div> */}
        </div>
    );
};

export default Text2Parg;