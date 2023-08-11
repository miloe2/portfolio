import React from 'react';
import MainWork from '../Components/Develope/MainWork';
import PrjList from '../Components/Develope/PrjList';

const Develope = () => {
    return (
        <div className='overflow-hidden'>

            <MainWork/>
            <div className='w-full bg-white h-72'/>
            <PrjList/>
            <div className='w-full bg-white h-screen'/>
            
        </div>
    );
};

export default Develope;