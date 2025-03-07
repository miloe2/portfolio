import { useNavigate } from "react-router-dom";
// import {BiWorld} from 'react-icons/bi'
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Contact from "../../pages/Contact";

const Navigator = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const scrollYRef = useRef(0); // scrollY 값을 저장
  const INNER_HEIGHT = window.innerHeight; // 초기 브라우저 높이
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const [naviStatus, setNaviStatus] = useState({
    currentPage: "",
    scrolledInnerHeight: false,
    xBtn: false,
    contactToggle: false,
  });

  const navItems = [
    { route: "/", page: "home", label: "home" },
    { route: "/develope", page: "dev", label: "work.Dev" },
    { route: "/exhibitions", page: "exhibit", label: "work.Exhibit" },
    { route: "/contact", page: "contact", label: "contact" },
  ];

  // contact modal hanlder
  const handleContact = () => {
    setContactIsOpen(!contactIsOpen);
    naviStatus.contactToggle = !naviStatus.contactToggle;
  };

  // navi menu button handler
  const handleMenuButton = (route: string) => {
    if (route === "/contact") {
      handleContact();
    } else {
      navigator(route);
      setNaviStatus((prev) => ({
        ...prev,
        currentPage: route,
      }));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollYRef.current = currentScrollY;

      setNaviStatus((prev) =>
        prev.scrolledInnerHeight !== currentScrollY > INNER_HEIGHT
          ? { ...prev, scrolledInnerHeight: currentScrollY > INNER_HEIGHT }
          : prev,
      );
    };
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

  return (
    <React.Fragment>
      <div
        className={`
          fixed w-full h-16 inset-0 flex items-center z-50 transition-all duration-300
          ${naviStatus.scrolledInnerHeight ? "glassmorphism" : "bg-transparent"}
          `}
      >
        <ul className="w-full flex text-sm font-bold cursor-pointer mr-2 sm:mr-16">
          {navItems.map((menu) => (
            <li
              key={menu.route}
              onClick={() => handleMenuButton(menu.route)}
              className={`
                ${naviStatus.currentPage === menu.route ? "text-[#090909]" : "text-[#8c8c8c]"}
                p-2  first:ml-auto`}
            >
              {menu.label}
            </li>
          ))}
        </ul>
      </div>
      {<Contact contactIsOpen={contactIsOpen} onClose={() => setContactIsOpen(false)} />}
    </React.Fragment>
  );
};

export default Navigator;
