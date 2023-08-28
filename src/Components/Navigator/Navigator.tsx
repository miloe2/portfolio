import { useNavigate } from 'react-router-dom';

const Navigator = () => {
    const navigator = useNavigate();
    return (

        <div className='w-full h-16 fixed top-0 overflow-x-hidden box-border flex justify-between overflow-hidden z-50'>
            <div className="w-24 ">icon</div>
            <div className='relative  w-1/3 flex text-xs text-center items-center font-bold text-zinc-500 cursor-pointer'>
                <div className='w-20 py-4 mx-2 ' onClick={()=>(navigator('/'))}>home</div>
                <div className='w-20 py-4 mx-2 ' onClick={()=>(navigator('/develope'))}>work.Dev</div>
                <div className='w-20 py-4 mx-2 ' onClick={()=>(navigator('/exhibitions'))} >work.Exhibit</div>
                <div className='w-20 py-4 mx-2 '>about</div>
            </div>
        </div>
    );
};

export default Navigator;