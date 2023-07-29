import React from 'react';
import { ImageUrl1 } from './ImgUrl';

const Whatidid = () => {
    return (
        <div className='w-full h-auto bg-black px-48 flex justify-between absolute '  >
            <div className='w-2/5 h-auto  flex flex-col overflow-x-hidden'>
                <div className='w-full h-96 '><img src={ImageUrl1[0]} alt="" className='w-full h-full object-cover'/> </div>
                <div className='w-full h-96 overflow-x-hidden '><img src={ImageUrl1[1]} alt="" className='w-full h-full object-cover'/> </div>
                <div className='w-full h-96 overflow-x-hidden'><img src={ImageUrl1[2]} alt="" className='w-full h-full object-cover'/> </div>
            </div>
            <div className='w-2/5 h-96 bg-slate-400 flex flex-col sticky top-1/3 overflow-x-hidden'>

            </div>
            
        </div>

    );
};

export default Whatidid;