import  {useEffect, useState} from 'react';
import { whatIdidPhotos } from '../../assets/Data/ExhibitData';

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

    const blackBG =  'bg-black w-full h-full absolute top-0 left-0 opacity-80  transition-opacity';
    const blackOpacity =  'bg-black w-full h-full absolute top-0 left-0 opacity-5  transition-opacity';

    const fontGray = 'text-sm/6 whitespace-pre-line text-zinc-500 h-10 items-center'
    const fontTarget = 'text-base font-semibold leading-6 whitespace-pre-line h-10 flex text-[#D81519]'



    return (
        
        <div className='w-full h-auto bg-black px-48 flex justify-between absolute max-[1024px]:px-10'  >

            <div className='w-2/5 h-auto  flex flex-col overflow-hidden'>
                <div className='w-full h-96 relative'>
                    <img src={whatIdidPhotos[0]} alt="" className='w-full h-full object-cover '/>
                    { scrollY >= 400 && scrollY < 1100 ?  <div className={blackOpacity}/> : <div className={blackBG}/>  }
                </div>
                <div className='bg-black w-2/5 h-12'/>
                
                <div className='w-full h-96 relative overflow-hidden '>
                    <img src={whatIdidPhotos[1]} alt="" className='w-full h-full object-cover '/> 
                        { scrollY >= 1100 && scrollY < 1500 ? <div className={blackOpacity}/> : <div className={blackBG}/>  }
                </div>
                <div className='bg-black w-2/5 h-12'/>

                <div className='w-full h-96 relative overflow-hidden'>
                    <img src={whatIdidPhotos[2]} alt="" className='w-full h-full object-cover'/> 
                    { scrollY >= 1500 && scrollY < 1900 ?  <div className={blackOpacity}/> : <div className={blackBG}/>  }
                </div>
                <div className='bg-black w-2/5 h-12'/>

                <div className='w-full h-96 relative overflow-hidden'>
                    <img src={whatIdidPhotos[3]} alt="" className='w-full h-full object-cover'/> 
                    { scrollY >= 1900 ? <div className={blackOpacity}/> : <div className={blackBG}/>  }
                </div>
            </div>
            <div className='w-1/3 h-96  flex flex-col sticky top-1/3 overflow-hidden text-white'>
                <div className='text-sm text-zinc-500'> Exhibitions</div>
                <div className='text-3xl font-bold py-4 text-[#D81519]'>What I did </div>
                <div className='text-xs/6 whitespace-pre-line'> 
                전시 대행사 해외컨벤션 팀에 근무하며 <br/>
                해외 전시회 기획 및 현장 운영과 <br/>
                제안서 기획/작성, 입찰 제안 발표를 
                수행하였습니다. </div>
                <div className='text-xl font-bold py-4 mt-8'> 업무 분야 </div>
                {scrollY >= 400 && scrollY < 1100 ? (<div className={fontTarget}> → 전시 운영 및 기획</div>) : (<div className={fontGray}>전시 운영 및 기획</div>)}
                {scrollY >= 1100 && scrollY < 1500 ? (<div className={fontTarget}> → 컨퍼런스 운영 및 기획</div>) : (<div className={fontGray}>컨퍼런스 운영 및 기획</div>)}
                {scrollY >= 1500 && scrollY < 1900 ? (<div className={fontTarget}> → 기업 커뮤니케이션</div>) : (<div className={fontGray}>기업 커뮤니케이션</div>)}
                {scrollY >= 1900 ? (<div className={fontTarget}> → 제안서 작성/발표</div>) : (<div className={fontGray}>제안서 작성/발표</div>)}



            </div>

            
        </div>

    );
};

export default Whatidid;