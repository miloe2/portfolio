import mepiiMain from "@/assets/images/Photos/mepii/mepii_main.png";
import chemidasMain from "@/assets/images/Photos/chemidas/chemidas_main.png";

export interface Highlight {
  text: string;
  tech: string[];
}

export interface WhatIDidItem {
  key: string;
  title: string;
  date: string;
  headline: string;
  image?: string;
  brand?: `#${string}`;
  brandSub?: `#${string}`;
  highlights: Highlight[];
  tags: string[];
  stack: string[];
}

export const whatIDidItems: WhatIDidItem[] = [
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
