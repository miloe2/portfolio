import React from 'react';
import SkillsList from '../../assets/Data/SkillsList';
// import StackCircle from './../Detail/StackCircle';
import Marquee from "react-fast-marquee";



const ExpSkill = () => {

    // const renderedSkills = Object.keys(StackCircle).map((skillKey, index) => {
    //     const SkillComponent = StackCircle[skillKey as keyof typeof StackCircle];
    //     return <SkillComponent key={index} />;
    // });

    return (
        <div className='w-full h-screen  flex flex-col items-center relative px-24'>
            <div className='font-extrabold text-red-200 text-9xl whitespace-nowrap '>Experienced Skills</div>
            <div className='w-44 h-80 rounded-3xl border-zinc-600 border-1 absolute top-20 z-10' />

            <Marquee speed={100} pauseOnHover gradient className=' h-52 w-auto z-0 ' >
                {SkillsList.map((skill, index) => (
                    <div className='justify-center items-center  flex flex-col mr-20 w-20'>
                        <div key={index} className='flex flex-col w-14 h-14 border-1 rounded-full justify-start items-start bg-white'>
                            <img src={skill.imgUrl} alt="" className='w-full h-full rounded-full object-cover'/>
                        </div>
                        <div className='mt-5 text-xs font-semibold h-12'>
                            {skill.skill}
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default ExpSkill;
