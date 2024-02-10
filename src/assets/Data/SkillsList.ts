import java from '../../assets/Images/Icons/java.jpg';
import javascript from '../../assets/Images/Icons/javascript.png';
import aws from '../../assets/Images/Icons/aws.jpg';
import figma from '../../assets/Images/Icons/Figma-logo.svg';
import git from '../../assets/Images/Icons/GitHub_Logo.svg';
import mariadb from '../../assets/Images/Icons/mariadb.svg';
import mysql from '../../assets/Images/Icons/Mysql2.webp';

import react from '../../assets/Images/Icons/React-logo.svg';
import typescript from '../../assets/Images/Icons/Typescript_logo_2020.svg';
import notion from '../../assets/Images/Icons/notion.svg';
import springboot from '../../assets/Images/Icons/spring-boot.png';
import tailwindcss from '../../assets/Images/Icons/tailwindcss.svg';

import styled from '../../assets/Images/Icons/styled.png';
import vue from '../../assets/Images/Icons/vue.svg'


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
    { skill: 'Styled-Component', imgUrl: styled },
    { skill: 'vue', imgUrl: vue },
];

export default  SkillsList;