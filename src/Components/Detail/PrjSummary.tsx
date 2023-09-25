import React from 'react';
interface prjSummaryProps {
    title1 : string;
    desc1 : string;
    title2 : string;
    desc2 : string;
    desc3 : string;
    txtColor: string;
}
const PrjSummary :React.FC<prjSummaryProps>  = ({title1, desc1, title2, desc2, desc3, txtColor}) => {
    return (
        <div className='w-full h-auto flex justify-center   px-44  '>
            <div className='w-auto h-40  flex justify-center items-start max-[1023px]:w-full'>
                <div className={`text-4xl/12 font-bold whitespace-pre-line w-40  text-${txtColor}`}>{title1}</div>
                <div className=' text-sm/6 whitespace-pre-line  w-60'> {desc1}</div>
            </div>
            <div className='w-auto h-40  flex justify-center items-start  max-[1023px]:w-full'>
                <div className={`text-4xl/12 font-bold whitespace-pre-line w-48  text-${txtColor}`}>{title2}</div>
                <div className=' text-sm/6 whitespace-pre-line   w-60 '> {desc2}</div>
                <div className=' text-sm/6 whitespace-pre-line  w-64'> {desc3}</div>
            </div>
        </div>
    );
};

export default PrjSummary;