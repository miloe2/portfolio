import FullVideo from '../Detail/FullVideo';
import Left3Image from '../Detail/Left3Image';
import RightImage from '../Detail/RightImage';
import Left1ImageProps from '../Detail/Left1Image';
import FullImage from '../Detail/FullImage';
import ViewCode from '../Detail/ViewCode';
import PrjSummary from '../Detail/PrjSummary';

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
        <PrjSummary
            desc1={['풀스택 3명', '백엔드, 프론트엔드', '1개월', '전시 공공API를 활용한 커뮤니티']}
            desc2={['스프링부트 JPA를 활용한 백엔드 구현', 'JWT / 이메일 인증 적용 ', 'zustand를 활용한 회원 정보 전역 관리', 'EC2를 활용한 웹 배포']}
            txtColor = {txtColor}
            themeColor = {themeColor}
        />
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
                site = '#'
                git = 'https://github.com/nessayj/RealFinalProject-DDD'
                // notice = 'ID: test / PW :test'
            />



        <Left3Image 
                bgColor={themeColor}
                txtColor={txtColor}
                img1={img1}
                img2={img2}
                img3={img5}
                title='백엔드 &
                프론트엔드 
                제작'
                desc='Springboot와 React를 활용하여,
                풀스택으로 백엔드&프론트엔드 
                모두 구현하였습니다.'
            /> 


            <FullVideo videoUrl={videoUrl} bgColor={themeColor} padding={40}/>
            
            <RightImage 
                bgColor={themeColor} 
                txtColor={txtColor}
                title='다이어리,
                        평가 및 조회'

                desc='별점으로 평가를 남기고,
                해당 데이터는 조인을 통하여 
                다른 유저도 조회를 할 수 있게 구현하였습니다. '
                
                img={img2}
                items='start'
            />
            <Left1ImageProps
                bgColor={themeColor}
                txtColor={txtColor}
                title='zustand를 활용한
                회원 정보 전역관리'

                desc='zustand와 localStorage로,
                다른 유저의 페이지 조회가 가능하고 
                자신의 마이페이지에서만 수정할 수 있게 설계하였습니다. '
                
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