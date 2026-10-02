import { useMemo, useRef, type CSSProperties, type PointerEvent } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export interface Highlight {
  text: string;
  tech: string[];
}

export interface WhatIDidItem {
  key: string;
  title: string;
  date: string;
  headline: string;
  /** 카드 포인트 컬러. CSS 변수(--accent)로 내려서 호버/placeholder/진행바에 쓴다. */
  accent: string;
  image?: string;
  highlights: Highlight[];
  tags: string[];
  stack: string[];
}

interface WhatIDidCardProps {
  item: WhatIDidItem;
  index: number;
  total: number;
  reversed?: boolean;
  onActive?: (index: number) => void;
}

// 스택(sticky) 카드가 쌓일 때 윗선이 조금씩 내려가도록. 동적 클래스 조합 대신 static 클래스 맵.
const stickyTops = ["lg:top-24", "lg:top-28", "lg:top-32"];

// 등장 트리거: 한 번 보이면 data-inview="true"로 고정(되돌리지 않음). setState 없이 DOM 속성만 바꾼다.
const INVIEW_OPTIONS: IntersectionObserverInit = { threshold: 0.2 };
// 활성 카드 판정: 화면 세로 중앙 라인에 걸친 카드
const ACTIVE_OPTIONS: IntersectionObserverInit = { rootMargin: "-45% 0px -45% 0px" };

const markInView = (target: Element, isVisible: boolean) => {
  if (isVisible) target.setAttribute("data-inview", "true");
};

const pad = (n: number) => String(n).padStart(2, "0");

const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
};

const WhatIDidCard = ({ item, index, total, reversed = false, onActive }: WhatIDidCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const refs = useMemo(() => [ref], []);

  useIntersectionObserver(refs, markInView, INVIEW_OPTIONS);
  useIntersectionObserver(
    refs,
    (_, isVisible) => {
      if (isVisible) onActive?.(index);
    },
    ACTIVE_OPTIONS,
  );

  // stagger 순서(--i). 요소마다 70ms씩 늦게 등장한다.
  const order = (i: number) => ({ "--i": i }) as CSSProperties;

  return (
    <div
      ref={ref}
      data-inview="false"
      className="widd-card relative lg:pb-[30vh] lg:last:pb-0"
      style={{ "--accent": item.accent } as CSSProperties}
    >
      <div className={`lg:sticky ${stickyTops[index % stickyTops.length]}`}>
        <article
          onPointerMove={handlePointerMove}
          className={`widd-panel flex flex-col items-stretch gap-8 p-5 lg:gap-12 lg:p-8 ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* 비주얼 */}
          <div className="relative w-full shrink-0 lg:w-2/5">
            <div className="widd-media relative aspect-square w-full max-w-md lg:max-w-none">
              <div className="widd-parallax">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="widd-media-img h-full w-full object-cover"
                  />
                ) : (
                  <div className="widd-media-img widd-placeholder h-full w-full">
                    <span className="widd-blob left-[8%] top-[12%] h-[55%] w-[55%]" />
                    <span
                      className="widd-blob bottom-[6%] right-[6%] h-[45%] w-[45%]"
                      style={{ animationDelay: "-4s" }}
                    />
                    <span className="relative text-xs uppercase tracking-[0.2em] text-brand-ink/50">
                      visual placeholder
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 텍스트 */}
          <div className="relative flex w-full min-w-0 flex-col lg:flex-1">
            <p
              className="widd-item relative mt-8 flex items-center gap-2 text-sm text-zinc-700"
              style={order(1)}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              {item.headline}
            </p>
            <p
              className="widd-item relative mt-1 text-4xl font-bold text-brand-ink lg:text-5xl"
              style={order(2)}
            >
              {item.title}
            </p>

            <ul className="relative mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <li key={tag} className="widd-item" style={order(3 + i)}>
                  <span className="inline-block rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-brand-ink transition-colors duration-300 hover:border-transparent hover:bg-[color:var(--accent)] hover:text-white">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="relative mt-8 flex flex-col border-t border-zinc-200">
              {item.highlights.map((h, i) => (
                <li
                  key={h.text}
                  className="widd-item widd-row group/row flex items-center justify-between gap-4 py-3"
                  style={order(6 + i)}
                >
                  <p className="min-w-0 text-sm leading-snug text-brand-ink transition-transform duration-300 group-hover/row:translate-x-2">
                    {h.text}
                  </p>
                  <p className="shrink-0 whitespace-nowrap text-sm text-zinc-500 transition-colors duration-300 group-hover/row:text-[color:var(--accent)]">
                    {h.tech.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>

            <div
              className="widd-item relative mt-8 flex items-center justify-between text-xs text-zinc-500"
              style={order(6 + item.highlights.length)}
            >
              <p>{item.stack.join(" · ")}</p>
              <p className="tabular-nums">{item.date}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WhatIDidCard;
