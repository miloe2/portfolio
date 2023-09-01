import FullVideo from '../Detail/FullVideo';
import Left3Image from '../Detail/Left3Image';
import RightImage from '../Detail/RightImage';
import Left1ImageProps from '../Detail/Left1Image';
import FullImage from '../Detail/FullImage';
import ViewCode from '../Detail/ViewCode';


import videoUrl from '../../assets/Video/DDD.mp4';
import img1 from '../../assets/Images/Photos/DDD.webp'
import img2 from '../../assets/Images/Photos/dd1.webp'
import img3 from '../../assets/Images/Photos/dd2.webp'
import img4 from '../../assets/Images/Photos/dd3.webp'
import img5 from '../../assets/Images/Photos/dd4.webp'
import mobile from '../../assets/Images/Photos/Detail/DDDMobile.webp'


const DetailDDD = () => {
    const themeColor = '[#0041AF]'
    const txtColor = '#03193B'
    return (
        <>

        <div className=' px-44'>
            <FullVideo videoUrl={videoUrl} bgColor={themeColor} padding={40}/>
            <div className='w-screen h-72 '/>

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
            <div className='w-screen h-72 '/>
            
            <RightImage 
                bgColor={themeColor} 
                txtColor={txtColor}
                title='다이어리,
                        사용자조회'

                desc='유저는 자신만의 다이어리(전시회 평가/코멘트)를
                    가지고있으며 유저 조회 기능으로 다른 유저의 
                    다이어를 확인 할 수 있습니다.'
                
                img={img2}
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
                
                img1={img3}

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
                
                img={img4}
                items='center'
            
            />
            <div className='w-screen h-72 '/>
        </div>

        <div className='px-0' style={{padding:'0rem'}}>
            <FullImage 
                txtColor={txtColor}
                img={mobile}
                title='미디어 쿼리'
                desc='모든 페이지는 768px로 미디어쿼리 기준으로
                적용되어 모든 Digital Device에서 접근성을
                높였습니다. '
            />

        <div className='w-screen '/>
        <div className='px-0' style={{padding:'0'}}>
            <ViewCode
                bgColor = {themeColor}
                txtColor='white'
                site = '#'
                git = 'https://github.com/nessayj/RealFinalProject-DDD'
            />

            </div>
        </div>
        </>
    );
};

export default DetailDDD;