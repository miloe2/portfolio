import { useNavigate } from "react-router-dom";
// import {BiWorld} from 'react-icons/bi'
import useStore from "../../store";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../../pages/Contact";

// xbtn 으로 네비 on/off
// route 에 따른 폰트 색상
// device 100vh 이상이면, 색상 투명 => 하얀색 변경
// contact 클릭 => 모달 창
interface NaviStatusProps {
  currentPage: string | null;
  scrolledInnerHeight: boolean;
  xBtn: boolean;
}

const Navigator = () => {
  const { contactModal, setContactModal } = useStore();
  const navigator = useNavigate();
  const { pathname } = useLocation();

  /* 리팩토링 시작  */
  /* 리팩토링 시작  */
  /* 리팩토링 시작  */
  /* 리팩토링 시작  */

  const [naviStatus, setNaviStatus] = useState({
    currentPage: "",
    scrolledInnerHeight: false,
    xBtn: false,
  });

  // const [contactModal, setContactModal] = useState({
  //   isOpen: false,
  // });

  const scrollYRef = useRef(0); // ✅ 최신 scrollY 값을 저장
  const INNER_HEIGHT = window.innerHeight; // ✅ 초기 브라우저 높이

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollYRef.current = currentScrollY; // ✅ 최신 값 저장

      setNaviStatus((prev) => ({
        ...prev,
        scrolledInnerHeight: currentScrollY > INNER_HEIGHT, // ✅ 기준값 초과 여부 업데이트
      }));
    };
    console.log(naviStatus);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setNaviStatus((prev) => ({
      ...prev,
      currentPage: pathname,
    }));
  }, [pathname]);

  const handleContact = () => {
    setContactModal(!contactModal);
  };

  const handleMenuButton = (route: string) => {
    setNaviStatus((prev) => ({
      ...prev,
      currentPage: route,
    }));

    if (route === "/contact") {
      handleContact();
    } else {
      navigator(route);
    }
  };

  const navItems = [
    { route: "/", page: "home", label: "home" },
    { route: "/develope", page: "dev", label: "work.Dev" },
    { route: "/exhibitions", page: "exhibit", label: "work.Exhibit" },
    { route: "/contact", page: "contact", label: "contact" },
  ];

  // const handleXBtn = () => {

  //   if (XBtn && scrollY < 800) {
  //     setNaviModal(true)
  //     setXBtn(false)
  //     setContactModal(false)
  //   } else if (XBtn && scrollY > 800) {
  //     setNaviModal(false)
  //     setXBtn(false)
  //     setContactModal(false)
  //   } else if (!XBtn && scrollY > 800) {
  //     setNaviModal(true)
  //     setXBtn(true)
  //     setContactModal(false)
  //   }
  // }

  // const handleContact = () => {
  //   if (!contactModal) {
  //     setContactModal(true)
  //     setXBtn(true)
  //   } else {
  //     setContactModal(false)
  //     setXBtn(false)
  //   }
  // }

  // // scrollY > 800이고 crossed800이 false일 때 (즉, 800을 처음 넘었을 때)
  // if (window.scrollY > 800 && !crossed800) {
  //   setNaviModal(true);
  //   setXBtn(true);
  //   setCrossed800(true);  // 상태 업데이트
  // }

  // // scrollY < 800이고 crossed800이 true일 때 (즉, 800 미만으로 내려왔을 때)
  // else if (window.scrollY < 800 && crossed800) {
  //   setNaviModal(true);
  //   setXBtn(false);
  //   setCrossed800(false);  // 상태 업데이트
  // }
  return (
    <React.Fragment>
      <div
        className="w-full h-16 fixed inset-0 flex items-center z-50 transition-all duration-300"
        style={{ backgroundColor: naviStatus.scrolledInnerHeight ? "white" : "transparent" }}
      >
        <ul className="flex text-sm font-bold ml-auto cursor-pointer">
          {navItems.map((menu) => (
            <li
              key={menu.route}
              onClick={() => handleMenuButton(menu.route)}
              className={`
                ${naviStatus.currentPage === menu.route ? "text-[#090909]" : "text-[#8c8c8c]"}
                p-2`}
            >
              {menu.label}
            </li>
          ))}
        </ul>

        {/* <div className='bg-black sm:w-12 sm:h-12 h-8 w-8 border-1 border-zinc-600 
        mr-8 rounded-full flex justify-center items-center 
        cursor-pointer fixed sm:top-2 top-4 sm:right-0 -right-7 transition-all 
        ease-in-out duration-500'
          onClick={handleXBtn}
          >

          <div className="relative w-5 h-3 flex flex-col justify-between items-stretch ">
            <div className="transition-all ease-in-out duration-500 w-5 h-1 border-t-1 "
              style={{
                ...(XBtn ? { transform: 'translate(-0%, 100%) rotate(-45deg)' } : {}),

              }}
            ></div>
            <div className="transition-all ease-in-out duration-500 w-5 h-1 border-b-1  "
              style={{
                ...(XBtn ? { transform: 'translate(-0%, -155%) rotate(45deg)', } : {}),

              }}
            ></div>
          </div>
        </div> */}
      </div>
      {<Contact />}
    </React.Fragment>
  );
};

export default Navigator;
