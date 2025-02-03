import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import CareerDescription from './CareerDescription';
import { career, project, skills, education } from '../../assets/data/careerData';
    

const Career = () => {
  const [divRef, isDivVisible] = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.05,
  });
    
  const visibilityClasses = isDivVisible
    ? 'opacity-100 transform translate-y-0'
    : 'opacity-100 transform translate-y-10';

  return (
    <div
      ref={divRef} 
      className={`max-w-7xl w-full mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 transition-all duration-1000 ${visibilityClasses}`} >
      <CareerDescription content={career}/>
      <CareerDescription content={project}/>
      <CareerDescription content={skills}/>
      <CareerDescription content={education}/>
    </div>
  );
};

export default Career;