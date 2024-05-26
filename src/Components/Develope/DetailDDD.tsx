import FullVideo from '../Detail/FullVideo';
import Left3Image from '../Detail/Left3Image';
import RightImage from '../Detail/RightImage';
import Left1ImageProps from '../Detail/Left1Image';
import FullImage from '../Detail/FullImage';
import ViewCode from '../Detail/ViewCode';
// import PrjSummary from '../Detail/PrjSummary';

import videoUrl from '../../assets/Video/DDD2.mp4';
import img1 from '../../assets/Images/Photos/DDD.webp'
import img2 from '../../assets/Images/Photos/dd1.webp'
import img3 from '../../assets/Images/Photos/dd2.webp'
import img4 from '../../assets/Images/Photos/dd3.webp'
import img5 from '../../assets/Images/Photos/dd4.webp'
import mobile from '../../assets/Images/Photos/Detail/DDDMobile.webp'
import React from 'react';


const DetailDDD = () => {
    const themeColor = '#0041AF'
    const txtColor = '#03193B'
    return (
        <React.Fragment>
        {/* <PrjSummary
            title1='개요'
            desc1='팀 구성 : 풀스택 3명
            개발 기간 : 1개월
            역할 : 풀스택 (BE + FE)'
            title2='주요역할'
            desc2='- 로그인, 회원가입, 비밀번호 찾기, 
            회원정보 수정 등 회원 정보 관련 일체
            - JWT 보안 적용
            (Access/Refresh Token 적용)
                    '
            desc3='- 전시회 평점/코멘트 관리 및 mypage 연동
            - Firebase를 활용한 회원페이지 이미지 수정
            - 모바일 미디어쿼리 적용'

            txtColor = {txtColor}
        /> */}
        <ViewCode
                bgColor = {themeColor}
                txtColor='white'
                site = 'https://3.39.206.99:8111/'
                git = 'https://github.com/nessayj/RealFinalProject-DDD'
                notice = 'ID: test / PW :test'
            />



        <Left3Image 
                bgColor={themeColor}
                txtColor={txtColor}
                img1={img1}
                img2={img2}
                img3={img5}
                title='Diverse
                        Different  
                        Display'
                desc='전시 예매 및 정보 공유 커뮤니티입니다. 
                전시 예매, 전시 평가하기(다이어리), 동행찾기 등 
                세 가지 부분을 중점으로 설계되었습니다.'
            /> 


            <FullVideo videoUrl={videoUrl} bgColor={themeColor} padding={40}/>
            
            <RightImage 
                bgColor={themeColor} 
                txtColor={txtColor}
                title='다이어리,
                        사용자조회'

                desc='유저는 자신만의 다이어리(전시회 평가/코멘트)를
                    가지고있으며 유저 조회 기능으로 다른 유저의 
                    다이어리를 확인 할 수 있습니다.'
                
                img={img2}
                items='start'
            />
            <Left1ImageProps
                bgColor={themeColor}
                txtColor={txtColor}
                title='마이페이지
                Customized'

                desc='마이페이지는 Firebase를 활용하여   
                Customizing이 가능하게 설계하였습니다. '
                
                img1={img3}

            />

            <RightImage 
                bgColor={themeColor}
                txtColor={txtColor}
                title='JWT와 
                        이메일 인증'

                desc='JWT로 Token을 발급하여,  
                    회원페이지에 접근 할 수 있게 하였으며, 
                    회원가입/PW 찾기 등은 이메일 인증을
                    적용하였습니다. '
                
                img={img4}
                items='center'
            
            />

            <FullImage 
                txtColor={txtColor}
                img={mobile}
                title='미디어 쿼리'
                desc='모든 페이지는 768px로 미디어쿼리 기준으로
                적용되어 모든 Digital Device에서 접근성을
                높였습니다. '
            />


        </React.Fragment>
    );
};

export default DetailDDD;