import { useNavigate } from 'react-router-dom';
// import {BiWorld} from 'react-icons/bi'
import useStore from '../../store';
import React, { useEffect, useState } from 'react';

const Navigator = () => {
  const { currentPage, setCurrentPage, naviModal, setNaviModal, XBtn, setXBtn, contactModal, setContactModal } = useStore();
  const navigator = useNavigate();

  const [scrollY, setScrollY] = useState<number>(0);

  const [crossed800, setCrossed800] = useState<boolean>(false); // 추가된 상태 변수

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // scrollY > 800이고 crossed800이 false일 때 (즉, 800을 처음 넘었을 때)
      if (window.scrollY > 800 && !crossed800) {
        setNaviModal(true);
        setXBtn(true);
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

  const handleClick = (route: string, page: string) => {
    navigator(route);
    console.log(route, page)
    setCurrentPage(page);
  };




  const navItems = [
    { route: '/', page: 'home', label: 'home' },
    { route: '/develope', page: 'dev', label: 'work.Dev' },
    { route: '/exhibitions', page: 'exhibit', label: 'work.Exhibit' },
    { route: 'contact', page: 'contact', label: 'contact' },
    // { route: '/about', page: 'about', label: 'About' },
  ];

  // 스크롤이 800 이상이면 바뀜 
  const handleXBtn = () => {
    if (XBtn && scrollY < 800) {
      setNaviModal(true)
      setXBtn(false)
      setContactModal(false)
    } else if (XBtn && scrollY > 800) {
      setNaviModal(false)
      setXBtn(false)
      setContactModal(false)
    } else if (!XBtn && scrollY > 800) {
      setNaviModal(true)
      setXBtn(true)
      setContactModal(false)
    }
  }

  const handleContact = () => {
    if (!contactModal) {
      setContactModal(true)
      setXBtn(true)
    } else {
      setContactModal(false)
      setXBtn(false)
    }
  }


  return (
    <React.Fragment>
      <div className='w-full h-16 fixed inset-0 overflow-x-hidden box-border flex items-center z-50 bg-blue-500 justify-end '
      >
        <ul className='flex space-x-4 bg-yellow-500 mr-6'>
          {navItems.map(({ route, page, label }) => (
            <li
              key={route}
              className={`${currentPage === page && !contactModal ? 'text-[#090909]' : ''}`}
              onClick={() => handleClick(route, page)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigator;


