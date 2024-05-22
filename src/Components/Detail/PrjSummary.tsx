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
        <div className='lg:max-w-5xl w-full grid grid-cols-1 md:grid-cols-3  mx-auto mb-40 ring-4'>
            <div className='flex   col-span-1 '>
                <div className={`text-4xl/12 font-bold whitespace-pre-line  w-40 mx-4 `}  style={{ color: txtColor }}>{title1}</div>
                <div className='text-sm/6 whitespace-pre-line '>{desc1}</div>
            </div>
            <div className='flex  col-span-2 mt-4 md:mt-0'>
                <div className={`text-4xl/12 font-bold whitespace-pre-line mx-4 w-40`}  style={{ color: txtColor }}>{title2}</div>
                <div className='flex md:space-x-4 md:flex-row flex-col'>
                    <div className='text-sm/6 whitespace-pre-line '>{desc2}</div>
                    <div className='text-sm/6 whitespace-pre-line '>{desc3}</div>
                </div>
            </div>

        </div>
    );
};

export default PrjSummary;