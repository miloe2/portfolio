import React from 'react';
import twcssImg from '../../assets/Images/tailwind css.png'
import TSLogoSnipet from '../Detail/TSLogoSnipet';

// import FullImage from '../Detail/FullImage';
import Left1Image from '../Detail/Left1Image';
import RightImageLeft from '../Detail/RightImageLeft';


const DetailPortfolio = () => {
    return (
        <>
        <div className='w-screen h-auto px-44'>
            <TSLogoSnipet/>
            <div className='w-screen h-72 bg-zinc-50'/>
            
            
        </div>
        <div className='px-0'>
            <RightImageLeft bgColor='yellow-500' img={twcssImg} title='hi' desc='hi'/>

                
            </div>

        </>
        
        
    );
};

export default DetailPortfolio;