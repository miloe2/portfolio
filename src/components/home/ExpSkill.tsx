import SkillsList from '../../assets/data/SkillsList';
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
    <div 
      className='max-w-8xl mx-auto px-40 flex flex-col items-center justify-center relative bg-red-00 '>
      <div 
        ref={divRef}
        className={`text-hello-heading font-extrabold  whitespace-nowrap transition-all duration-1000 ${visibilityClasses}`}
      >
        <div className='text-zinc-300'>Experienced Skills</div>
        <div className='text-zinc-200'>Experienced Skills</div>
        <div className='text-zinc-100'>Experienced Skills</div>
        <div className='text-zinc-50'>Experienced Skills</div>
      </div>

      <div className='w-full absolute top-1/2 -translate-y-1/2 cursor-pointer'>
        <Marquee speed={100} pauseOnClick gradient>
          {SkillsList.map((skill, index) => (
            <div 
              key={index}
              className='justify-center items-center flex flex-col mr-20 w-20 bg-red-00' >
              <div  
                className='flex flex-col w-14 h-14 border-1 rounded-full justify-start items-start bg-white'>
                <img 
                  src={skill.imgUrl} 
                  alt={skill.skill} 
                  className='w-full h-full rounded-full object-cover'
                />
              </div>
              <div 
                className='mt-5 text-xs font-semibold h-12'>
                {skill.skill}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className='w-44 h-80 rounded-3xl border-zinc-600 border-1 absolute top-1/2 -translate-y-1/2' />
    </div>
  );
};

export default ExpSkill;
