import { useState } from 'react';
import DevPrjData from '../../assets/Data/DevPrjData';

const PrjList = () => {
    
    const latestArray = [...DevPrjData].reverse().map(item => item);
    const [hoverState, setHoverState] = useState(new Array(latestArray.length).fill(false));

    // onMouseDown 이벤트 핸들러
    const handleMouseDown = (index :number) => {
        const updatedHoverState = hoverState.map((item, idx) => (idx === index ? true : false));
        setHoverState(updatedHoverState);
    };

    // onMouseLeave 이벤트 핸들러
    const handleMouseLeave = () => {
        // 모든 컴포넌트의 hover 상태를 초기화하려면
        const updatedHoverState = hoverState.map(() => false);
        setHoverState(updatedHoverState);
    };

    return (
        <div className='w-screen h-auto  px-10 flex flex-wrap'>
            {latestArray.map((item, index) => (
                <div key={index} className={`w-1/3 h-96 flex items-end relative text-white ${item.color.bg}`}
                onMouseOver={() => handleMouseDown(index)}
                onMouseLeave={() => handleMouseLeave()}
                     >
                        
                    <img src={item.imgUrl} alt="photo" className='absolute top-0 w-full h-full object-cover 
                    hover:opacity-0 transition duration-500'/>
                    <div className=' m-10 z-0 '>
                    {item.color.text}
                    {item.color.title}
                        <div className={` text-xs h-6  `}>
                            {/* {item.date} */}
                        </div>

                        <div className={hoverState[index] ? 'text-5xl font-bold' : `text-5xl font-bold ${item.color.title}`}>{item.title}</div>
                    </div>
                    
                </div>
                
            ))}

        </div>
    );
};

export default PrjList;

