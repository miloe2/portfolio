import { useRef, useState } from 'react';
import Marquee from "react-fast-marquee";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import SkillsList from '../../assets/data/SkillsList';

const ExpSkill = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange  = (_target : Element, isIntersecting : boolean) => {
    setIsVisible(isIntersecting);
  };

  useIntersectionObserver([textRef], handleVisibilityChange);

  const texts = [
    { text: 'Experienced Skills', class: 'text-zinc-300', delay: 'delay-300' },
    { text: 'Experienced Skills', class: 'text-zinc-200', delay: 'delay-500' },
    { text: 'Experienced Skills', class: 'text-zinc-100', delay: 'delay-700' },
    { text: 'Experienced Skills', class: 'text-zinc-50', delay: 'delay-1000' }
  ];
  return (
    <div 
      className='max-w-8xl mx-auto px-40 mt-40 flex flex-col items-center justify-center relative bg-red-00 '>
      <div 
        ref={textRef}
        className={`text-hello-heading font-extrabold  whitespace-nowrap transition-all duration-1000 `}
      >
        {texts.map((item, index) => (
          <div
            key={index}
            className={`
              ${item.class} transition-all duration-1000 transform 
              ${item.delay} 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {item.text}
          </div>
        ))}
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
