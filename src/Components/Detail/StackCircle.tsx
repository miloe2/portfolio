import java from '../../assets/Images/java.jpg';
import javascript from '../../assets/Images/javascript.png';
import aws from '../../assets/Images/aws.jpg';
import figma from '../../assets/Images/Figma-logo.svg';
import git from '../../assets/Images/GitHub_Logo.svg';
import mariadb from '../../assets/Images/mariadb.svg';
import mysql from '../../assets/Images/Mysql2.webp';

import reacticon from '../../assets/Images/React-logo.svg';
import typescript from '../../assets/Images/Typescript_logo_2020.svg';
import notion from '../../assets/Images/notion.svg';
import springboot from '../../assets/Images/spring-boot.png';
import tailwindcss from '../../assets/Images/tailwindcss.svg';

import styled from '../../assets/Images/styled.png';

interface StackCircleType {
    [key: string]: () => JSX.Element;
  }

const StackCircle :StackCircleType = {
    java : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={java} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Java </div>
            </>

        )
    },
    javascript : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={javascript} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Javascript </div>
            </>
        )
    },
    react : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={reacticon} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> React </div>
            </>
        )
    },
    mariadb : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={mariadb} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> MariaDB </div>
            </>
        )
    },
    jpa : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={springboot} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600 whitespace-pre-line text-center"> 
            {`Springboot 
            with JPA` }</div>
            </>
        )
    },
    jsp : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={springboot} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600 whitespace-pre-line text-center"> 
            {`Springboot 
            with JSP` }</div>
            </>
        )
    },
    git : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={git} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Git </div>
            </>
        )
    },
    notion : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={notion} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> notion </div>
            </>
        )
    },
    figma : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={figma} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Figma </div>
            </>
        )
    },
    aws : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={aws} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> AWS </div>
            </>
        )
    },
    mysql : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={mysql} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> MySQL </div>
            </>
        )
    },
    tailwindcss : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={tailwindcss} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Tailwind CSS </div>
            </>
        )
    },
    typescript : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={typescript} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Typescript </div>
            </>
        )
    },
    styled : () => {
        return (
            <>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={styled} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600 whitespace-pre-line text-center"> 
            {`Styled
            Components` }</div>
            </>
        )
    },
}

export default StackCircle;