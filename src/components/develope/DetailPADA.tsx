import React from "react";
import pada1 from "../../assets/Images/Photos/pada1.png";
import pada2 from "../../assets/Images/Photos/pada2.png";
import pada3 from "../../assets/Images/Photos/pada3.png";
import pada4 from "../../assets/Images/Photos/pada_event.png";

import RightFullImage from "../detail/RightFullImage";
import LeftImage from "../detail/LeftImage";
import ViewCode from "../detail/ViewCode";
import PrjSummary from "../detail/PrjSummary";
import Left1Image from "../detail/Left1Image";
import RightImage from "../detail/RightImage";
import videoUrl from "../../assets/Video/pada3video.mp4";

const DetailPortfolio = () => {
  const themeColor = "#00D191";
  const txtColor = "#0041AF";
  const descColor = "white";
  return (
    <React.Fragment>
      <PrjSummary
        desc1={[
          "BE 1명, FE 1명",
          "프론트엔드",
          "3개월",
          "앱서비스 PADA 홈페이지 버전 / 관리자 페이지 ",
        ]}
        desc2={[
          "VUEX를 활용한 중복 호출 방지",
          "커서형 페이지네이션/무한스크롤",
          "소셜로그인 및 카카오 API",
          "S3, Route53, CloudFront 웹 배포",
          "관리자 페이지 제작",
          "Indexed DB",
        ]}
        txtColor={txtColor}
        themeColor={themeColor}
      />
      <ViewCode bgColor={themeColor} txtColor="black" site="https://padaapp.com" />

      <RightFullImage
        bgColor={themeColor}
        txtColor={txtColor}
        descColor={descColor}
        img={pada1}
        title="VUEX를 통한 
            중복 호출 방지"
        desc="카테고리는 VUEX로 객체화하여
            이미 호출한 내용은 중복 호출 없이
            접근 할 수 있도록 하였습니다."
      />
      <RightImage
        bgColor={themeColor}
        txtColor={txtColor}
        title="소셜로그인 및
                카카오 API"
        desc="기존 앱사용자의 구글/카카오 
              로그인 및 회원가입을 연동하였습니니다. 
              카카오 API를 활용하여
              지도 / 공유를 구현하였습니다.
              "
        img={pada4}
        items="start"
      />

      <LeftImage
        bgColor="#00D191"
        txtColor={txtColor}
        title="커서형 무한스크롤"
        desc="무한스크롤을 적용하여서, 
            사용자 경험을 개선하였습니다."
        source={videoUrl}
        items="center"
      />
      <Left1Image
        bgColor={themeColor}
        txtColor={txtColor}
        title="이미지 압축 및
              Drag&Drop을 통한
              순서 변경"
        desc="이미지 업로드 시, 용량을 압축하고
              드래그 순서 변경이 가능합니다. 
              글 수정 시 이미지 변경을 추적하여
              다른 API 백엔드에 전달합니다.  "
        img1={pada3}
      />
      <LeftImage
        bgColor="#00D191"
        txtColor={txtColor}
        source={pada2}
        items="end"
        title="APP 유입을 위한
              미디어쿼리"
        desc="웹에서 앱으로 유입이 되도록 
              반응형 미디어쿼리가 적용되었습니다. "
      />
    </React.Fragment>
  );
};

export default DetailPortfolio;
