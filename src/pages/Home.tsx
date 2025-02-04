import { useEffect } from 'react';
import Hello from '../components/home/Hello';
import Introduce from '../components/home/Introduce';
import ExpSkill from '../components/home/ExpSkill';
import Career from '../components/home/Career';


const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); 
  }, []); 

  return (
    <div className='bg-zinc-200 pb-40'>
      <Hello />
      <Introduce />
      <ExpSkill />
      <Career />
    </div>
  );
};

export default Home;