import React from 'react';
interface Text2PargProps {
    title : string;
    desc : string;
    txtColor: string;
}

const Text2Parg :React.FC<Text2PargProps>  = ({title, desc, txtColor}) => {
    return (
        <div className='lg:w-[1024px] w-full h-40 grid lg:grid-cols-3 grid-cols-1  mx-auto mt-40'>
                <div className={`lg:text-5xl/12 text-4xl/12  col-span-2  justify-center font-bold 
                whitespace-pre-line mx-12 flex items-center `} style={{ color: txtColor }}>
                    {title}
                    </div>
                <div className=' text-lg/8  col-span-1 lg:whitespace-pre-line whitespace-normal 
                flex items-center mx-12 justify-center'> {desc}</div>
            {/* <div className='w-3/4 h-40  flex justify-center items-center  max-[1023px]:w-full'>
                <div className={`text-4xl/12 font-bold whitespace-pre-line mx-12 text-${txtColor}`}>{title}</div>
                <div className=' text-sm/6 whitespace-pre-line  mx-12'> {desc}</div>
            </div> */}
        </div>
    );
};

export default Text2Parg;