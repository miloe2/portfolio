import java from "@/assets/images/icons/java.jpg";
import javascript from "@/assets/images/icons/javascript.png";
import aws from "@/assets/images/icons/aws.jpg";
import figma from "@/assets/images/icons/figma-logo.svg";
import git from "@/assets/images/icons/github-logo.svg";
import mariadb from "@/assets/images/icons/mariadb.svg";
import mysql from "@/assets/images/icons/mysql2.webp";

import react from "@/assets/images/icons/react-logo.svg";
import nextjs from "@/assets/images/icons/nextjs-logo.svg";
import typescript from "@/assets/images/icons/typescript-logo-2020.svg";
// import notion from "@/assets/images/icons/notion.svg";
import springboot from "@/assets/images/icons/spring-boot.png";
import tailwindcss from "@/assets/images/icons/tailwindcss.svg";

import styled from "@/assets/images/icons/styled.png";
import vue from "@/assets/images/icons/vue.svg";
import nuxt from "@/assets/images/icons/nuxt.svg";

import storybook from "@/assets/images/icons/storybook-icon.png";
import zeplin from "@/assets/images/icons/zeplin-icon.svg";
import zustand from "@/assets/images/icons/zustand-icon.svg";
import pinia from "@/assets/images/icons/pinialogo.svg";
import scss from "@/assets/images/icons/scss-icon.svg";

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
