import FullVideo from "../detail/FullVideo";
import Left3Image from "../detail/Left3Image";
import RightImage from "../detail/RightImage";
import Left1Image from "../detail/Left1Image";
import FullImage from "../detail/FullImage";
import ViewCode from "../detail/ViewCode";
import PrjSummary from "../detail/PrjSummary";

import videoUrl from "../../assets/Video/DDD2.mp4";
import img1 from "../../assets/Images/Photos/DDD.webp";
import img2 from "../../assets/Images/Photos/dd1.webp";
import img3 from "../../assets/Images/Photos/dd2.webp";
import img4 from "../../assets/Images/Photos/dd3.webp";
import img5 from "../../assets/Images/Photos/dd4.webp";
import mobile from "../../assets/Images/Photos/Detail/DDDMobile.webp";
import React from "react";

const DetailDDD = () => {
  const themeColor = "#0041AF";
  const txtColor = "#03193B";
  return (
    <React.Fragment>
      <PrjSummary
        desc1={["풀스택 3명", "백엔드, 프론트엔드", "1개월", "전시 공공API를 활용한 커뮤니티"]}
        desc2={[
          "스프링부트 JPA를 활용한 백엔드 구현",
          "JWT / 이메일 인증 적용 ",
          "zustand를 활용한 회원 정보 전역 관리",
          "EC2를 활용한 웹 배포",
        ]}
        txtColor={txtColor}
        themeColor={themeColor}
      />
      <ViewCode
        bgColor={themeColor}
        txtColor="white"
        site="#"
        git="https://github.com/nessayj/RealFinalProject-DDD"
      />

      <Left3Image
        bgColor={themeColor}
        txtColor={txtColor}
        images={[img1, img2, img5]}
        title="SpringBoots 
              & React"
        desc="백엔드&프론트엔드 
              모두 구현하였습니다."
      />

      <FullVideo videoUrl={videoUrl} bgColor={themeColor} />

      <RightImage
        bgColor={themeColor}
        txtColor={txtColor}
        title="커서형 무한스크롤
              & useMemo"
        desc="커서형 방식으로 무한스크롤을 구현하고  
              useMemo를 활용하여 렌더링을
              최적화 하였습니다."
        img={img2}
        items="start"
      />
      <Left1Image
        bgColor={themeColor}
        txtColor={txtColor}
        title="zustand를 활용한
              회원 정보 전역관리"
        desc="zustand와 localStorage를 조합하여,
              마이페이지 / 다른 유저의 페이지
              분기를 구현하였습니다."
        img1={img3}
      />

      <RightImage
        bgColor={themeColor}
        txtColor={txtColor}
        title="JWT와 
              이메일 인증"
        desc="JWT로 Accees Toeken / Refresh Token을
              관리하여 로그인을 구현하였습니다."
        img={img4}
        items="center"
      />

      <FullImage
        txtColor={txtColor}
        img={mobile}
        title="미디어 쿼리"
        desc="768px로 반응형 페이지를 적용하여
              Digital Device에서 접근성을
              높혔습니다. "
      />
    </React.Fragment>
  );
};

export default DetailDDD;
