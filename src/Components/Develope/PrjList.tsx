import React, { useState } from 'react';
import DevPrjData from '../../assets/Data/DevPrjData';
import useStore from '../../store';

const PrjList = () => {
    const {  setDevOpen, setDevPage } = useStore();


    
    const latestArray = [...DevPrjData].reverse().map(item => item);
    const [hoverState, setHoverState] = useState(new Array(latestArray.length).fill(false));

    // onMouseDown 이벤트 핸들러
    const handleMouseOver = (index :number) => {
        const updatedHoverState = hoverState.map((_, idx) => (idx === index ? true : false));
        setHoverState(updatedHoverState);
    };
    

    // onMouseLeave 이벤트 핸들러
    const handleMouseLeave = () => {
        // 모든 컴포넌트의 hover 상태를 초기화하려면
        const updatedHoverState = hoverState.map(() => false);
        setHoverState(updatedHoverState);
    };


    return (
        <React.Fragment>
            <div className=' w-full h-10 px-10 text-right text-sm'>클릭 하시면 자세히 보실수 있습니다. </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-screen h-auto px-10'>


        {latestArray.map((item, index) => (
            <div
            key={index}
            className={`w-full h-96 flex items-end relative text-black cursor-pointer`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {setDevOpen(true); setDevPage(item.title);}}
            >
            <img src={item.imgUrl} alt="photo" className='absolute top-0 w-full h-full object-cover ' />
            <div className={`w-full h-full absolute top-0 ${hoverState[index] ? item.color.bg  : ''} transition duration-500`}/>
            <div className='m-10 z-0 text-black absolute bottom-0'>
                <div className={`text-xs h-6 ${hoverState[index] ? item.color.text : ''}`}>
                {item.date}
                </div>
                <div className={`text-4xl font-bold ${hoverState[index] ? item.color.title : ''}`}>
                {item.title}
                </div>
                {hoverState[index] && (
                <div className={`text-lg/10 font-bold ${item.color.text} transition duration-500`}>
                    {item.desc}
                </div>
                )}
            </div>
            
            </div>
        ))}

            <div
            className={`w-full h-96 flex items-end relative bg-zinc-100 text-white`}
            >
                <div className={`w-full h-full absolute top-0 transition duration-500`}/>
                    <div className='m-10 z-0 text-white absolute bottom-0'>
                        <div className={`text-xs h-2 w-10 bg-zinc-300 rounded-full ml-1`}>  </div>
                        <div className={`text-4xl font-bold h-4 w-20 bg-zinc-300 rounded-full mt-4`}>  </div>
                    </div>  
                </div>
        </div>
        

        </React.Fragment>

    );
};

export default PrjList;
