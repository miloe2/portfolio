import { useEffect }from 'react';
import BGItems from '../Components/Exhibitions/BGItems';
import CarouselSlide from '../Components/Exhibitions/CarouselSlide';
import Whatidid from '../Components/Exhibitions/Whatidid';
import ProjectRow from '../Components/Exhibitions/ProjectRow';


const Exhibitions = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' }); // 스크롤을 최상단으로 이동
    }, []); // 빈 배열로 전달하여 컴포넌트가 처음 마운트될 때 한 번만 실행


    return (
        <div className='overflow-hidden'>
            <BGItems/>
            <div className='w-full bg-black h-72'/>
            <Whatidid/> 
            <div className='w-full bg-black h-screen'/>
            <div className='w-full bg-black h-screen'/>
            <div className='w-full bg-black h-96'/>
            <CarouselSlide/>
            <div className='w-full bg-black h-40'/>
            <ProjectRow/>
            <div className='w-full bg-black h-72'/>
        </div>
    );
};

export default Exhibitions;