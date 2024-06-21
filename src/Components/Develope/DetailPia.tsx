import React from 'react';

import pia1 from '../../assets/Images/Photos/pia_grid.webp'
import pia2 from '../../assets/Images/Photos/pia_matter.webp'
import pia3 from '../../assets/Images/Photos/pia_aws.webp'




import RightFullImage from '../Detail/RightFullImage';
import LeftImage from '../Detail/LeftImage';
import ViewCode from '../Detail/ViewCode';
import PrjSummary from '../Detail/PrjSummary';
// import Left3Image from '../Detail/Left3Image';
import RightImage from '../Detail/RightImage';
import videoUrl from '../../assets/Video/pia_video.mp4';





const DetailPortfolio = () => {
    const themeColor = '#000'
    const txtColor = '#353DFF'
    const descColor ='white'
    return (
        <React.Fragment>
        <PrjSummary
            desc1={['FE 1명', '프론트엔드', '2주', 'PIAENM 프로덕션 홍보 웹사이트']}
            desc2={['youtube 비디오를 활용한 페이지 구성', 'Scroll 기반 애니메이션', 'matter.js 라이브러리', 'S3, Route53, CloudFront 웹 배포', 'Grid 레이아웃', ]}
            txtColor = {txtColor}
            themeColor = {themeColor}
        />

        <ViewCode
        bgColor = {themeColor}
        txtColor='black'
        site = 'https://piaenm.com'
        />
        {/* <Text2Parg
        txtColor={themeColor}
        title='영상 프로덕션 홍보 사이트 ' 
        desc='영상 프로덕션 영상에 맞춰서
        동적인 UI를 적용하였습니다.
        ' />
        <FullVideo videoUrl={videoUrl} bgColor={themeColor} padding={40}/> */}
        <LeftImage
        bgColor = {themeColor}
            txtColor={txtColor}
            title='동적 UI 구현'
            desc='영상 프로덕션 영상에 맞추어
            동적 UI를 적용하여 사용자에게 시각적 경험을 제공하였습니다.'
            source={videoUrl}
            items='center'
        />

        <RightFullImage 
            bgColor = {themeColor}
            txtColor={txtColor}
            descColor = {descColor}
            img={pia1} 
            title='Youtube를 활용한
            Grid 레이아웃' 
            desc='Grid 레이아웃과 iFrame을 활용하여 
            이미자와 영상을 매칭시켰습니다.' />

            <RightImage 
                bgColor={themeColor} 
                txtColor={txtColor}
                title='matter.js'

                desc='Matter.js 라이브러리를 활용하여 
                객체들을 조작 할 수 있는 기능을 추가하여 
                웹 사이트에 독특한 포인트를 적용하였습니다.
                '
                
                img={pia2}
                items='center'
            />
            <LeftImage
                bgColor={themeColor}
                txtColor = {txtColor}
                source={pia3}
                items='end'
                title='AWS 활용한
                SSG 웹 호스팅' 
               desc='S3, Route53, CloudFront를 활용하여
               SSG 웹 호스팅 하였습니다. ' />


        </React.Fragment>
        
        
    );
};

export default DetailPortfolio;

