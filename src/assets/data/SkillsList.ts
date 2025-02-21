import java from "../../assets/Images/icon/java.jpg";
import javascript from "../../assets/Images/icon/javascript.png";
import aws from "../../assets/Images/icon/aws.jpg";
import figma from "../../assets/Images/icon/Figma-logo.svg";
import git from "../../assets/Images/icon/GitHub_Logo.svg";
import mariadb from "../../assets/Images/icon/mariadb.svg";
import mysql from "../../assets/Images/icon/Mysql2.webp";

import react from "../../assets/Images/icon/React-logo.svg";
import typescript from "../../assets/Images/icon/Typescript_logo_2020.svg";
// import notion from "../../assets/Images/icon/notion.svg";
import springboot from "../../assets/Images/icon/spring-boot.png";
import tailwindcss from "../../assets/Images/icon/tailwindcss.svg";

import styled from "../../assets/Images/icon/styled.png";
import vue from "../../assets/Images/icon/vue.svg";
import nuxt from "../../assets/Images/icon/nuxt.svg";

interface SkillType {
  skill: string;
  imgUrl: string;
}

const SkillsList: SkillType[] = [
  { skill: "Java", imgUrl: java },
  { skill: "Javascript", imgUrl: javascript },
  { skill: "AWS", imgUrl: aws },
  { skill: "Figma", imgUrl: figma },
  { skill: "git", imgUrl: git },
  { skill: "mariaDB", imgUrl: mariadb },
  { skill: "MySQL", imgUrl: mysql },
  { skill: "React", imgUrl: react },
  { skill: "Typescript", imgUrl: typescript },
  // { skill: "Notion", imgUrl: notion },
  { skill: "Springboot", imgUrl: springboot },
  { skill: "TailwindCSS", imgUrl: tailwindcss },
  { skill: "Styled-Component", imgUrl: styled },
  { skill: "vue", imgUrl: vue },
  { skill: "nuxt", imgUrl: nuxt },
];

export default SkillsList;
