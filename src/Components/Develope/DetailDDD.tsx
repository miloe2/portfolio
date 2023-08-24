import React from 'react';
import FullVideo from '../Detail/FullVideo';
import Left3Image from '../Detail/Left3Image';
import RightImage from '../Detail/RightImage';
import Left1ImageProps from '../Detail/Left1Image';
import FullImage from '../Detail/FullImage';
import ViewCode from '../Detail/ViewCode';


import videoUrl from '../../assets/Video/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.mp4';

const DetailDDD = () => {
    const themeColor = '[#0041AF]'
    const txtColor = '#03193B'
    return (
        <>

        <div className=' px-44'>
            <FullVideo videoUrl={videoUrl} bgColor={themeColor} />
            <div className='w-screen h-72 '/>

            <Left3Image 
                bgColor={themeColor}
                txtColor={txtColor}
                img1='https://picsum.photos/300/130'
                img2='https://picsum.photos/300/140'
                img3='https://picsum.photos/300/150'
                title='Diverse
                        Different  
                        Display'
                desc='전시 예매 및 정보 공유 커뮤니티입니다. 
                전시 예매, 전시 평가하기(다이어리), 동행찾기 등 
                세 가지 부분을 중점으로 설계되었습니다.'
            />
            <div className='w-screen h-72 '/>
            
            <RightImage 
                bgColor={themeColor} 
                txtColor={txtColor}
                title='다이어리,
                        사용자조회'

                desc='유저는 자신만의 다이어리(전시회 평가/코멘트)를
                    가지고있으며 유저 조회 기능으로 다른 유저의 
                    다이어를 확인 할 수 있습니다.'
                
                img='https://picsum.photos/300/200'
                items='start'
            />
            <div className='w-screen h-72'/>
            <Left1ImageProps
                bgColor={themeColor}
                txtColor={txtColor}
                title='마이페이지
                Customized'

                desc='
                다이어리 페이지는 Firebase를 활용하여   
                Customizing이 가능하게 설계하였습니다. '
                
                img1='https://picsum.photos/300/200'

            />
            <div className='w-screen h-72 '/>

            <RightImage 
                bgColor={themeColor}
                txtColor={txtColor}
                title='JWT와 
                        이메일 인증'

                desc='JWT로 Token을 발급하여,  
                    회원페이지에 접근 할 수 있게 하였으며, 
                    회원가입/PW 찾기 등은 이메일 인증을
                    적용하였습니다. '
                
                img='https://picsum.photos/300/200'
                items='end'
            
            />
            <div className='w-screen h-72 '/>
        </div>

        <div className='px-0' style={{padding:'0'}}>
            <FullImage 
                txtColor={txtColor}
                img='https://picsum.photos/1280/1280' 
                title='Diverse'
                desc='hi'
            />

            <div className='w-screen '/>

            <ViewCode
                bgColor = {themeColor}
                txtColor='white'
                site = '#'
                git = 'https://github.com/nessayj/RealFinalProject-DDD'
            />


        </div>
        </>
    );
};

export default DetailDDD;