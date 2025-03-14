import growtech from "../Images/Photos/growtech.webp";
import ces from "../Images/Photos/CES.webp";
import fime from "../Images/Photos/FIME.webp";
import asd from "../Images/Photos/asd.webp";

const carouselData = [
  {
    id: 0,
    location: "Las Vegas, USA",
    venue: "Las Vegas Convention Center",
    title: "CES 2022",
    desc: "세계 최대 IT 박람회\n CES 2022에 참석하여, \nkotra 등 총 40개사 전시 운영 지원",
    imgUrl: ces,
  },
  {
    id: 1,
    location: "Florida, USA",
    venue: "Miami Beach Convention Center",
    title: "FIME 2022",
    desc: "미국 마이애미에서 열리는 의료 전시회 \n GBSA, GWTP 등 총 40개사  \n 한국관 전시 부스 총괄 운영",
    imgUrl: fime,
  },
  {
    id: 2,
    location: "Antalya, Turkiye",
    venue: "Las Vegas Convention Center",
    title: "Growtech",
    desc: "터키 안탈리아에서 열리는 농업 박람회\n KOAT 등 한국관 총괄 운영",
    imgUrl: growtech,
  },
  {
    id: 3,
    location: "Las Vegas, USA",
    venue: "Las Vegas Convention Center",
    title: "ASD Market Week",
    desc: "미국 라스베가스의 종합소비재 박람회\n  한국무역협회 등 총 64개사 \n한국관 부스 및 전시 운영 총괄",
    imgUrl: asd,
  },
];

export default carouselData;
