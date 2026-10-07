import mepiiMain from "@/assets/images/projects/mepii/mepii-main.png";
import chemidasMain from "@/assets/images/projects/chemidas/chemidas-main.png";
import todayCocktail from "@/assets/images/projects/cocktail/cocktail-detail01.png";
import piaenm from "@/assets/images/projects/pia/pia-main.webp";
import pada from "@/assets/images/projects/pada/pada.png";
import portfolio from "@/assets/images/projects/portfolio/portfolio.webp";
import ddd from "@/assets/images/projects/ddd/ddd.webp";
import findway from "@/assets/images/projects/findway/findway2.webp";

export interface Highlight {
  text: string;
  tech: string[];
}

export interface Project {
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

export const projects: Project[] = [
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
  // 아래는 기존 /work(DevPrjData)에서 이식한 기본값. brand는 기존 color.title, brandSub는 흰색, 날짜는 표기만 맞춤.
  {
    key: "today-cocktail",
    title: "오늘의 칵테일",
    date: "2024.11 ~ 2025.01",
    headline: "AI기반 칵테일 레시피 추천 서비스",
    image: todayCocktail,
    brand: "#f43f5e",
    brandSub: "#ffffff",
    highlights: [],
    tags: [],
    stack: ["Nextjs", "TailwindCSS", "git", "Figma"],
  },
  {
    key: "piaenm",
    title: "piaenm",
    date: "2024.06 ~ 2024.07",
    headline: "영상프로덕션 홍보페이지",
    image: piaenm,
    brand: "#353dff",
    brandSub: "#ffffff",
    highlights: [],
    tags: [],
    stack: ["nuxt", "TailwindCSS", "AWS", "git", "Figma"],
  },
  {
    key: "pada",
    title: "PADA",
    date: "2023.12 ~ 2024.03",
    headline: "파충류 커뮤니티 플랫폼 / Admin",
    image: pada,
    brand: "#fde047",
    brandSub: "#ffffff",
    highlights: [],
    tags: [],
    stack: ["vue", "Typescript", "TailwindCSS", "AWS", "git", "Figma"],
  },
  {
    key: "portfolio",
    title: "portfolio",
    date: "2023.08 ~ 2023.09",
    headline: "개인 포트폴리오",
    image: portfolio,
    brand: "#0041af",
    brandSub: "#ffffff",
    highlights: [],
    tags: [],
    stack: ["Typescript", "React", "TailwindCSS", "git", "Figma"],
  },
  {
    key: "ddd",
    title: ":DDD",
    date: "2023.06 ~ 2023.07",
    headline: "전시 예매 및 커뮤니티 사이트",
    image: ddd,
    brand: "#03193b",
    brandSub: "#ffffff",
    highlights: [],
    tags: [],
    stack: ["Java", "Springboot", "React", "AWS", "Styled-Component", "MySQL", "git", "Figma"],
  },
  {
    key: "findway",
    title: "찾기",
    date: "2023.04 ~ 2023.05",
    headline: "막차 시간 이후 길 찾기 사이트",
    image: findway,
    brand: "#e7236b",
    brandSub: "#ffffff",
    highlights: [],
    tags: [],
    stack: ["Java", "Springboot", "React", "Styled-Component", "mariaDB", "git"],
  },
];

// 홈 whatIDid 섹션에 보여줄 프로젝트 key (표시 순서 = 배열 순서)
export const WHAT_I_DID_KEYS = ["mepii", "chemidas", "samsungcard"] as const;

// 임시: 내용 확인용으로 전체 노출 중. key로 제한하려면 아래 주석 처리된 값으로 교체.
export const whatIDidItems: Project[] = projects;
// export const whatIDidItems: Project[] = WHAT_I_DID_KEYS.flatMap((key) =>
//   projects.filter((project) => project.key === key),
// );
