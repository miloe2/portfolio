import React, {  } from 'react';
import SkillsList from '../../assets/Data/SkillsList';
// import StackCircle from './../Detail/StackCircle';
import Marquee from "react-fast-marquee";



const ExpSkill = () => {



    return (
        <div className='w-full h-96  flex flex-col items-center justify-center relative px-24'>
            <div className='absolute top-0'>
                <div className='font-extrabold text-zinc-300 text-9xl whitespace-nowrap '>Experienced Skills</div>
                <div className='font-extrabold text-zinc-200 text-9xl whitespace-nowrap '>Experienced Skills</div>
                <div className='font-extrabold text-zinc-100 text-9xl whitespace-nowrap '>Experienced Skills</div>
                <div className='font-extrabold text-zinc-50 text-9xl whitespace-nowrap '>Experienced Skills</div>
            </div>

            <div className='w-44 h-80 rounded-3xl border-zinc-600 border-1 absolute top-1/2 z-10' />
   

            <Marquee speed={100} pauseOnHover gradient className=' h-96 w-auto absolute top-1/2' >
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
