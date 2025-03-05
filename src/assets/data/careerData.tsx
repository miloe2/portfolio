import { BiAlignLeft } from "react-icons/bi";
import { FcInvite, FcCalendar } from "react-icons/fc";
import { TfiLocationPin } from "react-icons/tfi";
import { stackIcon } from "./SkillsList";

export const career = {
  title: "경력사항",
  type: "text",
  desc: [
    { title: "2024.07 \n ~ 재직중", content: "리즌디자인", subText: "프론트엔드" },
    { title: "2023.10 \n ~ 2024.07", content: "피소프트", subText: "프론트엔드" },
    { title: "2019.11 \n ~ 2022.12", content: "트레이드월드", subText: "해외전시팀" },
  ],
};

export const project = {
  title: "주요 프로젝트",
  type: "desc",
  desc: [
    { title: "OO카드 APP 통합 마이그레이션 ", content: "vue2, Storybook, SCSS" },
    { title: "파충류 커뮤니티 웹서비스 제작", content: "vue3, TS, vuex, S3, tailwind" },
    { title: "PiaENM 프로모션 페이지 제작", content: "nuxt3, TS, pinia, S3, tailwind" },
    { title: "칵테일 Ai 추천 웹서비스 ", content: "next18, TS, opneAi, zustand,  indexedDB" },
  ],
};

export const skills = {
  title: "프론트엔드 사용 기술",
  type: "icon",
  desc: [
    {
      title: "프레임워크",
      content: ["vue/nuxt", "react/next"],
      icons: [stackIcon.vue, stackIcon.react],
    },
    {
      title: "상태관리",
      content: ["vuex/pinia", "zustand"],
      icons: [stackIcon.pinia, stackIcon.zustand],
    },
    {
      title: "스타일링",
      content: ["SCSS", "tailwind"],
      icons: [stackIcon.scss, stackIcon.tailwindcss],
    },
    {
      title: "UI개발툴",
      content: ["storybook", "figma", "zeplin"],
      icons: [stackIcon.storybook, stackIcon.figma, stackIcon.zeplin],
    },
    { title: "배포", content: ["AWS-S3/CloudFront/Route53"], icons: [stackIcon.aws] },
  ],
};

export const education = {
  title: "교육사항 & 자격증",
  type: "text",
  desc: [
    { title: "2024.06", content: "정보처리기사" },
    { title: "2023.07", content: "KH정보교육원 수료" },
    { title: "2017.08", content: "건국대학교 경영학과 졸업" },
    { title: "2013.03", content: "건국대학교 경영학과 입학" },
  ],
};
export const contactInfo = [
  { icon: <BiAlignLeft />, label: "이택현" },
  { icon: <FcCalendar />, label: "1991. 01. 17" },
  // { icon: <FcPhone />, label: "1991. 01. 17" },
  { icon: <TfiLocationPin />, label: "서울시 송파구 가락동" },
  { icon: <FcInvite />, label: "miloe0117@gmail.com" },
];
