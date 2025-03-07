import java from "../../assets/Images/icon/java.jpg";
import javascript from "../../assets/Images/icon/javascript.png";
import aws from "../../assets/Images/icon/aws.jpg";
import figma from "../../assets/Images/icon/Figma-logo.svg";
import git from "../../assets/Images/icon/GitHub_Logo.svg";
import mariadb from "../../assets/Images/icon/mariadb.svg";
import mysql from "../../assets/Images/icon/Mysql2.webp";

import react from "../../assets/Images/icon/React-logo.svg";
import nextjs from "../../assets/Images/icon/nextjs_logo.svg";
import typescript from "../../assets/Images/icon/Typescript_logo_2020.svg";
// import notion from "../../assets/Images/icon/notion.svg";
import springboot from "../../assets/Images/icon/spring-boot.png";
import tailwindcss from "../../assets/Images/icon/tailwindcss.svg";

import styled from "../../assets/Images/icon/styled.png";
import vue from "../../assets/Images/icon/vue.svg";
import nuxt from "../../assets/Images/icon/nuxt.svg";

import storybook from "../../assets/Images/icon/storybook_icon.png";
import zeplin from "../../assets/Images/icon/zeplin_icon.svg";
import zustand from "../../assets/Images/icon/zustand_icon.svg";
import pinia from "../../assets/Images/icon/Pinialogo.svg";
import scss from "../../assets/Images/icon/scss_icon.svg";

interface SkillType {
  skill: string;
  imgUrl: string;
}

const SkillsList: SkillType[] = [
  { skill: "Javascript", imgUrl: javascript },
  { skill: "Typescript", imgUrl: typescript },
  { skill: "React", imgUrl: react },
  { skill: "Nextjs", imgUrl: nextjs },
  { skill: "zustand", imgUrl: zustand },
  { skill: "vue", imgUrl: vue },
  { skill: "nuxt", imgUrl: nuxt },
  { skill: "pinia", imgUrl: pinia },
  { skill: "AWS", imgUrl: aws },
  { skill: "Java", imgUrl: java },
  { skill: "Springboot", imgUrl: springboot },
  { skill: "TailwindCSS", imgUrl: tailwindcss },
  { skill: "Styled-Component", imgUrl: styled },
  { skill: "SCSS", imgUrl: scss },
  { skill: "mariaDB", imgUrl: mariadb },
  { skill: "MySQL", imgUrl: mysql },
  // { skill: "Notion", imgUrl: notion },
  { skill: "git", imgUrl: git },
  { skill: "storybook", imgUrl: storybook },
  { skill: "zeplin", imgUrl: zeplin },
  { skill: "Figma", imgUrl: figma },
];

const stackIcon = { 
  java, 
  javascript, 
  aws, 
  figma, 
  git, 
  mariadb, 
  mysql, 
  react, 
  nextjs,
  typescript, 
  // notion, 
  springboot, 
  tailwindcss, 
  styled, 
  scss, 
  vue, 
  nuxt, 
  storybook, 
  zeplin, 
  zustand, 
  pinia,
};
export { SkillsList, stackIcon };
