import { useState, useEffect } from 'react';

const Hello = () => {
    // 상태를 저장할 useState를 정의합니다.
    const [scrollY, setScrollY] = useState<number>(0);
    
    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        // 스크롤 이벤트에 handleScroll 함수를 바인딩합니다.
        window.addEventListener('scroll', handleScroll);
        
        // 컴포넌트가 언마운트되었을 때 이벤트 리스너를 제거합니다.
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='w-full h-auto relative'>
                <div className='sticky top-0 h-full w-full overflow-hidden'>
                    <div className='bg-white w-full h-screen justify-start items-center flex'>
                        <div 
                            className='box-border h-11/12 relative bg-[#FF5851] transition-width duration-700 ease-in-out' 
                            style={scrollY < 50 ? { width: '50%' } : { width: '95%' }}
                        >
                            <div className='absolute top-1/4 -right-48 text-9xl font-black text-[#242424]'>
                                안녕<br/>
                                하세요<span className='text-[#FF5851]'>.</span>
                            </div>
                        </div>
                        <div 
                            className='bg-zinc-50 h-11/12 transition-width duration-700 ease-in-out' 
                            style={scrollY < 50 ? { width: '50%' } : { width: '5%' }}
                        ></div>
                    </div>
                </div>
                <div className='h-screen '/>
            </div>
        </div>
    );  
};

export default Hello;
