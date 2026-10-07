import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import mepiiMain from "@/assets/images/projects/mepii/mepii-main.png";
import CardHoverDemos from "@/components/test/CardHoverDemos";
import FollowCursorDemos from "@/components/test/FollowCursorDemos";

const CARD_DEMOS = [
  { title: "대표 성과", desc: "결과 문장에 가장 먼저 시선이 머무르게.", variant: "result" },
  {
    title: "컬러 배경",
    desc: "이미지에 여백을 주고 은은한 코랄 배경으로 감싸기.",
    variant: "media",
  },
  { title: "제목 컬러", desc: "프로젝트 이름 하나에 브랜드 컬러를 집중하기.", variant: "title" },
  { title: "대표 배지", desc: "핵심 역할 하나만 채워진 배지로 강조하기.", variant: "badge" },
  { title: "성과 한 줄", desc: "목록에서 가장 중요한 작업에 무게를 주기.", variant: "row" },
  { title: "섬세한 깊이", desc: "얇은 테두리와 옅은 그림자로 카드의 윤곽 잡기.", variant: "depth" },
  { title: "상세 보기", desc: "작은 화살표로 다음 행동을 안내하기.", variant: "link" },
  {
    title: "성과 + 컬러 배경",
    desc: "추천 조합. 프로젝트의 분위기와 결과를 함께 보여주기.",
    variant: "combined",
  },
];

const BRANDS = { mepii: "#fb923c", chemidas: "#089892" };

const MEDIA_BG =
  "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand)_20%,white),color-mix(in_srgb,var(--brand)_7%,white))]";
const MEDIA_SHADOW = "shadow-[0_20px_40px_-12px_color-mix(in_srgb,var(--brand)_40%,transparent)]";

