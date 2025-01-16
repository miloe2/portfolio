import React from 'react';
interface prjSummaryProps {
    desc1 : string[];
    desc2 : string[];
    txtColor: string;
    themeColor: string;
}
const PrjSummary :React.FC<prjSummaryProps>  = ({ desc1, desc2, txtColor}) => {
  return (
    <div className='bg-yellow-00 lg:max-w-5xl sm:max-w-2xl h-full flex sm:flex-row flex-col text-left mx-auto mb-20 mt-10'>
      <div className='bg-purple-00 sm:w-1/2 w-2/3  mx-auto min-w-[320px] flex flex-col px-0 '>
        <div className={`text-3xl/12 font-bold  `}>개요</div>
        <div className='flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-x-0 space-y-1 text-zinc-600 font-semibold mt-2'>
          <div className='text-sm/6 ' >
            {' '}
인원
            <span
              className=' ml-2'
              style={{ color: txtColor }}> 
              {' '}
              {desc1[0]}
            </span>
          </div>
          <div className='text-sm/6  '>
            {' '}
역할
            <span
              className='ml-2'
              style={{ color: txtColor }} >
              {desc1[1]}
              {' '}
            </span>
          </div>
          <div className='text-sm/6 '>
            {' '}
기간
            <span
              className='ml-2'
              style={{ color: txtColor }}>
              {desc1[2]}
            </span>
          </div>
        </div>
        <div className='font-semibold mt-1 text-zinc-600 text-sm/6'>
          {desc1[3]}
        </div>

      </div>
      <div className='sm:w-1/2 w-2/3 min-w-[320px]  mx-auto pl-0 lg:pl-0 sm:pl-20 mt-10 sm:mt-0'>
        <div className={`text-3xl/12 font-bold `}>상세 내용</div>
        <ul className='grid lg:grid-cols-2 grid-cols-1 pl-4 gap-y-1 text-zinc-600 font-semibold mt-2 '>
          {desc2.map((desc, index) => {
            return (
              <li
                key={index}
                className='text-sm/6 list-disc '>
                {desc}
              </li>
            );
          })}    
        </ul>

      </div>

    </div>
  );
};
// const PrjSummary :React.FC<prjSummaryProps>  = ({ desc1, desc2, txtColor}) => {
//     return (
//         <div className='lg:max-w-5xl w-full h-auto  mx-auto mb-40  
//         flex flex-col lg:flex-row space-y-4 text-center  bg-blue-00 rounded-xl 
//         p-6'>
//             <div className='bg-yellow-00 lg:md:max-w-3xl w-full  h-full flex text-left mx-auto ring'>
//                 <div className='bg-purple-00 w-1/2 flex flex-col px-0 '>
//                     <div className={`text-3xl/12 font-bold whitespace-pre-line `}>개요</div>
//                     <div className='flex  lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-x-0 space-y-1 text-zinc-600 font-semibold mt-2'>
//                         <div className='text-sm/6 whitespace-pre-line ' > 인원 <span className=' ml-2' style={{ color: txtColor }}> {desc1[0]}</span></div>
//                         <div className='text-sm/6 whitespace-pre-line '> 역할  <span className='ml-2'
//                         style={{ color: txtColor }} >{desc1[1]} </span></div>
//                         <div className='text-sm/6 whitespace-pre-line '> 기간  <span className='ml-2' style={{ color: txtColor }}>{desc1[2]}</span></div>
//                     </div>
//                     <div className='font-semibold mt-1 text-zinc-600 text-sm/6'>
//                     {desc1[3]}
//                     </div>

//                 </div>
//             <div className='max-w-1/2 '>
//                     <div className={`text-3xl/12 font-bold whitespace-pre-line `}>상세 내용</div>
//                         <ul className='grid lg:grid-cols-2 grid-cols-1 pl-4 gap-y-1 text-zinc-600 font-semibold mt-2'>
//                             {desc2.map((desc, index) => {
//                                 return (
//                                 <li key={index} className='text-sm/6 whitespace-pre-line list-disc '>
//                                     {desc}
//                                 </li>
//                                 );
//                         })}    
//                         </ul>

//                 </div>

//             </div>
//         </div>
//     );
// };


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
