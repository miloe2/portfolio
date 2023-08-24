import React , { useState, useEffect }from 'react';

const Hello = () => {
    const [ scrollY , setScrollY] = useState<number>(0);
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollY  = window.scrollY;
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div >
            <div className='w-full h-auto relative  '>
                <div className='sticky top-0 h-full w-full overflow-hidden '>
                    <div 
                        className='box-border h-screen relative bg-[#FF5851] transition-width duration-700 ease-in-out' 
                        style={scrollY < 100 ? { width: '50%' } : { width: '100%' }}
                    >
                        <div className='absolute top-1/4 -right-48 text-9xl font-black text-[#1C1B20]'>
                            안녕<br/>
                            하세요<span className='text-[#FF5851]'>.</span>
                        </div>
                    </div>
                </div>
    
                {/* 이하의 내용은 스크롤 테스트를 위한 예시입니다 */}
                <div className='h-screen '>
                </div>
            </div>
        </div>
    );
    
};

export default Hello;