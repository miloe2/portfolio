import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WhatIDidCard, { type WhatIDidItem } from "./WhatIDidCard";

const items: WhatIDidItem[] = [
  {
    key: "mepii",
    title: "mepii",
    date: "2025.07 ~ 현재",
    headline: "소재 공학 데이터 플랫폼",
    accent: "#FF5851",
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
    accent: "#7C5CFF",
    highlights: [
      { text: "[하이라이트 placeholder]", tech: ["Plotly"] },
      { text: "대용량 엑셀 업로드·미리보기", tech: ["Web Worker", "RevoGrid"] },
    ],
    tags: ["지식그래프", "자연어 LLM검색", "대용량 업로드"],

    stack: ["Nuxt", "Pinia"],
  },
  {
    key: "samsungcard",
    title: "삼성카드 통합 APP",
    date: "2024.07 ~ 2025.07",
    headline: "[헤드라인 placeholder]",
    accent: "#13A88A",
    highlights: [{ text: "[하이라이트 placeholder]", tech: ["Legacy Migration"] }],
    tags: ["지식그래프", "자연어 LLM검색", "대용량 업로드"],
    stack: ["Vue"],
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

const WhatIDid = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  return (
    <section className="widd-section relative mt-32">
      <div className="widd-dock sticky top-0 flex h-16 w-full items-center justify-center pointer-events-none">
        <p className="widd-title font-nexon whitespace-nowrap font-semibold leading-none text-2xl text-brand-ink">
          WhatIDid
          <span className="text-brand-coral text-4xl">.</span>
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
            <WhatIDidCard
              key={item.key}
              item={item}
              index={index}
              total={items.length}
              reversed={index % 2 === 1}
              onActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDid;
