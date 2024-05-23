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
        <div className='bg-black '>
            {/* <div className='w-full bg-black h-10'/> */}
            <BGItems/>
            <Whatidid/> 
            <CarouselSlide/>
            <ProjectRow/>
        </div>
    );
};

export default Exhibitions;