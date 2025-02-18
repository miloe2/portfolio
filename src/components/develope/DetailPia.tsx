import React from "react";

import pia1 from "../../assets/Images/Photos/pia_grid.webp";
import pia2 from "../../assets/Images/Photos/pia_matter.webp";
import pia3 from "../../assets/Images/Photos/pia_aws.webp";

import RightFullImage from "../detail/RightFullImage";
import LeftImage from "../detail/LeftImage";
import ViewCode from "../detail/ViewCode";
import PrjSummary from "../detail/PrjSummary";
// import Left3Image from '../Detail/Left3Image';
import RightImage from "../detail/RightImage";
import videoUrl from "../../assets/Video/pia_video.mp4";

const DetailPia = () => {
  const themeColor = "#000";
  const txtColor = "#353DFF";
  const descColor = "white";
  return (
    <React.Fragment>
      <PrjSummary
        desc1={["FE 1명", "프론트엔드", "2주", "PIAENM 프로덕션 홍보 웹사이트"]}
        desc2={[
          "SEO 최적화를 위한 SSR",
          "youtube iframe을 활용한 레이아웃",
          "matter.js 라이브러리",
          "Scroll 기반 애니메이션",
          "S3, Route53, CloudFront 웹 배포",
        ]}
        txtColor={txtColor}
        themeColor={themeColor}
      />

      <ViewCode bgColor={themeColor} txtColor="black" site="https://piaenm.com" />

      <LeftImage
        bgColor={themeColor}
        txtColor={txtColor}
        title="동적 UI 구현"
        desc="영상 프로덕션 영상에 맞추어
            동적 UI를 적용하여 사용자에게 시각적 경험을 제공하였습니다."
        source={videoUrl}
        items="center"
      />

      <RightFullImage
        bgColor={themeColor}
        txtColor={txtColor}
        descColor={descColor}
        img={pia1}
        title="iframe을 활용한
              이미지&비디오 레이아웃"
        desc="Youtube iFrame을 활용하여 
              이미자와 영상을 매칭시켰습니다."
      />
      <RightImage
        bgColor={themeColor}
        txtColor={txtColor}
        title="matter.js"
        desc="Matter.js 라이브러리로 화면의 객체를
              가지고 놀 수 있는 기능을 추가하여 
              웹 사이트에 독특한 포인트를 적용하였습니다."
        img={pia2}
        items="center"
      />
      <LeftImage
        bgColor={themeColor}
        txtColor={txtColor}
        source={pia3}
        items="end"
        title="AWS 활용한
              SSG 웹 호스팅"
        desc="S3, Route53, CloudFront를 활용하여
              SSG 웹 호스팅 하였습니다."
      />
    </React.Fragment>
  );
};

export default DetailPia;
