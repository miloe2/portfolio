import { useEffect, useState } from 'react';
import { ImageUrl1, ImageUrl2, ImageUrl3} from '../../assets/Data/ExhibitData';
import BGItemsBG from '../../assets/Images/photos/BGItemsBG.jpg'


const BGItems = () => {
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

    const BlackBG =  'bg-black w-full h-full absolute top-0 left-0 opacity-50 rounded-xl';
    const ImageStyle = 'w-full h-full object-cover rounded-xl drop-shadow-5px';

    return (
        <div className='overflow-hidden '>
            <div className="flex w-screen h-screen relative overflow-hidden box-border">
                <div className='w-full rotate-20 absolute h-full max-[768px]:rotate-0 max-[768px]:top-0 max-[768px]:left-1/2'>
                {/* 1st */}
                <div className=' flex h-1/4 w-auto absolute'  style={{ right: `calc(-50% - ${scrollY *0.15}%)`,  }}>
                    { ImageUrl1.map((photo, index) => (
                    <div className='w-60 m-2 flex-shrink-0 relative' key={index}>
                        <img className={ImageStyle}  src={photo} alt="" />
                        <div className={BlackBG}/>
                    </div>
                    ))}
                </div>
                {/* 2nd */}
                <div className=' flex h-1/4  w-auto absolute ' style={{ right: `calc(-20% + ${scrollY * 0.10}%)`, top: `calc(24% - ${scrollY * 0.00}%)` }}>
                    { ImageUrl2.map((photo, index) => (
                    <div className='w-60 m-2 flex-shrink-0 relative' key={index}>
                        <img className={ImageStyle}  src={photo} alt="" />
                        {index===3 ? null : <div className={BlackBG}/> }
                    </div>
                    ))}
                </div>
                {/* 3st */}
                <div className=' flex h-1/4 w-auto absolute -right-24 '  style={{ right: `calc(-110% - ${scrollY * 0.07}%)`,  top: `calc(49% + ${scrollY * 0.00}%)`}}>
                    { ImageUrl3.map((photo, index) => (
                    <div className='w-60 m-2 flex-shrink-0 relative' key={index}>
                        <img className={ImageStyle}  src={photo} alt="" />
                        <div className={BlackBG}/>
                    </div>
                    ))}
                </div>
                {/* 4st */}
                <div className=' flex h-1/4  w-auto absolute  ' style={{ right:  `calc(-30% + ${scrollY * 0.10}%)`,  top: `calc(74% + ${scrollY * 0.00}%)`}}>
                {/* <div className=' flex h-44 w-auto absolute  ' style={{ right: `calc(-74rem + ${scrollY * 0.05}rem)`, top: `calc(52.5rem - ${scrollY * 0.035}rem)`}}> */}
                    { ImageUrl1.map((photo, index) => (
                    <div className='w-60 m-2 flex-shrink-0 relative' key={index}>
                        <img className={ImageStyle}  src={photo} alt="" />
                        <div className={BlackBG}/>
                    </div>
                    ))}
                </div>
                </div>

                

                <img src={BGItemsBG} alt="" className='object-cover w-full overflow-hidden'/> 

                <div className='bg-gradient-to-t from-black to-transparent w-screen h-6 absolute bottom-0 '/>
            </div>
      </div>
    );
  };
  
  export default BGItems;