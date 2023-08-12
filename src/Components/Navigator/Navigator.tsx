import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigator = () => {
    const navigator = useNavigate();
    return (

        <div className='w-full h-20  fixed top-0 z-0 overflow-x-hidden box-border flex justify-between overflow-hidden'>
            <div className="w-24 ">icon</div>
            <div className='relative  w-1/3 flex text-xs text-center items-center font-bold text-white cursor-pointer'>
                <div className='w-20 py-4 mx-2 ' onClick={()=>(navigator('/'))}>Home</div>
                <div className='w-20 py-4 mx-2 ' onClick={()=>(navigator('/exhibitions'))} >Exhibitions</div>
                <div className='w-20 py-4 mx-2 ' onClick={()=>(navigator('/develope'))}>Develop</div>
                <div className='w-20 py-4 mx-2 '>About</div>
            </div>
        </div>
    );
};

export default Navigator;

        // <div className='w-full h-12 bg-red-500 fixed top-0 z-0 overflow-x-hidden box-border flex justify-between overflow-hidden'>
        //     <div className="w-24 bg-green-300">icon</div>
        //     <div className='relative bg-yellow-300 w-1/3 flex text-sm text-center items-center font-bold'>
        //         <div className='w-24 py-4 mx-2 bg-blue-400'>Home</div>
        //         <div className='w-24 py-4 mx-2 bg-blue-400'>Work.exhibitions</div>
        //         <div className='w-24 py-4 mx-2 bg-blue-400'>Work.dev</div>
        //         <div className='w-24 py-4 mx-2 bg-blue-400'>About</div>
        //     </div>
        // </div>