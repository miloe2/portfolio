import portfolioThumnail from '../Images/Photos/portfolio.webp'
import findwayThumnail from '../Images/Photos/findway2.webp'
import dddThumnail from '../Images/Photos/DDD.webp'


const DevPrjData  = [
    {
        id: 0,  title: "찾기", date : "23. 04. 14 - 23. 05. 23", 
        desc : "막차 시간 이후 길 찾기 사이트", 
        stack :"java, jsp, javascript, react, styled, mariadb, git, notion",
        imgUrl:findwayThumnail,
        color : {
            bg:"bg-[#101420]",
            title : "text-[#E7236B]",
            text : "text-white",
        },
    },
    {
        id: 1,  title: ":DDD", date : "23. 06. 01 - 23. 07. 25", 
        desc : "전시 예매 및 정보 공유 커뮤니티 사이트", 
        stack :"java, jpa, javascript, react, styled, mysql, aws, git, figma, notion",
        imgUrl: dddThumnail,
        color : {
            bg:"bg-[#0041AF]",
            title : "text-[#03193B]",
            text : "text-white",
        },
    },
    {
        id: 2,  title: "portfolio", date : "23. 08. 01 - 23. 09. 01", 
        desc : "개인 포트폴리오", 
        stack :"typescript, react, tailwindcss, git, figma, ",
        imgUrl: portfolioThumnail,
        color : {

            bg : "bg-[#FF5851]",
            title : "text-[#0041AF]",
            text : "text-white",
        },
    },


]

export default DevPrjData;
// [#F6EF49]