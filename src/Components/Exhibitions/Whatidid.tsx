import React, {useEffect, useState} from 'react';
import { ImageUrl1 } from '../../assets/Data/ExhibitData';

const Whatidid = () => {
    const [scrollY, setScrollY] = useState(0);
    
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // useEffect(() => {
    //     console.log(scrollY);
    // }, [scrollY]);

    const blackBG =  'bg-black w-full h-full absolute top-0 left-0 opacity-80  transition-opacity';
    const blackOpacity =  'bg-black w-full h-full absolute top-0 left-0 opacity-20  transition-opacity';

    const fontGray = 'text-xs leading-6 whitespace-pre-line text-zinc-500 h-10 items-center'
    const fontTarget = 'text-base font-bold leading-6 whitespace-pre-line h-10 flex'



    return (
        
        <div className='w-full h-auto bg-black px-48 flex justify-between absolute '  >

            <div className='w-2/5 h-auto  flex flex-col overflow-hidden'>
                <div className='w-full h-96 relative'>
                    <img src={ImageUrl1[0]} alt="" className='w-full h-full object-cover '/>
                    { scrollY < 2100 ?  <div className={blackOpacity}/> : <div className={blackBG}/>  }
                </div>
                <div className='bg-black w-2/5 h-12'/>
                
                <div className='w-full h-96 relative overflow-hidden '>
                    <img src={ImageUrl1[1]} alt="" className='w-full h-full object-cover '/> 
                        { scrollY >= 2100 && scrollY < 2400 ? <div className={blackOpacity}/> : <div className={blackBG}/>  }
                </div>
                <div className='bg-black w-2/5 h-12'/>

                <div className='w-full h-96 relative overflow-hidden'>
                    <img src={ImageUrl1[2]} alt="" className='w-full h-full object-cover'/> 
                    { scrollY >= 2400 && scrollY < 2800 ?  <div className={blackOpacity}/> : <div className={blackBG}/>  }
                </div>
                <div className='bg-black w-2/5 h-12'/>

                <div className='w-full h-96 relative overflow-hidden'>
                    <img src={ImageUrl1[3]} alt="" className='w-full h-full object-cover'/> 
                    { scrollY >= 2800 ? <div className={blackOpacity}/> : <div className={blackBG}/>  }
                </div>
            </div>
            <div className='w-1/3 h-96  flex flex-col sticky top-1/3 overflow-x-hidden text-white'>
                <div className='text-sm'> Exhibitions</div>
                <div className='text-3xl font-bold py-4'>What I did </div>
                <div className='text-xs leading-6 whitespace-pre-line'> 
                해외 전시회 대행사에 근무하며 <br/>
                해외 전시회 출장 및 현장 운영과 제안서 기획/작성,<br/>
                입찰 제안 발표를 수행하였습니다. </div>
                <div className='text-2xl font-bold py-4 mt-8'> 주요 프로젝트 </div>
                {/* <div className={} >  CES 2022</div> */}
                {scrollY < 2100 ? (<div className={fontTarget}> → CES 2022</div>) : (<div className={fontGray}>CES 2022</div>)}
                {scrollY >= 2100 && scrollY < 2400 ? (<div className={fontTarget}> → FIME 2022</div>) : (<div className={fontGray}>FIME 2022</div>)}
                {scrollY >= 2400 && scrollY < 2800 ? (<div className={fontTarget}> → Growtech 2022</div>) : (<div className={fontGray}>Growtech 2022</div>)}
                {scrollY >= 2800 ? (<div className={fontTarget}> → ASD Market Week 2022</div>) : (<div className={fontGray}>ASD Market Week 2022</div>)}



            </div>

            
        </div>

    );
};

export default Whatidid;