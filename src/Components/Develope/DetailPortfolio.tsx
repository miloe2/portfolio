import React from 'react';
import twcssImg from '../../assets/Images/tailwind css.png'
import TSLogoSnipet from '../Detail/TSLogoSnipet';

// import FullImage from '../Detail/FullImage';
import RightFullImage from '../Detail/RightFullImage';
import Text2Parg from '../Detail/Text2Parg';


const DetailPortfolio = () => {
    return (
        <>
        <div className='w-screen h-screen px-44'>
            <TSLogoSnipet/>
        </div>

        <div className='w-screen h-20'/>


        <div className='w-screen h-screen px-44'>
        <RightFullImage 
            bgColor='[#F6EF49]'
            txtColor='[#0041AF]' 
            img={twcssImg} 
            title='Tailwind CSS' 
            desc='기존에 사용하던 Styled Components에서
                평소 사용해보고 싶었던, Tailwind CSS로 
                작업하였습니다.  ' />
        </div>

        <div>
            <Text2Parg
                title='Work.Develope' 
                desc='기존에 근무하였던, Exhibition 업무도
                정리하여 페이지를 구성하였습니다. ' />
        </div>


        </>
        
        
    );
};

export default DetailPortfolio;