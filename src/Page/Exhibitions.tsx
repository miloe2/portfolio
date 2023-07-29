import React from 'react';
import BGItems from '../Components/Exhibitions/BGItems';
import Carousel from '../Components/Exhibitions/Carousel';
import Whatidid from '../Components/Exhibitions/Whatidid';


const Exhibitions = () => {
    return (
        <div className='overflow-hidden'>
            <BGItems/>
            <div className='w-full bg-black h-72'/>
            <Carousel/>
            <div className='w-full bg-black h-72'/>
            <Whatidid/>
            <div className='w-full bg-black h-72'/>
            <div className='w-full bg-black h-72'/>
            <div className='w-full bg-black h-72'/>
            <div className='w-full bg-black h-72'/>
            <div className='w-full bg-black h-72'/>
            <div className='w-full bg-black h-72'/>
        </div>
    );
};

export default Exhibitions;