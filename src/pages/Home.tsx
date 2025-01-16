import { useEffect } from 'react';
import Hello from '../components/home/Hello';
import Introduce from '../components/home/Introduce';
import ExpSkill from '../components/home/ExpSkill';
import Career from '../components/home/Career';


const Home = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // 스크롤을 최상단으로 이동
  }, []); // 빈 배열로 전달하여 컴포넌트가 처음 마운트될 때 한 번만 실행

  return (
    <div  >

      <Hello />
      <div className='w-full bg-white h-40' />
      <Introduce />
      <div className='w-full bg-white h-[60rem]' />
      <ExpSkill />
      <div className='w-full bg-white h-48' />
      <Career />
      <div className='w-full bg-white h-40' />
    </div>

  );
};

export default Home;