import React from 'react';
import BGItems from '../Components/Exhibitions/BGItems';
import Carousel from '../Components/Exhibitions/Carousel';
import Whatidid from '../Components/Exhibitions/Whatidid';
import ProjectRow from '../Components/Exhibitions/ProjectRow';


const Exhibitions = () => {
    return (
        <div className='overflow-hidden'>
            <BGItems/>
            <div className='w-full bg-black h-72'/>
            <Whatidid/> 
            <div className='w-full bg-black h-screen'/>
            <div className='w-full bg-black h-screen'/>
            <div className='w-full bg-black h-96'/>
            <Carousel/>
            <div className='w-full bg-black h-40'/>
            <ProjectRow/>
            <div className='w-full bg-black h-72'/>
        </div>
    );
};

export default Exhibitions;