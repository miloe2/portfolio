import ViewCode from "../detail/ViewCode";
import LeftImage from "../detail/LeftImage";
import RightFullImage from "../detail/RightFullImage";
import PrjSummary from "../detail/PrjSummary";

import img1 from "../../assets/Images/Photos/fw1.webp";
import img2 from "../../assets/Images/Photos/fw2.webp";
import img3 from "../../assets/Images/Photos/fw3.webp";
import img4 from "../../assets/Images/Photos/findway2.webp";

const DetailFindway = () => {
  const themeColor = "#101420";
  const txtColor = "#E7236B";
  return (
    <div className="w-full h-auto ">
      <PrjSummary
        desc1={["BE 2명, FE 2명", "프론트엔드", "1개월", "지하철 노선도를 활용한 길 찾기"]}
        desc2={[
          "지하철 노선도를 통한 UI",
          "소요시간/환승역/시간표 등 결과값 표시",
          "따릉이API + 카카오맵 구현",
        ]}
        txtColor={txtColor}
        themeColor={themeColor}
      />

      <ViewCode
        bgColor={themeColor}
        txtColor="white"
        site="#"
        git="https://github.com/miloe2/subwayPresentation"
      />

      <LeftImage
        bgColor="#101420"
        txtColor={txtColor}
        title="찾기"
        desc="다익스트라 알고리즘을 활용하여, 
              지하철에 맞는 UI/UX를 구축했습니다."
        source={img4}
        items="center"
      />

      <RightFullImage
        bgColor="[#ffffff]"
        txtColor={txtColor}
        descColor=""
        img={img3}
        title="구현 방법"
        desc="absolute를 활용하여
        HitBox를 적용하고 클릭 좌표를 계산하여 
        시작/도착역을 설정합니다."
      />

      <div className="w-full h-80" />
      <LeftImage
        bgColor="#101420"
        txtColor={txtColor}
        source={img1}
        items="end"
        title="지하철에 적합한
                UI 구현"
        desc="시간/호선/환승 등의 결과 값을 
        지하철 UI에 맞게 바꾸어 출력합니다. "
      />

      <RightFullImage
        bgColor={themeColor}
        txtColor={txtColor}
        descColor="white"
        img={img2}
        title="공공데이터 및
              카카오맵 API"
        desc="카카오맵 API과 따릉이API를
              연계하여 근처역 따릉이 개수를 
              출력합니다."
      />
    </div>
  );
};

export default DetailFindway;

// 헤이! 케이크 (수제 케이크 제작 플랫폼)

// 소속/기관명
// FE 3명 + BE 4명

// 프로젝트 기간
// 2023.02. ~ 2023.03.

// 프로젝트 내용
// 주요 역할 : 메인, 관리자, 마켓 관련 페이지, 배포, 비동기 통신 세팅
// 웹 : https://heycake.vercel.app/
// 저장소 : https://github.com/prgrms-web-devcourse/Team-7sung-heycake

// 업무 성과 :
// 작업시 반응형 웹 구성 (모바일 , 데스크톱)
// Axios의 기본 협업 세팅 (사용하기 편한 커스터마이징)
// Vercel 배포 & 연동을 통한 자동 테스팅 및 개발 + 상업 페이지 분리
// Next.js의 SSG와 ISR을 활용한 렌더링 개선 (페이지 별 갱신주기 관리)
// 스켈레톤 UI 및 로딩 시 UX 개선
// 메인 페이지의 전반적인 기능 개발 (해더 , 지역선택 컴포넌트, 아이콘등)
// 관리자 페이지의 전반적인 기능 개발 (3개의 페이지 텝에 맞는 공용 컴포넌트)
// 마켓 정보조회를 위한 전반적인 기능 개발 (카카오 맵 연동)
// 5차례에 걸친 중간 리팩토링을 통해 코드개선 및 타입, 린트 최적화
