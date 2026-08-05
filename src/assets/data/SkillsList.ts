import java from "../../assets/images/icon/java.jpg";
import javascript from "../../assets/images/icon/javascript.png";
import aws from "../../assets/images/icon/aws.jpg";
import figma from "../../assets/images/icon/Figma-logo.svg";
import git from "../../assets/images/icon/GitHub_Logo.svg";
import mariadb from "../../assets/images/icon/mariadb.svg";
import mysql from "../../assets/images/icon/Mysql2.webp";

import react from "../../assets/images/icon/React-logo.svg";
import nextjs from "../../assets/images/icon/nextjs_logo.svg";
import typescript from "../../assets/images/icon/Typescript_logo_2020.svg";
// import notion from "../../assets/images/icon/notion.svg";
import springboot from "../../assets/images/icon/spring-boot.png";
import tailwindcss from "../../assets/images/icon/tailwindcss.svg";

import styled from "../../assets/images/icon/styled.png";
import vue from "../../assets/images/icon/vue.svg";
import nuxt from "../../assets/images/icon/nuxt.svg";

import storybook from "../../assets/images/icon/storybook_icon.png";
import zeplin from "../../assets/images/icon/zeplin_icon.svg";
import zustand from "../../assets/images/icon/zustand_icon.svg";
import pinia from "../../assets/images/icon/Pinialogo.svg";
import scss from "../../assets/images/icon/scss_icon.svg";

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
