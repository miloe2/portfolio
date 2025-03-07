import React from "react";

import MobileSource from "../detail/MobileSource";
import videoUrl from "../../assets/Video/cocktail_video.mp4";
import cocktail01 from "../../assets/images/Photos/cocktail/cocktail_detail01.png";
import cocktail02 from "../../assets/images/Photos/cocktail/cocktail_detail02.png";
import cocktail03 from "../../assets/images/Photos/cocktail/cocktail_detail03.mp4";

import RightFullImage from "../detail/RightFullImage";
import ViewCode from "../detail/ViewCode";
import PrjSummary from "../detail/PrjSummary";

const DetailTodaycocktail = () => {
  const themeColor = "#262626";
  const txtColor = "#f43f5e";
  const descColor = "white";
  return (
    <React.Fragment>
      <PrjSummary
        desc1={["개인 프로젝트", "1인 개발", "2개월", "AI기반 칵테일 레시피 추천 서비스"]}
        desc2={[
          "openAi를 활용한 AI 추천 서비스",
          "SEO 최적화를 위한 SSR",
          "IO를 활용한 이전 채팅 내역 호출",
          "Lottie기반 로딩 애니메이션",
          "Cookie를 활용한 사용자 설정 저장",
        ]}
        txtColor={txtColor}
        themeColor={themeColor}
      />
      <div className="bg-rose-500"></div>

      <ViewCode
        bgColor={themeColor}
        txtColor="black"
        git="https://github.com/miloe2/my-cocktail"
        site="https://today-cocktail.vercel.app"
      />

      <MobileSource
        txtColor={txtColor}
        title="AI기반 
        칵테일 레시피 추천"
        desc="OpenAI API를 활용하여,
            AI기반 칵테일 레시피를 추천합니다."
        source={videoUrl}
        align="left"
      />

      <RightFullImage
        bgColor={themeColor}
        txtColor={txtColor}
        descColor={descColor}
        img={cocktail01}
        title="IO를 활용한 
              채팅 데이터 호출"
        desc="이전 채팅 내역 호출 시,
              Intersection Observer / cursor형식을 활용하여,
              채팅 호출 부하를 줄였습니다."
      />

      <MobileSource
        txtColor={txtColor}
        title="Lottie
              페이지 로딩처리"
        desc="Lottie와 Sekelotn등을 활용한 
              로딩 애니메이션으로
              사용자경험을 향상시켰습니다."
        source={cocktail03}
        align="right"
      />
      <MobileSource
        txtColor={txtColor}
        title="렌더링 최적화 개선"
        desc="Modal과 채팅 말풍선 등의 불필요한 
        리렌더링을 최적화하여 성능을 향상시켰습니다."
        source={cocktail02}
        align="left"
      />
    </React.Fragment>
  );
};

export default DetailTodaycocktail;
