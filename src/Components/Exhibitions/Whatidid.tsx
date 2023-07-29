import React, {useEffect, useState} from 'react';
import { ImageUrl1 } from './ImgUrl';

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

    const BlackBG =  'bg-black w-full h-full absolute top-0 left-0 opacity-80';


    return (
        
        <div className='w-full h-auto bg-black px-48 flex justify-between absolute '  >

            <div className='w-2/5 h-auto  flex flex-col overflow-hidden'>
                <div className='w-full h-96 relative'>
                    <img src={ImageUrl1[0]} alt="" className='w-full h-full object-cover'/>
                    { scrollY < 2200 ? null : <div className={BlackBG}/>  }
                </div>
                
                <div className='w-full h-96 relative overflow-hidden '>
                    <img src={ImageUrl1[1]} alt="" className='w-full h-full object-cover'/> 
                    { scrollY > 2000 && scrollY < 2500 ? null : <div className={BlackBG}/>  }
                </div>

                <div className='w-full h-96 relative overflow-hidden'>
                    <img src={ImageUrl1[2]} alt="" className='w-full h-full object-cover'/> 
                    { scrollY > 2300 ? null : <div className={BlackBG}/>  }
                </div>
            </div>
            <div className='w-2/5 h-96 bg-slate-400 flex flex-col sticky top-1/3 overflow-x-hidden'>

            </div>

            
        </div>

    );
};

export default Whatidid;