import React , { useState, useEffect }from 'react';

const Hello = () => {
    const [ scrollY ] = useState();

    
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <div className='w-screen h-screen flex items-center '>
            <div className=' h-11/12 bg-[#FF5851]  w-1/2 relative'>
              <div className='absolute top-1/4 -right-1/4 text-9xl font-black'>
                  안녕<br/>
                  하세요.
              </div>

            </div>
            <div className='w-1/2 h-11/12 bg-white right-0'>

            </div>
        </div>
    );
};

export default Hello;