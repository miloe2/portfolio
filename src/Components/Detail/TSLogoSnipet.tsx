import React from 'react';
import tslogo from '../../assets/Images/Typescript_logo_2020.svg'

const TSLogoSnipet = () => {
    return (
        <div className='w-full h-full flex itmes-center justify-center'>
            <div className='w-7/12 h-full flex flex-col justify-center  '>
                <div className='flex flex-row'>
                    <div className='w-20 border-4 rounded-full border-fuchsia-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-orange-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-yellow-400 mr-5'/>

                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-40 border-4 rounded-full border-blue-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-rose-600 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-orange-400 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-40 border-4 rounded-full border-zinc-50 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-green-600 mr-5'/>
                </div>
                
                <div className='w-48 h-auto mt-10'>
                    <img src={tslogo} alt="" />
                </div>
                <div className='flex flex-row mt-10'>
                    <div className='w-20 border-4 rounded-full border-rose-500 mr-5'/>
                    <div className='w-40 border-4 rounded-full border-green-200 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-20 border-4 rounded-full border-blue-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-blue-200 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-orange-400 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-20 border-4 rounded-full border-blue-700 mr-5'/>
                    <div className='w-40 border-4 rounded-full border-blue-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-cyan-400 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-20 border-4 rounded-full border-blue-500 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-rose-600 mr-5'/>
                    <div className='w-40 border-4 rounded-full border-orange-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-yellow-500 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-blue-500 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-20 border-4 rounded-full border-fuchsia-600 mr-5'/>
                    <div className='w-40 border-4 rounded-full border-yellow-500 mr-5'/>
                </div>
            
            </div>
            <div className='w-1/2 h-full  justify-center items-center flex'>
                <div className='bg-[#F6EF49] w-full h-1/3 p-10 justify-center flex flex-col'>
                <div className='text-4xl leading-12 font-bold whitespace-pre-line  text-[#134DB9] '> Typescript </div>
                    <div className='text-xs leading-6 whitespace-pre-line h-auto mt-5 text-[#101420]'> 
                    현업에 빠르게 적응하기 위하여
                    React.ts로 작업하였습니다.  
                    </div>
                </div>
            
            </div>

        </div>

    );
};

export default TSLogoSnipet;