const CardDemo = ({ variant, brand = BRANDS.mepii }: { variant: string; brand?: string }) => {
  const result = variant === "result" || variant === "combined";
  const media = variant === "media" || variant === "combined";

  return (
    <article
      style={{ "--brand": brand } as CSSProperties}
      className={`flex flex-col gap-8 rounded-[2rem] bg-white p-5 sm:p-8 lg:flex-row lg:gap-10 ${
        variant === "depth"
          ? "border border-zinc-200/80 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.18)]"
          : ""
      }`}
    >
      <div
        className={`flex aspect-square w-full shrink-0 items-center overflow-hidden rounded-3xl lg:w-2/5 ${
          media ? `${MEDIA_BG} p-6 sm:p-10` : "bg-zinc-100"
        }`}
      >
        <img
          src={mepiiMain}
          alt="mepii 소재 공학 데이터 플랫폼 화면"
          className={media ? `w-full rounded-xl ${MEDIA_SHADOW}` : "h-full w-full object-cover"}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="text-sm text-zinc-500">소재 공학 데이터 플랫폼</p>
        <h3
          className={`mt-1 text-5xl font-bold tracking-tight ${variant === "title" ? "text-brand-coral" : "text-brand-ink"}`}
        >
          mepii
        </h3>
        {result && (
          <p className="mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            복잡한 데이터를,
            <br />
            <span className="text-brand-coral">하나의 흐름으로.</span>
          </p>
        )}

        <ul className="mt-6 flex flex-wrap gap-2">
          {["Frontend", "지식그래프", "자연어 검색"].map((tag, i) => (
            <li
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                variant === "badge" && i === 0
                  ? "border-transparent bg-[#fff0ed] text-brand-coral"
                  : "border-zinc-200 text-zinc-600"
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>

        <ul className="mt-6">
          {[
            ["온톨로지 지식그래프 시각화", "Cytoscape"],
            ["자연어 검색 · 처리 단계 실시간 표시", "SSE"],
            ["분석 플러그인 업로드", "Presigned URL"],
          ].map(([text, tech], i) => (
            <li
              key={text}
              className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-zinc-100 py-3 text-sm"
            >
              <span
                className={`flex items-center gap-2 ${variant === "row" && i === 0 ? "font-semibold" : ""}`}
              >
                {variant === "row" && i === 0 && (
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-coral"
                    aria-hidden="true"
                  />
                )}
                {text}
              </span>
              <span className="text-xs text-zinc-400">{tech}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <p>Nuxt · Pinia · Vue-query</p>
          {variant === "link" ? (
            <Link
              to="/work"
              aria-label="전체 프로젝트 보기"
              className="group flex items-center gap-2 rounded-full py-2 text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-coral"
            >
              프로젝트 보기
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ) : (
            <p>2025.07 ~ 현재</p>
          )}
        </div>
      </div>
    </article>
  );
};

// 칩 효과 테스트 페이지. 전부 하드코딩이고 효과는 칩에 마우스를 올려서 본다.
// 스타일은 src/index.css의 .ct-* 클래스.

const TAGS = [
  { ko: "지식그래프", en: "Knowledge Graph", tech: "Cytoscape", count: 3 },
  { ko: "자연어 검색", en: "NL Search", tech: "SSE", count: 5 },
  { ko: "대용량 업로드", en: "Bulk Upload", tech: "Presigned URL", count: 2 },
];

// 모든 데모가 공유하는 칩 기본 모양 (card의 칩과 같다)
const CHIP =
  "inline-block rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-brand-ink";

interface DemoProps {
  no: number;
  title: string;
  desc: string;
  listClass?: string;
  children: ReactNode;
}

const Demo = ({ no, title, desc, listClass = "", children }: DemoProps) => (
  <section className="border-t border-zinc-200 py-8">
    <p className="text-xs text-zinc-400">{String(no).padStart(2, "0")}</p>
    <h2 className="mt-1 text-lg font-semibold text-brand-ink">{title}</h2>
    <p className="mt-1 text-sm text-zinc-500">{desc}</p>
    <ul className={`mt-6 flex flex-wrap gap-3 ${listClass}`}>{children}</ul>
  </section>
);

const Test = () => (
  <div className="mx-auto max-w-5xl px-4 pb-24 pt-28 text-brand-ink">
    <FollowCursorDemos />
    <CardHoverDemos />
    <h1 className="text-3xl font-bold tracking-tight">카드 포인트 비교</h1>
    <p className="mt-2 text-sm text-zinc-500">
      같은 내용, 다른 포인트. 아래 문구는 디자인 비교용 예시입니다.
    </p>
    <div className="mt-10 space-y-12">
      {CARD_DEMOS.map(({ title, desc, variant }, i) => (
        <section key={variant}>
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
            <CardDemo variant={variant} />
          </div>
          {variant === "combined" && (
            <div className="mt-4 rounded-[2.5rem] bg-zinc-50 p-2 sm:p-4">
              <CardDemo variant={variant} brand={BRANDS.chemidas} />
            </div>
          )}
        </section>
      ))}
    </div>
    <div className="mt-24 border-t border-zinc-200 pt-12">
      <h1 className="text-2xl font-bold text-brand-ink">Chip animation test</h1>
      <p className="mt-2 text-sm text-zinc-500">칩에 마우스를 올려 보세요. (모바일은 탭)</p>

      <div className="mt-8">
        <Demo
          no={1}
          title="아래에서 차오르는 채움"
          desc="배경이 아래에서 위로 coral로 차오르고 글자는 흰색."
        >
          {TAGS.map((t) => (
            <li key={t.ko}>
              <span className={`ct-fill ${CHIP}`}>
                <span className="relative">{t.ko}</span>
              </span>
            </li>
          ))}
        </Demo>

        <Demo
          no={2}
          title="중앙에서 퍼지는 원 채움"
          desc="칩 중앙에서 coral 원이 커져 칩을 덮는다."
        >
          {TAGS.map((t) => (
            <li key={t.ko}>
              <span className={`ct-circle ${CHIP}`}>
                <span className="relative">{t.ko}</span>
              </span>
            </li>
          ))}
        </Demo>

        <Demo
          no={3}
          title="그라디언트 흐름"
          desc="호버 중에만 coral 그라디언트가 옆으로 계속 흐른다."
        >
          {TAGS.map((t) => (
            <li key={t.ko}>
              <span className={`ct-flow ${CHIP}`}>
                <span className="relative">{t.ko}</span>
              </span>
            </li>
          ))}
        </Demo>

        <Demo
          no={4}
          title="젤리 늘어남"
          desc="가로로 늘어났다가 쫀득하게 돌아온다. (호버할 때마다 재생)"
        >
          {TAGS.map((t) => (
            <li key={t.ko}>
              <span className={`ct-jelly ${CHIP}`}>{t.ko}</span>
            </li>
          ))}
        </Demo>

        <Demo
          no={5}
          title="떠오름 + 이웃 흐림"
          desc="호버한 칩이 4px 뜨고 그림자가 생기며, 나머지는 흐려진다."
          listClass="ct-float-list"
        >
          {TAGS.map((t) => (
            <li key={t.ko}>
              <span className={`ct-float ${CHIP}`}>{t.ko}</span>
            </li>
          ))}
        </Demo>

        <Demo
          no={6}
          title="글자 슬롯 교체"
          desc="한글이 위로 굴러 올라가고 영어 키워드가 coral로 올라온다."
        >
          {TAGS.map((t) => (
            <li key={t.ko}>
              <span className={`ct-slot ${CHIP}`}>
                <span className="ct-slot-in">
                  <span>{t.ko}</span>
                  <span className="text-brand-coral">{t.en}</span>
                </span>
              </span>
            </li>
          ))}
        </Demo>

        <Demo no={7} title="칩 확장" desc="옆으로 펼쳐지며 사용한 기술이 나타난다.">
          {TAGS.map((t) => (
            <li key={t.ko}>
              <span className={`ct-expand ${CHIP}`}>
                <span>{t.ko}</span>
                <span className="ct-expand-more">
                  <span className="text-brand-coral">→ {t.tech}</span>
                </span>
              </span>
            </li>
          ))}
        </Demo>

        <Demo
          no={8}
          title="뱃지 (카드 호버)"
          desc="카드 영역 전체에 호버하면 모든 칩의 뱃지가 순서대로 튀어나온다. (회색 박스 = 카드 대신)"
          listClass="ct-badge-group rounded-2xl bg-zinc-50 p-6"
        >
          {TAGS.map((t) => (
            <li key={t.ko}>
              <span className={`ct-badge ${CHIP}`}>
                {t.ko}
                <span className="ct-badge-dot" aria-hidden="true">
                  {t.count}
                </span>
              </span>
            </li>
          ))}
        </Demo>
      </div>
    </div>
  </div>
);

export default Test;
