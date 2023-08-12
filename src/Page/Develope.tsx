import React from 'react';
import MainWork from '../Components/Develope/MainWork';
import PrjList from '../Components/Develope/PrjList';
import DDDetail from '../Components/Develope/DDDetail';

const Develope = () => {
    return (
        <div className='overflow-hidden'>

            <MainWork/>
            <div className='w-full bg-white h-72'/>
            <PrjList/>
            <div className='w-full bg-white h-72'/>
            <DDDetail/>
            <div className='w-full bg-white h-screen'/>
        </div>
    );
};

export default Develope;