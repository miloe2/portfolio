import { useRef, useEffect } from "react";
import useStore from "../../store";
import DetailDDD from "./DetailDDD";
import DetailPortfolio from "./DetailPortfolio";
import DetailFindway from "./DetailFindway";
import Stack from "./Stack";


const Detail = () => {
    const {devPage, devOpen, setDevOpen } = useStore();

    const componentRef = useRef<HTMLDivElement>(null);
  

    const scrollToComponent = () => {
        if (componentRef.current) {
          window.scrollTo({
            top: componentRef.current.offsetTop,
            behavior: 'smooth',
          });
        }
      };
  
      useEffect(() => {
        if (devOpen) {
          scrollToComponent();
        }
      }, [devOpen]);
  
      setTimeout(() => {
          setDevOpen(false);
      }, 1400);

    return (
        <div className='w-screen h-auto bg-white  '>
                    <div ref={componentRef}>
                        <Stack/>
                        {devPage === ':DDD' && <DetailDDD/>}
                        {devPage === 'portfolio' && <DetailPortfolio/>}
                        {devPage === '찾기' && <DetailFindway/>}
                    </div>
        </div>
    );
};

export default Detail;