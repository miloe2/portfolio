import React from 'react';
import BGItems from '../Components/Exhibitions/BGItems';
import Carousel from '../Components/Exhibitions/Carousel';


const Exhibitions = () => {
    return (
        <div className='overflow-hidden'>
            <BGItems/>
            <div className='w-full bg-black h-72'></div>
            <Carousel/>
            <div className='w-screen h-screen '></div>
        </div>
    );
};

export default Exhibitions;