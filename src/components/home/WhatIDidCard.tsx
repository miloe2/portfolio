import { useMemo, useRef, type CSSProperties } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { MASK, MASK_IN, maskOrder } from "./maskReveal";

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

interface WhatIDidCardProps {
  item: WhatIDidItem;
  index: number;
  reversed?: boolean;
}

// 스택(sticky) 카드가 쌓일 때 윗선이 조금씩 내려가도록. 동적 클래스 조합 대신 static 클래스 맵.
const stickyTops = ["lg:top-24", "lg:top-28", "lg:top-32"];

// 프로젝트 브랜드 컬러(--brand)에서 배경 그라디언트와 그림자 틴트를 뽑는다.
const MEDIA_BG =
  "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--brand)_20%,white),color-mix(in_srgb,var(--brand)_7%,white))]";
const MEDIA_SHADOW = "shadow-[0_20px_40px_-12px_color-mix(in_srgb,var(--brand)_40%,transparent)]";

// 카드 hover: 이미지 영역에 브랜드색이 서서히 올라온다 (group/card = article)
const BRAND_TINT =
  "pointer-events-none absolute inset-0 bg-[var(--brand)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-[0.12]";
const IMG_HOVER = "transition-transform duration-500 group-hover/card:scale-[1.05]";

// 카드 hover: 태그가 순서대로(--i) 브랜드색이 되며 살짝 떠오른다
const TAG_HOVER =
  "transition-all duration-300 [transition-delay:calc(var(--i)*70ms)] group-hover/card:-translate-y-0.5 group-hover/card:border-[var(--brand,currentColor)] group-hover/card:text-[var(--brand,currentColor)]";

// 한 번 보이면 data-inview="true"로 고정. setState 없이 DOM 속성만 바꾼다.
const INVIEW_OPTIONS: IntersectionObserverInit = { threshold: 0.2 };
const markInView = (target: Element, isVisible: boolean) => {
  if (isVisible) target.setAttribute("data-inview", "true");
};

const WhatIDidCard = ({ item, index, reversed = false }: WhatIDidCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const refs = useMemo(() => [ref], []);
  useIntersectionObserver(refs, markInView, INVIEW_OPTIONS);

  return (
    <div ref={ref} data-inview="false" className="group/inview relative lg:pb-[30vh] lg:last:pb-0 ">
      <div className={`lg:sticky ${stickyTops[index % stickyTops.length]}`}>
        <article
          data-cursor-label="VIEW ↗"
          style={
            item.brand
              ? ({ "--brand": item.brand, "--brand-sub": item.brandSub } as CSSProperties)
              : undefined
          }
          className={`relative flex cursor-pointer flex-col overflow-hidden rounded-[2.5rem] bg-transparent items-stretch gap-8 p-5 lg:gap-12 lg:p-8 group/card ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* 비주얼 */}
          <div className="relative w-full shrink-0 lg:w-2/5">
            <div
              className={`relative aspect-square overflow-hidden rounded-[2rem] w-full max-w-md lg:max-w-none ${
                item.brand ? MEDIA_BG : "bg-zinc-100"
              }`}
            >
              {item.brand && <div className={BRAND_TINT} aria-hidden="true" />}
              <div
                className={`absolute inset-0 ${item.brand ? "flex items-center p-6 lg:p-10" : ""}`}
              >
                {item.image && item.brand ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full rounded-xl ${MEDIA_SHADOW} ${IMG_HOVER}`}
                  />
                ) : item.image ? (
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(to_right,rgb(0_0_0/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.05)_1px,transparent_1px)] bg-[length:2.5rem_2.5rem]">
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
            <p className="relative mt-8 flex items-center gap-2 text-sm  text-zinc-600">
              <span className={MASK}>
                <span className={MASK_IN} style={maskOrder(0)}>
                  {item.headline}
                </span>
              </span>
            </p>
            <p className="relative mt-1 text-4xl font-medium text-brand-ink lg:text-5xl">
              <span className={MASK}>
                <span className={MASK_IN} style={maskOrder(1)}>
                  {item.title}
                </span>
              </span>
            </p>

            <ul className="relative mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <li key={tag}>
                  <span
                    style={maskOrder(i)}
                    className={`inline-block rounded-full border border-zinc-300 px-3 py-1 text-xs text-brand-ink ${TAG_HOVER}`}
                  >
                    {tag}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="relative mt-8 flex flex-col ">
              {item.highlights.map((h, i) => (
                <li
                  key={h.text}
                  className="relative flex items-center justify-between gap-4 py-3 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-zinc-200"
                >
                  <p className={`${MASK} min-w-0 text-sm  text-brand-ink`}>
                    <span className={MASK_IN} style={maskOrder(2 + i)}>
                      {h.text}
                    </span>
                  </p>
                  <p className={`${MASK} shrink-0 whitespace-nowrap text-sm text-zinc-500`}>
                    <span className={MASK_IN} style={maskOrder(2 + i)}>
                      {h.tech.join(" · ")}
                    </span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="relative mt-8 flex items-center justify-between text-xs text-zinc-500">
              <p className={MASK}>
                <span className={MASK_IN} style={maskOrder(2 + item.highlights.length)}>
                  {item.stack.join(" · ")}
                </span>
              </p>
              <p className="tabular-nums">{item.date}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default WhatIDidCard;
