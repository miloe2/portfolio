import { useState } from 'react';
import DevPrjData from '../../assets/Data/DevPrjData';
import useStore from '../../store';

const PrjList = () => {
    const {  setDevOpen, setDevPage } = useStore();


    
    const latestArray = [...DevPrjData].reverse().map(item => item);
    const [hoverState, setHoverState] = useState(new Array(latestArray.length).fill(false));

    // onMouseDown 이벤트 핸들러
    const handleMouseOver = (index :number) => {
        const updatedHoverState = hoverState.map((item, idx) => (idx === index ? true : false));
        setHoverState(updatedHoverState);
    };

    // onMouseLeave 이벤트 핸들러
    const handleMouseLeave = () => {
        // 모든 컴포넌트의 hover 상태를 초기화하려면
        const updatedHoverState = hoverState.map(() => false);
        setHoverState(updatedHoverState);
    };
    // console.log(devPage);
    // console.log(devOpen);

    return (
        <div className='w-screen h-auto px-10 flex flex-wrap '>


        {latestArray.map((item, index) => (
            <div
            key={index}
            className={`w-1/3 h-96 flex items-end relative text-white cursor-pointer`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => {setDevOpen(true); setDevPage(item.title);}}
            >
            <img src={item.imgUrl} alt="photo" className='absolute top-0 w-full h-full object-cover ' />
            <div className={`w-full h-full absolute top-0 ${hoverState[index] ? item.color.bg  : ''} transition duration-500`}/>
            <div className='m-10 z-0 text-white absolute bottom-0'>
                <div className={`text-xs h-6 ${hoverState[index] ? item.color.text : ''}`}>
                {item.date}
                </div>
                <div className={`text-4xl font-bold ${hoverState[index] ? item.color.title : ''}`}>
                {item.title}
                </div>
                {hoverState[index] && (
                <div className={`text-lg leading-10 font-bold ${item.color.text} transition duration-500`}>
                    {item.desc}
                </div>
                )}
            </div>
            
            </div>
        ))}

            <div
            className={`w-1/3 h-96 flex items-end relative bg-zinc-400 text-white`}
            >
                <div className={`w-full h-full absolute top-0 transition duration-500`}/>
                    <div className='m-10 z-0 text-white absolute bottom-0'>
                        <div className={`text-xs h-6`}> ... </div>
                        <div className={`text-4xl font-bold `}> ... </div>
                    </div>
                </div>


        </div>
        



    );
};

export default PrjList;
