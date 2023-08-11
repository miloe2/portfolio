import {React, useState } from 'react';
import DevPrjData from '../../assets/Data/DevPrjData';

const PrjList = () => {
    const [hoverState, setHoverState] = useState(false);

    const latestArray = [...DevPrjData].reverse().map(item => item);

    return (
        <div className='w-screen h-auto  px-10 flex flex-wrap'>

            {latestArray.map((item, index) => (
                <div key={index} className={`w-1/3 h-96 flex items-end relative ${item.color.bg}`}>
                    <img src={item.imgUrl} alt="photo" className='absolute top-0 w-full h-full object-cover 
                    hover:opacity-0 transition duration-500'/>
                    <div className=' m-10 z-0 '>
                    {item.color.text}
                    {item.color.title}
                        <div className={` text-xs h-6  `}>{item.date}</div>
                        <div className={`text-5xl font-bold `}>{item.title}</div>
                    </div>
                    
                </div>
                
            ))}

        </div>
    );
};

export default PrjList;

