// interface ColorType {
//     bg: string;
//     text: string;
//     title: string;
// }

// interface ItemType {
//     id: number;
//     title: string;
//     date: string;
//     desc: string;
//     stack: string;
//     imgUrl: string;
//     color: ColorType;
// }

const DevPrjData  = [
    {
        id: 0,  title: "찾기", date : "23. 04. 14 - 23. 05. 23", 
        desc : "막차 시간 이후 길 찾기 사이트", 
        stack :"java, javascript, react, mariadb, springboot, git, notion",
        imgUrl:"https://picsum.photos/740/360",
        color : {
            bg : "bg-[#F7C700]",
            title : "text-[#101420]",
            text : "text-white",
        },
    },
    {
        id: 1,  title: ":DDD", date : "23. 06. 01 - 23. 07. 25", 
        desc : "전시 예매 및 정보 공유 커뮤니티 사이트", 
        stack :"java, javascript, react, mysql, springboot, aws, git, figma, notion",
        imgUrl:"https://picsum.photos/540/360",
        color : {
            bg:"bg-[#0041AF]",
            title : "text-[#101420]",
            text : "text-white",
        },
    },
    {
        id: 2,  title: "portfolio", date : "23. 04. 14 - 23. 05. 23", 
        desc : "개인 포트폴리오", 
        stack :"react, typescript, git, figma, tailwindcss",
        imgUrl:"https://picsum.photos/640/360",
        color : {
            bg:"bg-[#101420]",
            title : "text-[#E7236B]",
            text : "text-white",
        },
    },


]

export default DevPrjData;