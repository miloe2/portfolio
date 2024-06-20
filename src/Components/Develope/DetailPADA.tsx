import React from 'react';
import pada1 from '../../assets/Images/Photos/pada1.png'
import pada2 from '../../assets/Images/Photos/pada2.png'
import pada3 from '../../assets/Images/Photos/pada3.png'
import pada4 from '../../assets/Images/Photos/pada_event.png'

import RightFullImage from '../Detail/RightFullImage';
import LeftImage from '../Detail/LeftImage';
import ViewCode from '../Detail/ViewCode';
import PrjSummary from '../Detail/PrjSummary';
// import Left3Image from '../Detail/Left3Image';
import Left1ImageProps from '../Detail/Left1Image'
import RightImage from '../Detail/RightImage';
import videoUrl from '../../assets/Video/pada3video.mp4';




const DetailPortfolio = () => {
    const themeColor = '#00D191'
    const txtColor = '#0041AF'
    const descColor ='white'
    return (
        <React.Fragment>
        <PrjSummary
            desc1={['BE 1명, FE 1명', '프론트엔드', '3개월', '앱서비스 PADA 홈페이지 버전 / 관리자 페이지 ']}
            desc2={['VUEX를 활용한 중복 호출 방지', '커서형 페이지네이션/무한스크롤', '소셜로그인 및 카카오 API', 'S3, Route53, CloudFront 웹 배포', '관리자 페이지 제작', 'Indexed DB']}
            txtColor = {txtColor}
            themeColor = {themeColor}
        />
        {/* <PrjSummary
            desc1={['개인 프로젝트', '프론트엔드', '1개월']}
            desc2={['포트폴리오 사이트 제작', 'Typescript, Tailwind css 연습', 'Intersection Observer 연습', 'Git을 이용한 정적페이지 배포']}
            txtColor = {txtColor}
            themeColor = {themeColor}
            desc1='팀 구성: BE 1명, FE 1명, 
            디자이너 1명
            개발 기간 : 2개월.
            역할 : 프론트엔드 100%'
            title2='개발주안점'
            desc2='- 100개 이상의 종/모프 필터 검색
            - API 호출을 최소화 하기 위한 설계
            - Cursor형 무한 스크롤
                    '
            desc3='- 게시글 작성 업로드 이미지 압축
            - 글수정 이미지 변경 체크 및 드래그 수정'
            txtColor = {txtColor}
        /> */}

{/* <Left3Image 
                bgColor={themeColor}
                txtColor={txtColor}
                img1={pada1}
                img2={pada2}
                img3={pada3}
                title='Diverse
                        Different  
                        Display'
                desc='전시 예매 및 정보 공유 커뮤니티입니다. 
                전시 예매, 전시 평가하기(다이어리), 동행찾기 등 
                세 가지 부분을 중점으로 설계되었습니다.'
            />  */}

        <ViewCode
        bgColor = {themeColor}
        txtColor='black'
        site = 'https://padaapp.com'
        />



        <RightFullImage 
            bgColor = {themeColor}
            txtColor={txtColor}
            descColor = {descColor}
            img={pada1} 
            title='VUEX를 통한 
            중복 호출 방지' 
            desc='카테고리는 VUEX로 객체화하여
            서버 호출 없이 접근 할수 있도록 하여
            잦은 호출을 방지하였습니다.' />
            <RightImage 
                bgColor={themeColor} 
                txtColor={txtColor}
                title='소셜로그인 및
                카카오 API'

                desc='기존 앱과 연동하여 구글/카카오 로그인을 구현하고
                기존 회원이 아닌 경우 자동으로 회원가입이 될 수 있게 하였습니다.
                
                이벤트 페이지에서 카카오 API를 활용하여서,
                장소 위치를 출력하고, 카카오 공유를 구현하였습니다.
                '
                
                img={pada4}
                items='start'
            />

<LeftImage
            bgColor='#00D191'
            txtColor={txtColor}
            title='커서형 무한스크롤'
            desc='무한스크롤을 적용하여서, 
            사용자 경험을 개선하였습니다.'
            source={videoUrl}
            items='center'
        />
            <Left1ImageProps
                bgColor={themeColor}
                txtColor={txtColor}
                title='이미지 압축 및
                Drag&Drop을 통한 순서 변경'

                desc='
                이미지 업로드 시, 용량을 압축하고
                드래그 순서 변경이 가능합니다. 
                글 수정 시 이미지 변경을 추적하여
                다른 API 백엔드에 전달합니다.  '
                
                img1={pada3}

            />
        <LeftImage
                bgColor='#00D191'
                txtColor = {txtColor}
                source={pada2}
                items='end'
                title='APP 유입을 위한
                미디어쿼리 ' 
               desc='앱 기반으로 만들어진 프로젝트 특성 상
               웹에서 앱으로 유입이 되도록 
               분양탭 모두 미디어쿼리가 적용되었습니다. ' />

        




        </React.Fragment>
        
        
    );
};

export default DetailPortfolio;

