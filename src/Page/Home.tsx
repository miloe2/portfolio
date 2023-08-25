import React, { useEffect } from 'react';
import Hello from '../Components/Home/Hello';
import Introduce from '../Components/Home/Introduce';

const Home = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' }); // 스크롤을 최상단으로 이동
    }, []); // 빈 배열로 전달하여 컴포넌트가 처음 마운트될 때 한 번만 실행
  
    return (
        <div  >
            <Hello/>
            <div className='w-full bg-white h-40' />
            <Introduce/>
        </div>
        
    );
};

export default Home;