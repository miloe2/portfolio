import SkillsList from '../../assets/Data/SkillsList';
import Marquee from "react-fast-marquee";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';



const ExpSkill = () => {
    const [divRef, isDivVisible] = useIntersectionObserver({
        rootMargin: '0px',
        threshold: 0.1,
    });
    
    const visibilityClasses = isDivVisible
    ? 'opacity-100 transform translate-y-0'
    : 'opacity-0 transform translate-y-10';
    



    return (
        <div className='w-full h-96  flex flex-col items-center justify-center relative px-24'>
            <div className={`absolute top-0 font-extrabold text-9xl whitespace-nowrap transition-all duration-1000 ${visibilityClasses}
                max-[768px]:text-6xl max-[412px]:text-4xl
            `} ref={divRef}>
                <div className=' text-zinc-300 '>Experienced Skills</div>
                <div className=' text-zinc-200 '>Experienced Skills</div>
                <div className=' text-zinc-100 '>Experienced Skills</div>
                <div className=' text-zinc-50 '>Experienced Skills</div>
            </div>

            <div className='w-44 h-80 rounded-3xl border-zinc-600 border-1 absolute top-1/2 z-10 ' />
   

            <Marquee speed={100} pauseOnClick gradient className=' h-96 w-auto absolute top-1/2 z-0' >
                {SkillsList.map((skill, index) => (
                    <div className='justify-center items-center  flex flex-col mr-20 w-20' key={index}>
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
