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

const WhatIDidCard = ({ item, index, reversed = false }: WhatIDidCardProps) => {
  return (
    <div className="relative lg:pb-[30vh] lg:last:pb-0">
      <div className={`lg:sticky ${stickyTops[index % stickyTops.length]}`}>
        <article
          className={`widd-panel flex flex-col items-stretch gap-8 p-5 lg:gap-12 lg:p-8 ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* 비주얼 */}
          <div className="relative w-full shrink-0 lg:w-2/5">
            <div className="widd-media relative aspect-square w-full max-w-md lg:max-w-none">
              <div className="absolute inset-0">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="widd-placeholder h-full w-full">
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
            <p className="relative mt-8 flex items-center gap-2 text-sm text-zinc-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-ink" />
              {item.headline}
            </p>
            <p className="relative mt-1 text-4xl font-bold text-brand-ink lg:text-5xl">
              {item.title}
            </p>

            <ul className="relative mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag} className="widd-item">
                  <span className="inline-block rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-brand-ink">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="relative mt-8 flex flex-col ">
              {item.highlights.map((h) => (
                <li key={h.text} className="widd-row flex items-center justify-between gap-4 py-3">
                  <p className="min-w-0 text-sm leading-snug text-brand-ink">{h.text}</p>
                  <p className="shrink-0 whitespace-nowrap text-sm text-zinc-500">
                    {h.tech.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>

            <div className="relative mt-8 flex items-center justify-between text-xs text-zinc-500">
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
