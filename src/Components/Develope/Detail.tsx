import { useRef, useEffect } from "react";
import useStore from "../../store";
import DetailDDD from "./DetailDDD";
import DetailPortfolio from "./DetailPortfolio";
import DetailFindway from "./DetailFindway";
import Stack from "./Stack";


const Detail = () => {
    const {devPage, devOpen, setDevOpen } = useStore();

    const componentRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (devOpen && componentRef.current) {
        window.scrollTo({
          top: componentRef.current.offsetTop,
          behavior: 'smooth',
        });
      }
    }, [devOpen]);

    setTimeout(() => {
        setDevOpen(false);
    }, 400);

    // console.log(devPage)
    // console.log(devOpen)

    return (
        <div className='w-screen h-auto bg-white '>
            <div>
                {/* {devOpen && ( */}
                    <div ref={componentRef}>
                        <Stack/>
                        {devPage === ':DDD' && <DetailDDD/>}
                        {devPage === 'portfolio' && <DetailPortfolio/>}
                        {devPage === '찾기' && <DetailFindway/>}
                    </div>
                {/* )} */}
            </div>
        </div>
    );
};

export default Detail;