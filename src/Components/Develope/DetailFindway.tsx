import ViewCode from '../Detail/ViewCode';
import LeftImage from '../Detail/LeftImage';
import RightFullImage from '../Detail/RightFullImage';
import PrjSummary from '../Detail/prjSummary';

import videoUrl from '../../assets/Video/findwayVideo.mp4';
import img1 from '../../assets/Images/Photos/fw1.webp'
import img2 from '../../assets/Images/Photos/fw2.webp'
import img3 from '../../assets/Images/Photos/fw3.webp'


const DetailFindway = () => {
    const themeColor = '[#101420]'
    const txtColor  = '[#E7236B]'
    return (
        <div className='w-full h-auto '>
        <PrjSummary
            title1='개요'
            desc1='팀 구성 : BE 2명 + FE 2명
            개발 기간 : 1개월
            역할 : Frontend '
            title2='주요역할'
            desc2='- 메인 페이지 및 페이지 이동 기능
            - 백엔드 연산 값 출력 및 UI 
            (노선 색상, 핀 좌표, Modal 컨트롤)
                    '
            desc3='- 따릉이 조회 및 출력
                (공공API + 카카오맵 연동)'
            txtColor = {txtColor}
        />


        <ViewCode
            bgColor={themeColor}
            txtColor='white'
            site='#'
            git='https://github.com/miloe2/subwayPresentation'
            
            />

            <div className='w-screen h-20'/>
            <div className='px-44 max-[1024px]:px-10 w-full'>
            <LeftImage
            bgColor='#101420'
            txtColor={txtColor}
            title='찾기'
            desc='막차가 끊긴 이후, 저렴하게 귀가해보자라는
            생각으로 만들어진 프로젝트입니다.  '
            source={videoUrl}
            items='center'
        />
                <div className='w-full h-20'/>

                <RightFullImage
                    bgColor='[#ffffff]'
                    txtColor = {txtColor}
                    descColor = ''
                    img={img3}
                    title='구현 방법'
                    desc='지하철 노선도에
                    지하철 호선, 좌표와 역사명을 입력하고,
                    다익스트라 알고리즘을 활용하여 
                    길찾기를 구현하였습니다.'
                
                />

                <div className='w-full h-80'/>
                <LeftImage
                    bgColor='#101420'
                    txtColor = {txtColor}
                    source={img1}
                    items='end'
                    title='경로 찾기'
                    desc='백엔드에서 최소환승/최소시간을 
                    연산하고 결과값을 전달합니다.
                    전달 받은 데이터를 탑승역/환승역으로 
                    나누어 출력합니다.'
                />

            </div>
            <div className='w-full h-40'/>

            <div className='w-screen h-screen px-44 max-[1024px]:px-10'>
                <RightFullImage 
                    bgColor = {themeColor}
                    txtColor={txtColor}
                    descColor = 'white'
                    img={img2} 
                    title='공공데이터 및
                            카카오맵 API' 
                    desc='서울시 공공데이터(따릉이 API)와
                    카카오맵 API를 활용하여 
                    현재 거치된 따릉이 개수를 출력합니다.                     
                    ' />
            </div>

            
        </div>
    );
};

export default DetailFindway;

// 헤이! 케이크 (수제 케이크 제작 플랫폼)

// 소속/기관명
// FE 3명 + BE 4명

// 프로젝트 기간
// 2023.02. ~ 2023.03.

// 프로젝트 내용
// 주요 역할 : 메인, 관리자, 마켓 관련 페이지, 배포, 비동기 통신 세팅
// 웹 : https://heycake.vercel.app/
// 저장소 : https://github.com/prgrms-web-devcourse/Team-7sung-heycake

// 업무 성과 :
// 작업시 반응형 웹 구성 (모바일 , 데스크톱)
// Axios의 기본 협업 세팅 (사용하기 편한 커스터마이징)
// Vercel 배포 & 연동을 통한 자동 테스팅 및 개발 + 상업 페이지 분리
// Next.js의 SSG와 ISR을 활용한 렌더링 개선 (페이지 별 갱신주기 관리)
// 스켈레톤 UI 및 로딩 시 UX 개선
// 메인 페이지의 전반적인 기능 개발 (해더 , 지역선택 컴포넌트, 아이콘등)
// 관리자 페이지의 전반적인 기능 개발 (3개의 페이지 텝에 맞는 공용 컴포넌트)
// 마켓 정보조회를 위한 전반적인 기능 개발 (카카오 맵 연동)
// 5차례에 걸친 중간 리팩토링을 통해 코드개선 및 타입, 린트 최적화