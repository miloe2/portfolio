import { useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import mepiiMain from "@/assets/images/Photos/mepii/mepii_main.png";
import chemidasMain from "@/assets/images/Photos/chemidas/chemidas_main.png";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import CursorLabel from "@/components/common/CursorLabel";

import WhatIDidCard, { type WhatIDidItem } from "./WhatIDidCard";
import { MASK, MASK_IN } from "./maskReveal";

const items: WhatIDidItem[] = [
  {
    key: "mepii",
    title: "mepii",
    date: "2025.07 ~ 현재",
    headline: "소재 공학 데이터 플랫폼",
    image: mepiiMain,
    brand: "#fb923c",
    brandSub: "#ffffff",
    highlights: [
      { text: "온톨로지 지식그래프 시각화", tech: ["Cytoscape"] },
      { text: "LLM 자연어 검색, 처리 단계 실시간 표시", tech: ["SSE"] },
      { text: "분석 플러그인 업로드 (Python·zip)", tech: ["Presigned URL"] },
    ],
    tags: ["지식그래프", "자연어 검색", "대용량 업로드"],
    stack: ["Nuxt", "Pinia", "Vue-query"],
  },
  {
    key: "chemidas",
    title: "Chemidas",
    date: "2025.07 ~ 현재",
    headline: "[헤드라인 placeholder]",
    image: chemidasMain,
    brand: "#089892",
    brandSub: "#ffffff",
    highlights: [
      { text: "[하이라이트 placeholder]", tech: ["Plotly"] },
      { text: "대용량 엑셀 업로드·미리보기", tech: ["Web Worker", "RevoGrid"] },
    ],
    tags: ["지식그래프", "자연어 LLM검색", "대용량 업로드"],

    stack: ["Nuxt", "Pinia"],
  },
  {
    key: "samsungcard",
    title: "APP",
    date: "2024.07 ~ 2025.07",
    headline: "[헤드라인 placeholder]",
    highlights: [{ text: "[하이라이트 placeholder]", tech: ["Legacy Migration"] }],
    tags: ["지식그래프", "자연어 LLM검색", "대용량 업로드"],
    stack: ["Vue"],
  },
];

// 한 번 보이면 data-inview="true"로 고정 (카드와 같은 방식)
// 타이틀은 도킹 애니메이션 때문에 박스보다 아래(화면 밖)에서 시작하므로, 아래쪽 40%를 비워서
// 글자가 실제로 화면에 올라온 뒤에 리빌이 재생되게 한다.
const DOCK_OPTIONS: IntersectionObserverInit = { rootMargin: "0px 0px -40% 0px" };
const markInView = (target: Element, isVisible: boolean) => {
  if (isVisible) target.setAttribute("data-inview", "true");
};

const WhatIDid = () => {
  const navigate = useNavigate();
  const dockRef = useRef<HTMLDivElement>(null);
  const dockRefs = useMemo(() => [dockRef], []);
  useIntersectionObserver(dockRefs, markInView, DOCK_OPTIONS);

  return (
    <section className="widd-section relative mt-32">
      <div
        ref={dockRef}
        data-inview="false"
        className="group/inview sticky top-0 z-[51] flex h-16 w-full items-center justify-center pointer-events-none"
      >
        <p className="widd-title origin-center font-nexon whitespace-nowrap font-semibold leading-none text-2xl text-brand-ink">
          <span className={MASK}>
            <span className={MASK_IN}>
              widd
              <span className="text-brand-coral text-4xl">.</span>
            </span>
          </span>
        </p>
      </div>

      {/* 도킹 애니메이션이 재생될 스크롤 구간(타임라인). 높이가 곧 애니메이션 길이다.
          카드 목록도 widd-section 안에 있어야 위 sticky 타이틀이 카드를 스크롤하는
          동안에도 계속 따라온다. */}
      <div className="widd-runway" />

      <div className="max-w-5xl w-full mx-auto px-4 pt-8 lg:px-0">
        <div className="flex justify-end mb-10">
          <button
            onClick={() => navigate("/work")}
            className="text-sm text-zinc-500 hover:text-brand-ink transition-colors"
          >
            전체 프로젝트 보기 ↗
          </button>
        </div>

        <div className="flex flex-col gap-10 pb-24 lg:gap-0">
          {items.map((item, index) => (
            <WhatIDidCard key={item.key} item={item} index={index} reversed={index % 2 === 1} />
          ))}
        </div>
        <CursorLabel />
      </div>
    </section>
  );
};

export default WhatIDid;
