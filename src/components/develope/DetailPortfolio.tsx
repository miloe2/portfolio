import React from "react";
import twcssImg from "../../assets/Images/photos/tailwind css.png";
import TSLogoSnipet from "../detail/TSLogoSnipet";
import RightFullImage from "../detail/RightFullImage";
import ParagraphRow from "../detail/ParagraphRow";
import Center9image from "../detail/Center9image";
import LeftImage from "../detail/LeftImage";
import ViewCode from "../detail/ViewCode";
import PrjSummary from "../detail/PrjSummary";

import videoUrl from "../../assets/Video/exhibitVideo.mp4";
import pfDetail1 from "../../assets/Images/Photos/Detail/dv2.webp";
import pfDetail2 from "../../assets/Images/Photos/Detail/dv1.webp";
import pfDetail3 from "../../assets/Images/Photos/Detail/dv3.webp";
import pfDetail4 from "../../assets/Images/Photos/Detail/dv4.webp";
import pfDetail5 from "../../assets/Images/Photos/Detail/dv5.webp";
import pfDetail6 from "../../assets/Images/Photos/Detail/dv6.webp";
import pfDetail7 from "../../assets/Images/Photos/Detail/dv7.webp";
import pfDetail8 from "../../assets/Images/Photos/Detail/dv8.webp";
import pfDetail9 from "../../assets/Images/Photos/Detail/dv9.webp";

const DetailPortfolio = () => {
  const themeColor = "#FF5851";
  const txtColor = "#0041AF";
  const descColor = "white";

  return (
    <React.Fragment>
      <PrjSummary
        desc1={["개인 프로젝트", "프론트엔드", "1개월", "개인 포트폴리오 사이트 제작"]}
        desc2={[
          "페이지 디자인 및 기획",
          "Typescript, Tailwind css 사용",
          "Scroll 기반 애니메이션 디자인",
          "Git을 이용한 정적페이지 배포",
        ]}
        txtColor={txtColor}
        themeColor={themeColor}
      />

      <ViewCode
        bgColor={themeColor}
        txtColor="black"
        site="https://miloe2.github.io/portfolio.ts.vite/"
        git="https://github.com/miloe2/portfolio.ts.vite"
      />

      <TSLogoSnipet />

      <RightFullImage
        bgColor={themeColor}
        txtColor={txtColor}
        descColor={descColor}
        img={twcssImg}
        title="Tailwind CSS"
        desc="평소 사용해보고 싶었던, 
            Tailwind CSS로 작업하고
            기존보다 빠르게 스타일링을 완성하였습니다.  "
      />

      <ParagraphRow
        txtColor={txtColor}
        title="Work.Develope"
        desc="1인 개발로 페이지 디자인 구성부터
            기획& 배포까지 진행하였습니다. 
            "
      />

      <Center9image
        bgColor={themeColor}
        images={[pfDetail1, pfDetail2, pfDetail3, pfDetail4, pfDetail5, pfDetail6, pfDetail7, pfDetail8, pfDetail9]}
      />

      <LeftImage
        bgColor="#f5f5f5"
        txtColor={txtColor}
        title="Scroll 기반 
                애니메이션"
        desc="Scroll 좌표를 활용하여, 
                인터렉티브한 애니메이션을 구현하였습니다. "
        source={videoUrl}
        items="center"
      />
    </React.Fragment>
  );
};

export default DetailPortfolio;
