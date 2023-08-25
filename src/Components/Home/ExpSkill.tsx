import React from 'react';
import StackCircle from './../Detail/StackCircle';
import Marquee from "react-fast-marquee";



const ExpSkill = () => {

    const renderedSkills = Object.keys(StackCircle).map((skillKey, index) => {
        const SkillComponent = StackCircle[skillKey as keyof typeof StackCircle];
        return <SkillComponent key={index} />;
    });

    return (
        <div className='w-full h-screen border-1 border-red-500 flex flex-col items-center relative'>
            <div className='font-extrabold text-zinc-200 text-9xl'>Experienced Skills</div>
            <div className='flex flex-row'>
                <Marquee  speed={200} className='bg-yellow-500' >
                {renderedSkills}
                </Marquee>
            </div>
            <div className='w-40 h-80 rounded-3xl border-zinc-600 border-1 relative -top-16' />
        </div>
    );
};

export default ExpSkill;
