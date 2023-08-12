import React from 'react';
import FullVideo from '../Detail/FullVideo';
import Left3Image from '../Detail/Left3Image';
import videoUrl from '../../assets/Video/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.mp4';

const DetailDDD = () => {
    return (
        <div>
            <FullVideo videoUrl={videoUrl} bgColor='[#0041AF]' />
            <div className='w-screen h-72 bg-blue-50'></div>
            <Left3Image bgColor='[#0041AF]' 
                img1='https://picsum.photos/300/130'
                img2='https://picsum.photos/300/140'
                img3='https://picsum.photos/300/150'
            />
        </div>
    );
};

export default DetailDDD;