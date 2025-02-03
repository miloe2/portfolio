import { useState, useEffect, useRef } from 'react';
import pht1 from '../../assets/Images/photos/Int-pht1.webp';
import pht2 from '../../assets/Images/photos/Int-pht2.webp';

const Introduce = () => {

  const [isTextVisible, setTextVisible] = useState(false);
  const [isImageVisible, setImageVisible] = useState(false);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTextVisible(true);
          // 이미지 애니메이션을 위한 setTimeout
          setTimeout(() => {
            const imageObserver = new IntersectionObserver(
              (entries) => {
                if (entries[0].isIntersecting) {
                  setImageVisible(true);
                }
              },
              { threshold: 0.1 }
            );

            if (imageRef.current) {
              imageObserver.observe(imageRef.current);
            }
          }, 200); // 1초 후 이미지 애니메이션 시작 (시간 조절 가능)
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
      if (imageRef.current) {
        textObserver.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    //  bg-green-500 lg:bg-red-500 2xl:bg-blue-500 
    <div className='w-full flex flex-col max-w-sm lg:max-w-2xl 2xl:max-w-4xl mx-auto bg-green-00'>
      <div
        className={`
          ${!isTextVisible ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}
          w-full h-full mx-auto text-introduce-heading font-bold leading-snug text-[#242424] transition-all relative duration-0000  whitespace-nowrap `}
      >
        <div
          className='space-y-2'
          ref={textRef}>
          <p>Similique.</p>
          <p className='text-right'>Lorem um</p>
          <p className='text-center'>dolor sitip,</p>
          <p className='text-center pl-[10%]'>consectetr</p>
        </div>
      </div>
      <div 
        ref={imageRef}
        className={`
        ${!isImageVisible ? 'opacity-0 translate-y-10' : 'opacity-100  translate-y-0'}
        min-w-60 w-1/2 self-end sm:translate-x-10 -translate-y-[10%] bg-red-500 ring-4 opacity-20`} >
        <img
          src={pht1}
          alt=""
          className="w-full h-full object-cover transition-all duration-1000 object-bottom"
        />
      </div>
      <div 
        className={`
          ${!isImageVisible ? 'opacity-0 translate-y-0' : 'opacity-100 translate-y-0'}
        min-w-64 w-1/2  bg-blue-500`}>
        <img
          src={pht2}
          alt=""
          className="w-full h-full object-cover transition-all duration-1000 opacity-10"
        />
      </div>
    </div>
  );
};

export default Introduce;
