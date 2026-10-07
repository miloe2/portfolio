import type { CSSProperties } from "react";
import mepiiMain from "@/assets/images/projects/mepii/mepii-main.png";

// 카드 텍스트 영역 hover 효과 비교용. 이미지는 효과 없음. 카드/행에 마우스를 올려서 본다.

type Fx = "title" | "rows" | "tags" | "slot";

const DEMOS: { id: string; title: string; desc: string; fx: Fx[] }[] = [
  {
    id: "rows",
    title: "행 포커스",
    desc: "호버한 행만 남기고 나머지는 흐려진다. 글자가 살짝 밀리고 브랜드색 밑줄이 그려진다.",
    fx: ["rows"],
  },
  {
    id: "title",
    title: "제목 밑줄 + 컬러",
    desc: "카드에 올리면 제목이 브랜드색이 되고 밑줄이 왼쪽에서 그려진다.",
    fx: ["title"],
  },
  {
    id: "tags",
    title: "태그 스태거",
    desc: "카드에 올리면 태그가 순서대로 브랜드색으로 바뀌며 살짝 떠오른다.",
    fx: ["tags"],
  },
  {
    id: "slot",
    title: "기술명 롤링",
    desc: "행에 올리면 기술명이 위로 굴러 올라가고 브랜드색 '자세히 →'가 나타난다.",
    fx: ["slot"],
  },
  {
    id: "combined",
    title: "추천 조합",
    desc: "제목 밑줄 + 태그 스태거 + 행 포커스 + 기술명 롤링.",
    fx: ["title", "tags", "rows", "slot"],
  },
];

const BRAND = "#fb923c";
const TAGS = ["Frontend", "지식그래프", "자연어 검색"];
const ROWS = [
  ["온톨로지 지식그래프 시각화", "Cytoscape"],
  ["LLM 자연어 검색, 처리 단계 실시간 표시", "SSE"],
  ["분석 플러그인 업로드", "Presigned URL"],
];

const MEDIA_BG =
  "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand)_20%,white),color-mix(in_srgb,var(--brand)_7%,white))]";
const MEDIA_SHADOW = "shadow-[0_20px_40px_-12px_color-mix(in_srgb,var(--brand)_40%,transparent)]";

// 효과별 정적 클래스 (동적 조합 금지)
const TITLE_TEXT = "transition-colors duration-300 group-hover/card:text-[var(--brand)]";
const TITLE_LINE =
  "relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--brand)] after:transition-transform after:duration-500 group-hover/card:after:scale-x-100";

const TAG_FX =
  "transition-all duration-300 [transition-delay:calc(var(--i)*70ms)] group-hover/card:-translate-y-0.5 group-hover/card:border-[var(--brand)] group-hover/card:text-[var(--brand)]";

const ROW_FX = "transition-opacity duration-300 group-hover/list:opacity-40 hover:!opacity-100";
const ROW_TEXT = "transition-transform duration-300 group-hover/row:translate-x-2";
const ROW_LINE =
  "pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-[var(--brand)] transition-transform duration-500 group-hover/row:scale-x-100";

const SLOT_BOX = "block h-[1.25em] overflow-hidden whitespace-nowrap leading-[1.25em]";
const SLOT_IN = "block transition-transform duration-300 group-hover/row:-translate-y-full";

const HoverCard = ({ fx }: { fx: Fx[] }) => {
  const has = (k: Fx) => fx.includes(k);

  return (
    <article
      style={{ "--brand": BRAND } as CSSProperties}
      className="group/card relative flex cursor-pointer flex-col gap-8 overflow-hidden rounded-[2rem] bg-white p-5 sm:p-8 lg:flex-row lg:gap-10"
    >
      <div
        className={`relative aspect-square w-full shrink-0 overflow-hidden rounded-3xl lg:w-2/5 ${MEDIA_BG}`}
      >
        <div className="absolute inset-0 flex items-center p-6 sm:p-10">
          <img
            src={mepiiMain}
            alt="mepii 소재 공학 데이터 플랫폼 화면"
            className={`w-full rounded-xl ${MEDIA_SHADOW}`}
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="text-sm text-zinc-500">소재 공학 데이터 플랫폼</p>
        <h3
          className={`mt-1 text-5xl font-bold tracking-tight text-brand-ink ${has("title") ? TITLE_TEXT : ""}`}
        >
          <span className={has("title") ? TITLE_LINE : ""}>mepii</span>
        </h3>

        <ul className="mt-6 flex flex-wrap gap-2">
          {TAGS.map((tag, i) => (
            <li key={tag}>
              <span
                style={{ "--i": i } as CSSProperties}
                className={`inline-block rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-brand-ink ${has("tags") ? TAG_FX : ""}`}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>

        <ul className="group/list mt-6">
          {ROWS.map(([text, tech]) => (
            <li
              key={text}
              className={`group/row relative flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-zinc-100 py-3 text-sm ${has("rows") ? ROW_FX : ""}`}
            >
              <span className={has("rows") ? ROW_TEXT : ""}>{text}</span>
              {has("slot") ? (
                <span className={`${SLOT_BOX} text-xs text-zinc-400`}>
                  <span className={SLOT_IN}>
                    <span className={SLOT_BOX}>{tech}</span>
                    <span className={`${SLOT_BOX} text-[var(--brand)]`}>자세히 →</span>
                  </span>
                </span>
              ) : (
                <span className="text-xs text-zinc-400">{tech}</span>
              )}
              {has("rows") && <span aria-hidden="true" className={ROW_LINE} />}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between text-xs text-zinc-400">
          <p>Nuxt · Pinia · Vue-query</p>
          <p className="tabular-nums">2025.07 ~ 현재</p>
        </div>
      </div>
    </article>
  );
};

const CardHoverDemos = () => (
  <div className="mb-24">
    <h1 className="text-3xl font-bold tracking-tight">Card hover test</h1>
    <p className="mt-2 text-sm text-zinc-500">
      이미지는 그대로, 텍스트 영역만 반응합니다. 카드와 행에 마우스를 올려 보세요.
    </p>
    <div className="mt-10 space-y-12">
      {DEMOS.map(({ id, title, desc, fx }, i) => (
        <section key={id}>
          <div className="mb-4 flex items-start gap-3">
            <span className="pt-1 text-xs tabular-nums text-zinc-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-1 text-sm text-zinc-500">{desc}</p>
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-zinc-50 p-2 sm:p-4">
            <HoverCard fx={fx} />
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default CardHoverDemos;
