import { useState, useEffect } from 'react';

const Hello = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    
    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='w-full h-auto relative'>
                <div className='sticky top-0 h-full w-full overflow-hidden'>
                    <div className='bg-white w-full h-screen justify-start items-center flex pl-10'>

                        <div 
                            className='box-border h-11/12 relative bg-[#FF5851] transition-width duration-700 ease-in-out' 
                            style={scrollY < 50 ? { width: '50%' } : { width: '95%' }}
                        >
                            <div 
                                className={`absolute top-64 left-1/4 text-white transition-all duration-700 
                                ${scrollY > 0 && scrollY < 1000 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                <div className='text-5xl leading-normal font-bold  whitespace-pre-line '> 
                                    내안에 빛이 있으면 <br/>
                                    스스로 빛나는 법이다.
                                </div>
                            </div>

                            <div className='absolute top-1/4 -right-48 text-9xl font-black text-[#242424]'>
                                HE<br/>
                                LLO<span className='text-[#FF5851]'>.</span>
                            </div>
                        </div>
                        <div 
                            className='bg-zinc-50 h-11/12 transition-width duration-700 ease-in-out' 
                            style={scrollY < 50 ? { width: '50%' } : { width: '5%' }}
                        ></div>
                    </div>
                </div>
                <div className='h-96 '/>

            </div>
        </div>
    );  
};

export default Hello;
