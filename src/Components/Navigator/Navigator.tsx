import { useNavigate } from 'react-router-dom';
// import {BiWorld} from 'react-icons/bi'
import useStore from '../../store';
import React, { useEffect, useState } from 'react';

const Navigator = () => {
    const { currentPage, setCurrentPage, naviModal, setNaviModal, XBtn, setXBtn, contactModal, setContactModal} = useStore();
    const navigator = useNavigate();

    const [scrollY, setScrollY] = useState<number>(0);
    
    const [crossed800, setCrossed800] = useState<boolean>(false); // 추가된 상태 변수

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // scrollY > 800이고 crossed800이 false일 때 (즉, 800을 처음 넘었을 때)
            if (window.scrollY > 800 && !crossed800) {
                setNaviModal(false);
                setXBtn(false);
                setCrossed800(true);  // 상태 업데이트
            }

            // scrollY < 800이고 crossed800이 true일 때 (즉, 800 미만으로 내려왔을 때)
            else if (window.scrollY < 800 && crossed800) {
                setNaviModal(true);
                setXBtn(false);
                setCrossed800(false);  // 상태 업데이트
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [crossed800]);  // crossed800을 dependency로 추가

    const handleClick = (route :string, page:string) => {
        navigator(route);
        setCurrentPage(page);
    };




    const navItems = [
        { route: '/', page: 'home', label: 'home' },
        { route: '/develope', page: 'dev', label: 'work.Dev' },
        { route: '/exhibitions', page: 'exhibit', label: 'work.Exhibit' },
        // { route: '/about', page: 'about', label: 'About' },
    ];

    const handleXBtn = () => {

        if(XBtn && scrollY < 800){
            setNaviModal(true)
            setXBtn(false)
            setContactModal(false)
        }  else if(XBtn && scrollY > 800){
            setNaviModal(false)
            setXBtn(false)
            setContactModal(false)
        } else if(!XBtn && scrollY > 800){
            setNaviModal(true)
            setXBtn(true)
            setContactModal(false)
        } 
    }

    const handleContact = () => {
        if(!contactModal){
            setContactModal(true)
            setXBtn(true)
        } else{
            setContactModal(false)
            setXBtn(false)
        }
    }

    
    return (
        <React.Fragment>
            
            <div className='w-full h-16 fixed top-0 right-0 overflow-x-hidden box-border flex items-center overflow-hidden z-50 '
                >


                {naviModal && <>
                <div className=' w-full h-full flex justify-between transition-width ease-in-out duration-500'
                style={scrollY > 800  ? {backgroundColor:'white'}:{}}
                >
                    <div className="w-full justify-center items-center flex "></div>
                    <div className='relative w-1/3 flex  max-[768px]:w-full text-xs text-center  items-center justify-end font-bold text-[#8c8c8c] '>
                        {navItems.map(({ route, page, label }) => (
                            <div 
                                key={route}
                                className={`w-20 py-4mr-1 cursor-pointer ${currentPage === page && !contactModal? 'text-[#090909]' : ''}`}
                                onClick={() => handleClick(route, page)}
                            >
                                {label}
                            </div>
                        ))}
                        <div className='w-20 py-4   ' 
                        style={contactModal ? {color:'#090909'} : {color:'#8c8c8c'}}
                        onClick={handleContact}
                        >contact</div>
                        <div className='w-20 h-full'/>
                    </div>
                </div></>}


                    <div className='bg-black w-12 h-12 border-1 border-zinc-600 mr-8 rounded-full flex justify-center items-center 
                                    cursor-pointer fixed top-2 right-0 transition-all ease-in-out duration-500' 
                        onClick={handleXBtn}
                        style={crossed800 || contactModal ? {opacity:'100'} : {opacity:'0'} }>
                            
                        <div className="relative w-5 h-3 flex flex-col justify-between items-stretch ">
                            <div className="transition-all ease-in-out duration-500 w-5 h-1 border-t-1 " 
                                style={{
                                    ...(XBtn ?  { transform: 'translate(-0%, 100%) rotate(-45deg)'} : {}),
                                    
                                }}
                            ></div>
                            <div className="transition-all ease-in-out duration-500 w-5 h-1 border-b-1  " 
                                style={{
                                    ...(XBtn ? { transform: 'translate(-0%, -155%) rotate(45deg)', } : {}),
                                    
                                }}
                            ></div>
                        </div>
                    </div> 
            </div>
            {/* <div className='fixed  top-20 left-20'>
                {`currentPage : ${currentPage}, 
                naviModal : ${naviModal}, XBtn: ${XBtn}, contactModal :${contactModal}`}
            </div> */}
        </React.Fragment>
    );
};

export default Navigator;


