import ppt from '../../assets/Images/Icons/PPT-Logo.png';
import excel from '../../assets/Images/Icons/Excel.png';
import hwp from '../../assets/Images/Icons/hwp.png';
import {LiaStarSolid, LiaStarHalfSolid} from 'react-icons/lia'
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

    

const Career = () => {
    const [divRef, isDivVisible] = useIntersectionObserver({
        rootMargin: '0px',
        threshold: 0.1,
    });
    
    const visibilityClasses = isDivVisible
    ? 'opacity-100 transform translate-y-0'
    : 'opacity-0 transform translate-y-10';

    return (
        <div className={`w-full h-auto 0 flex overflow-hidden px-0 justify-center flex-wrap transition-all duration-1000 ${visibilityClasses}`} ref={divRef}>
            <div className={`w-72 h-60  flex flex-col mx-5 transition-all duration-1000 delay-0 ${visibilityClasses} `}>
                <div className='w-72 flex '>
                    <div className='w-16  font-bold text-lg'>교육사항</div>
                </div>
                <div className='w-1 h-3'/>
                <div className='w-80 h-7 flex text-sm '>
                    <div className='w-16 '>2023.07</div>
                    <div className='w-auto '>KH정보교육원 수료</div>
                </div>
                <div className='w-80 h-7 flex text-sm'>
                    <div className='w-16 '>2017.08</div>
                    <div className='w-auto '>건국대학교(글로컬캠퍼스) 경영학과 졸업</div>
                </div>
                <div className='w-80 h-7 flex text-sm'>
                    <div className='w-16'>2013.03</div>
                    <div className='w-auto '>건국대학교(글로컬캠퍼스) 경영학과 입학</div>
                </div>
                <div className='w-80 h-7 flex text-sm'>
                    <div className='w-16 '>2009.02</div>
                    <div className='w-auto '>경일고등학교 졸업</div>
                </div>
            </div>

            <div className={`w-72 h-72  flex flex-col mx-5 transition-all duration-1000 delay-300 ${visibilityClasses}  `}>
                <div className='w-72 flex'>
                    <div className='w-16  font-bold text-lg'>경력사항</div>
                </div>
                <div className='w-1 h-3'/>
                <div className='flex h-12  '>
                    <div className='  flex text-sm flex-col justify-between'>
                        <div className='w-20  '>2019.11  </div>
                        <div className='w-auto '>~ 2022.12 </div>
                    </div>
                    <div className='w-auto  flex text-sm flex-col justify-between'>
                        <div className='w-auto  '>㈜트레이드월드</div>
                        <div className='w-auto '>해외전시 기획 및 운영</div>
                    </div>
                </div>
                
                <div className='w-1 h-3'/>
                <div className='flex h-12  '>
                <div className='  flex text-sm  flex-col justify-between'>
                        <div className='w-20 '>2018.08  </div>
                        <div className='w-20 '>~ 2018.11 </div>
                    </div>
                    <div className='  flex text-sm flex-col justify-between'>
                        <div className='w-auto '>하나투어</div>
                        <div className='w-auto '>서유럽팀 인턴</div>
                    </div>
                </div>
            </div>

            <div className={`w-72 h-72  flex flex-col mx-5 transition-all duration-1000 delay-500 ${visibilityClasses} `}>
            <div className='w-72 flex'>
                    <div className='w-16  font-bold text-lg'>어학</div>
                </div>
                <div className='w-1 h-3'/>
                <div className='flex h-12  '>
                    <div className='  flex text-sm flex-col justify-between'>
                        <div className='w-20  '>2019.09  </div>
                    </div>
                    <div className='w-auto  flex text-sm flex-col justify-between'>
                        <div className='w-16  '>중국어</div>
                        <div className='w-16 '>회화</div>
                    </div>
                    <div className='w-auto  flex text-sm flex-col justify-between'>
                        <div className='w-auto  '>新HSK 6급 </div>
                        <div className='w-auto flex-row flex pb-1 text-yellow-300'><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/> <LiaStarHalfSolid/></div>
                    </div>
                </div>
                
                <div className='w-1 h-3'/>
                <div className='flex h-20  '>
                    <div className='  flex text-sm flex-col justify-between'>
                        <div className='w-20  '>2019.08  </div>
                        <div className='w-20  '>2019.07  </div>
                        <div className='w-16  '>  &nbsp;</div>
                    </div>
                    <div className='w-auto  flex text-sm flex-col justify-between'>
                        <div className='w-16  '>영어</div>
                        <div className='w-16  '> &nbsp;</div>
                        <div className='w-16 '>회화</div>
                    </div>
                    <div className='w-auto  flex text-sm flex-col justify-between'>
                        <div className='w-auto  '>OPIc IH</div>
                        <div className='w-auto  '>TOEIC 810</div>
                        <div className='w-auto flex-row flex pb-1 text-yellow-300'><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/> <LiaStarHalfSolid/></div>
                    </div>
                </div>
            </div>

            <div className={`w-72 h-72  flex flex-col mx-5 transition-all duration-1000 delay-700 ${visibilityClasses} `}>
                <div className='w-auto flex delay-1000'>
                    <div className='w-16  font-bold text-lg'>자격증</div>
                </div>
                <div className='w-1 h-3'/>
                <div className='w-auto h-7 flex text-sm '>
                    <div className='w-16 '>2021.02</div>
                    <div className='w-auto '>국제무역사 1급</div>
                </div>

                <div className='w-1 h-3'/>
                <div className=' flex'>
                    <div className='w-16  font-bold text-lg'>문서활용</div>
                </div>

                <div className='w-1 h-3'/>
                <div className='flex flex-row  '>
                    <div className='h-7 flex text-sm flex-col mr-5'>
                        <div className='w-10 h-10 '><img src={ppt} alt="" className='w-full h-full object-cover'/></div>
                        <div className='w-10 text-xs mt-1   text-center'>상</div>
                    </div>
                    <div className='h-7 flex text-sm flex-col mr-5 '>
                        <div className='w-10 h-10 '><img src={excel} alt="" className='w-full h-full object-cover' /></div>
                        <div className='w-10 text-xs mt-1   text-center'>중</div>
                    </div>
                    <div className='h-7 flex text-sm flex-col '>
                        <div className='w-10 h-10 '><img src={hwp} alt="" className='w-full h-full object-cover' /></div>
                        <div className='w-10 text-xs mt-1 text-center'>상</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;