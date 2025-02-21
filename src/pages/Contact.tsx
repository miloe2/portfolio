// @ts-nocheck
import React, { useEffect, useState } from "react";
import useStore from "../store";
import { contactInfo } from "../assets/data/careerData";
import { AiFillGithub } from "react-icons/ai";
import { RiNotionFill } from "react-icons/ri";

const Contact = ({ contactIsOpen }) => {
  
  useEffect(() => {
    const preventScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    if (contactIsOpen) {
      document.addEventListener('wheel', preventScroll, { passive: false });
    } else {
      document.removeEventListener('wheel', preventScroll);
    }

    return () => {
      document.removeEventListener('wheel', preventScroll);
    };
  }, [contactIsOpen]);

  return (
    <React.Fragment>
      <section className="overflow-scroll">
        <div
          className={`
            fixed inset-0 bg-black opacity-80 transition-all duration-300 
            ${contactIsOpen ? "block" : "hidden"}
          `}
        />
        <div
          className={`
            fixed top-0 right-0 bg-white w-full sm:w-1/2 xl:w-1/3 h-full flex items-center transition-transform duration-500 
            ${contactIsOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className='w-full flex flex-col whitespace-nowrap pl-16 bg-red-00'>
            <p className='font-serif text-xl/8 font-black'>
              " I hope to <br />
              have a good <br />
              relationship with you."
            </p>
            <div className='w-10 h-1 border-b-2 border-zinc-600 my-5'/>
            <div>
              {
                contactInfo.map((info, index) => (
                  <div key={index} className='flex items-center'>
                    <i>{info.icon}</i>
                    <p className='ml-2 text-sm/9'>{info.label}</p>
                  </div>
                ))
              }
            </div>
            <div className='flex flex-row w-full mt-4 text-4xl space-x-2'>
              <a href="https://github.com/miloe2" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a href="https://www.notion.so/fc901c1fe0154841951b4113c63404ea" target="_blank" rel="noopener noreferrer">
                <RiNotionFill />
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
