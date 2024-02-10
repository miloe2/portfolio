import React from 'react';
import java from '../../assets/Images/Icons/java.jpg';
import javascript from '../../assets/Images/Icons/javascript.png';
import aws from '../../assets/Images/Icons/aws.jpg';
import figma from '../../assets/Images/Icons/Figma-logo.svg';
import git from '../../assets/Images/Icons/GitHub_Logo.svg';
import mariadb from '../../assets/Images/Icons/mariadb.svg';
import mysql from '../../assets/Images/Icons/Mysql2.webp';

import reacticon from '../../assets/Images/Icons/React-logo.svg';
import typescript from '../../assets/Images/Icons/Typescript_logo_2020.svg';
import notion from '../../assets/Images/Icons/notion.svg';
import springboot from '../../assets/Images/Icons/spring-boot.png';
import tailwindcss from '../../assets/Images/Icons/tailwindcss.svg';
import styled from '../../assets/Images/Icons/styled.png';
import vue from '../../assets/Images/Icons/vue.svg'

interface StackCircleType {
    [key: string]: (key: string | number) => JSX.Element;
  }

const StackCircle :StackCircleType = {
    java : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={java} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Java </div>
            </React.Fragment>

        )
    },
    javascript : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={javascript} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Javascript </div>
            </React.Fragment>
        )
    },
    react : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={reacticon} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> React </div>
            </React.Fragment>
        )
    },
    mariadb : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={mariadb} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> MariaDB </div>
            </React.Fragment>
        )
    },
    jpa : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={springboot} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600 whitespace-pre-line text-center"> 
            {`Springboot 
            with JPA` }</div>
            </React.Fragment>
        )
    },
    jsp : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={springboot} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600 whitespace-pre-line text-center"> 
            {`Springboot 
            with JSP` }</div>
            </React.Fragment>
        )
    },
    git : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={git} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Git </div>
            </React.Fragment>
        )
    },
    notion : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={notion} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> notion </div>
            </React.Fragment>
        )
    },
    figma : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={figma} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Figma </div>
            </React.Fragment>
        )
    },
    aws : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={aws} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> AWS </div>
            </React.Fragment>
        )
    },
    mysql : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={mysql} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> MySQL </div>
            </React.Fragment>
        )
    },
    tailwindcss : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={tailwindcss} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Tailwind CSS </div>
            </React.Fragment>
        )
    },
    typescript : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={typescript} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600"> Typescript </div>
            </React.Fragment>
        )
    },
    styled : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={styled} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600 whitespace-pre-line text-center"> 
            {`Styled
            Components` }</div>
            </React.Fragment>
        )
    },
    vue : (key) => {
        return (
            <React.Fragment key={key}>
            <div className="w-12 h-12  rounded-full border border-zinc-500 justify-center items-center flex">
                <div className='w-10 h-10 bg-white rounded-full border-zinc-300 border'>
                    <img src={vue} alt="" className='w-full h-full object-cover rounded-full'/>
                </div>
            </div>
            <div className="text-xs mt-3 text-zinc-600 whitespace-pre-line text-center"> 
            {`vue` }</div>
            </React.Fragment>
        )
    },
}

export default StackCircle;