import React from 'react';
interface prjSummaryProps {
    title1 : string;
    desc1 : string;
    title2 : string;
    desc2 : string;
    desc3 : string;
    txtColor: string;
}
const PrjSummary :React.FC<prjSummaryProps>  = ({title1, desc1, title2, desc2, desc3, txtColor}) => {
    return (
        <div className='lg:max-w-5xl w-full  mx-auto mb-40  flex flex-col lg:flex-row space-y-4 text-center'>




            <div className='flex   col-span-1 '>
                <div className={`text-4xl/12 font-bold whitespace-pre-line  w-40 mx-4 `}  style={{ color: txtColor }}>{title1}</div>
                <div className='text-sm/6 whitespace-pre-line '>{desc1}</div>
            </div>
            <div className='flex  col-span-2 mt-4 md:mt-0'>
                <div className={`text-4xl/12 font-bold whitespace-pre-line mx-4 w-40`}  style={{ color: txtColor }}>{title2}</div>
                <div className='flex md:space-x-4 md:flex-row flex-col'>
                    <div className='text-sm/6 whitespace-pre-line '>{desc2}</div>
                    <div className='text-sm/6 whitespace-pre-line '>{desc3}</div>
                </div>
            </div>

        </div>
    );
};

export default PrjSummary;

            {/* - URL : https://padaapp.com
- 연계/소속회사 : 피소프트 / 파충류 다 있다
- 주요 업무 : 프론트엔드
- 담당 역할 : 화면 기획 및 설계, 프론트엔드 구현
- 기술 스택 : VUE, Typescript, Vuex, tailwind CSS
- 업무 기간 : 2024.01 ~ 2024.05 (약 5개월)
- 개발 인원 : 총 2인 ( 백엔드, 프론트엔드 )
                {/* <div className='lg:'>역할 : 화면 기획 및 설계 프론트엔드 구현</div>
                <div>기간 : 2024.01 ~ 2024.05</div>
                <div>인원 : BE 1명 / FE 1명</div> 
- 상세 내용 : */}
