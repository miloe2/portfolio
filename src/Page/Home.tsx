import React from 'react';
import Hello from '../Components/Home/Hello';

const Home = () => {
    return (
        <div className='overflow-hidden box-border relative h-auto'>
            <Hello/>
            <div className='w-screen h-screen'></div>
            <div className='w-screen h-screen'></div>
            <div className='w-screen h-screen'></div>
            <div className='w-screen h-screen'></div>
        </div>
    );
};

export default Home;