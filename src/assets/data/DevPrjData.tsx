import portfolioThumnail from "../Images/Photos/portfolio.webp";
import findwayThumnail from "../Images/Photos/findway2.webp";
import dddThumnail from "../Images/Photos/DDD.webp";
import pada from "../Images/Photos/pada.png";
import pia from "../Images/Photos/pia_main.webp";

const DevPrjData = [
  {
    id: 0,
    title: "찾기",
    date: "23. 04. 14 - 23. 05. 23",
    desc: "막차 시간 이후 길 찾기 사이트",
    stack: ["Java", "Springboot", "React", "Styled-Component", "mariaDB", "git"],
    imgUrl: findwayThumnail,
    color: {
      bg: "bg-[#101420]",
      title: "text-[#E7236B]",
      text: "text-white",
    },
  },
  {
    id: 1,
    title: ":DDD",
    date: "23. 06. 01 - 23. 07. 25",
    desc: "전시 예매 및 정보 공유 커뮤니티 사이트",
    stack: ["Java", "Springboot", "React", "AWS", "Styled-Component", "MySQL", "git", "Figma"],
    imgUrl: dddThumnail,
    color: {
      bg: "bg-[#0041AF]",
      title: "text-[#03193B]",
      text: "text-white",
    },
  },
  {
    id: 2,
    title: "portfolio",
    date: "23. 08. 01 - 23. 09. 01",
    desc: "개인 포트폴리오",
    stack: ["Typescript", "React", "TailwindCSS", "git", "Figma"],
    imgUrl: portfolioThumnail,
    color: {
      bg: "bg-[#FF5851]",
      title: "text-[#0041AF]",
      text: "text-white",
    },
  },
  {
    id: 3,
    title: "PADA",
    date: "23. 12. 01 - 24. 01. 31",
    desc: "파충류 커뮤니티 플랫폼 / 관리자 페이지",
    stack: ["vue", "Typescript", "TailwindCSS", "AWS", "git", "Figma"],
    imgUrl: pada,
    color: {
      bg: "bg-[#00D191]",
      title: "text-yellow-300",
      text: "text-white",
    },
  },
  {
    id: 4,
    title: "piaenm",
    date: "24. 06. 01 - 24. 06. 21",
    desc: "영상프로덕션 홍보페이지 ",
    stack: ["nuxt", "TailwindCSS", "AWS", "git", "Figma"],
    imgUrl: pia,
    color: {
      bg: "bg-black",
      title: "text-[#353DFF]",
      text: "text-white",
    },
  },
];

export default DevPrjData;
