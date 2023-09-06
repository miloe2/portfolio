import ViewCode from '../Detail/ViewCode';
import Text2Parg from '../Detail/Text2Parg';
import FullVideo from '../Detail/FullVideo';
import LeftImage from '../Detail/LeftImage';
import RightFullImage from '../Detail/RightFullImage';

import videoUrl from '../../assets/Video/findwayVideo.mp4';
import img1 from '../../assets/Images/Photos/fw1.webp'
import img2 from '../../assets/Images/Photos/fw2.webp'
import img3 from '../../assets/Images/Photos/fw3.webp'


const DetailFindway = () => {
    const themeColor = '[#101420]'
    const txtColor  = '[#E7236B]'
    return (
        <div className='w-full h-auto'>
            <Text2Parg
            title='찾기'
            desc='막차가 끊긴 이후, 조금이라도 저렴하게 귀가해보자라는
             생각으로 만들어진 프로젝트입니다.  
            *해당 프로젝트는 Frontend와 기획으로 참여하였습니다. '
            txtColor = {txtColor}
            />
            <FullVideo
            bgColor={themeColor}
            videoUrl={videoUrl} 
            padding={40}        
            />

            <div className='w-full h-72'/>

            {/* <div className='w-screen h-20'/> */}
            <div className='px-44 max-[1024px]:px-10 w-full'>
                <div className='w-full h-20'/>

                <RightFullImage
                    bgColor='[#ffffff]'
                    txtColor = {txtColor}
                    descColor = ''
                    img={img3}
                    title='구현 방법'
                    desc='지하철 노선도에
                    지하철 호선, 좌표와 역사명을 입력하고,
                    다익스트라 알고리즘을 활용하여 
                    길찾기를 구현하였습니다.'
                
                />

                <div className='w-full h-80'/>
                <LeftImage
                    bgColor='#101420'
                    txtColor = {txtColor}
                    source={img1}
                    items='end'
                    title='경로 찾기'
                    desc='백엔드에서 최소환승/최소시간을 
                    연산하고 결과값을 전달합니다.
                    전달 받은 데이터를 탑승역/환승역으로 
                    나누어 출력합니다.'
                />

            </div>
            <div className='w-full h-40'/>

            <div className='w-screen h-screen px-44 max-[1024px]:px-10'>
                <RightFullImage 
                    bgColor = {themeColor}
                    txtColor={txtColor}
                    descColor = 'white'
                    img={img2} 
                    title='공공데이터 및
                            카카오맵 API' 
                    desc='서울시 공공데이터(따릉이 API)와
                    카카오맵 API를 활용하여 
                    현재 거치된 따릉이 개수를 출력합니다.                     
                    ' />
            </div>
            <ViewCode
            bgColor={themeColor}
            txtColor='white'
            site='#'
            git='https://github.com/miloe2/subwayPresentation'
            
            />
            
        </div>
    );
};

export default DetailFindway;