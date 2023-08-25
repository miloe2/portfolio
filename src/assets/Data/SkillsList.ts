import java from '../../assets/Images/java.jpg';
import javascript from '../../assets/Images/javascript.png';
import aws from '../../assets/Images/aws.jpg';
import figma from '../../assets/Images/Figma-logo.svg';
import git from '../../assets/Images/GitHub_Logo.svg';
import mariadb from '../../assets/Images/mariadb.svg';
import mysql from '../../assets/Images/Mysql2.webp';

import react from '../../assets/Images/React-logo.svg';
import typescript from '../../assets/Images/Typescript_logo_2020.svg';
import notion from '../../assets/Images/notion.svg';
import springboot from '../../assets/Images/spring-boot.png';
import tailwindcss from '../../assets/Images/tailwindcss.svg';

import styled from '../../assets/Images/styled.png';


interface SkillType {
    skill: string;
    imgUrl: string;
}

const SkillsList: SkillType[] = [
    { skill: 'Java', imgUrl: java },
    { skill: 'Javascript', imgUrl: javascript },
    { skill: 'AWS', imgUrl: aws },
    { skill: 'Figma', imgUrl: figma },
    { skill: 'git', imgUrl: git },
    { skill: 'mariaDB', imgUrl: mariadb },
    { skill: 'MySQL', imgUrl: mysql },
    { skill: 'React', imgUrl: react },
    { skill: 'Typescript', imgUrl: typescript },
    { skill: 'Notion', imgUrl: notion },
    { skill: 'Springboot', imgUrl: springboot },
    { skill: 'TailwindCSS', imgUrl: tailwindcss },
    { skill: 'styled-Component', imgUrl: styled },
];

export default  SkillsList;