import React from 'react';
import twcssImg from '../../assets/Images/tailwind css.png'
import TSLogoSnipet from '../Detail/TSLogoSnipet';
import RightFullImage from '../Detail/RightFullImage';
import Text2Parg from '../Detail/Text2Parg';
import Center9image from '../Detail/Center9image';
import LeftImage from '../Detail/LeftImage';
import ViewCode from '../Detail/ViewCode';

import videoUrl from '../../assets/Video/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.mp4';


const DetailPortfolio = () => {
    const themeColor = '[#F6EF49]'
    const txtColor  = '[#0041AF]'

    return (
        <>
        <div className='w-screen h-screen px-44'>
            <TSLogoSnipet/>
        </div>

        <div className='w-screen h-20'/>


        <div className='w-screen h-screen px-44'>
        <RightFullImage 
            bgColor = {themeColor}
            txtColor={txtColor}
            img={twcssImg} 
            title='Tailwind CSS' 
            desc='기존에 사용하던 Styled Components에서
            평소 사용해보고 싶었던, Tailwind CSS로 
            작업하였습니다.  ' />
        </div>
            <div className='w-screen h-40'/>


        <Text2Parg
            txtColor={txtColor}
            title='Work.Develope' 
            desc='기존에 근무하였던, Exhibition 업무도
            정리하여 페이지를 구성하였습니다. ' />

        <Center9image
            bgColor = {themeColor}
            img1='https://picsum.photos/300/200'
            img2='https://picsum.photos/300/200'
            img3='https://picsum.photos/300/200'
            img4='https://picsum.photos/300/200'
            img5='https://picsum.photos/300/200'
            img6='https://picsum.photos/300/200'
            img7='https://picsum.photos/300/200'
            img8='https://picsum.photos/300/200'
            img9='https://picsum.photos/300/200'
        />
        <div className='w-screen h-72'/>
        
        <LeftImage
            bgColor='#f5f5f5'
            txtColor={txtColor}
            title='Work.Exhibition'
            desc='기존에 근무하였던, Exhibition 업무도
                정리하여 페이지를 구성하였습니다. '
            source={videoUrl}
            items='center'
        />
        <div className='w-screen h-40'/>

        <ViewCode
        bgColor = {themeColor}
        txtColor='black'
        site = '#'
        git = 'https://github.com/miloe2/portfolio.ts.vite'
        />



        </>
        
        
    );
};

export default DetailPortfolio;

