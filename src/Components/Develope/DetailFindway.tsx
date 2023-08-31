import ViewCode from '../Detail/ViewCode';
import Text2Parg from '../Detail/Text2Parg';
import FullVideo from '../Detail/FullVideo';
import LeftImage from '../Detail/LeftImage';
import RightFullImage from '../Detail/RightFullImage';
import FullImage from '../Detail/FullImage';

import videoUrl from '../../assets/Video/findwayVideo.mp4';


const DetailFindway = () => {
    const themeColor = '[#101420]'
    const txtColor  = '[#E7236B]'
    return (
        <div className='w-full h-auto'>
            <Text2Parg
            title='찾기'
            desc='막차가 끊긴 이후, 조금이라도 저렴하게 귀가하자라는
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

            <div className='w-screen h-20'/>
            <div className='px-44'>
                <LeftImage
                bgColor='#101420'
                txtColor = {txtColor}
                source='https://picsum.photos/300/200'
                items='end'
                title='찾기'
                desc='찾기는 기존 막차가 끊긴 이후, 
                조금이라도 저렴하게 집으로 귀가를 해보자라는
                생각으로 만들어진 프로젝트입니다.  '
                
                />

                <div className='w-full h-72'/>

                <RightFullImage
                    bgColor='[#ffffff]'
                    txtColor = {txtColor}
                    descColor = ''
                    img='https://picsum.photos/300/200'
                    title='구현 방법'
                    desc='지도에 좌표를 찍어서
                    다익스트라 알고리즘으로 길찾기를
                    구현하였습니다.   '
                
                />

            </div>
            <div className='w-full h-72'/>
            <FullImage 
            txtColor='white'
            img='https://picsum.photos/1280/1280' 
            title='Diverse'
            desc='hi'
            />


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