import { useEffect, useRef, type ReactNode } from "react";
import mepiiMain from "@/assets/images/projects/mepii/mepii-main.png";

// 마우스 따라다니는 커서 비교용.
// 이전 PoC가 끊겼던 이유(left/top transition)를 피해서: fixed 요소를 transform으로만 움직이고,
// rAF에서 목표 좌표를 lerp로 따라간다. setState 없음. 켜고 끄는 건 data-on 속성.

type Mode = "circle" | "label";

const LERP = 0.22;

const DEMOS: { mode: Mode; title: string; desc: string }[] = [
  {
    mode: "circle",
    title: "A. 원형 VIEW (기본 커서 숨김)",
    desc: "기본 커서가 사라지고 VIEW 원이 부드럽게 따라온다.",
  },
  {
    mode: "label",
    title: "B. 커서 옆 라벨 (기본 커서 유지)",
    desc: "기본 커서는 그대로 두고, 오른쪽 아래에 작은 VIEW 라벨이 따라온다.",
  },
];

const ZONE: Record<Mode, string> = { circle: "cursor-none", label: "" };

const CURSOR_IN: Record<Mode, string> = {
  circle:
    "-translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-brand-coral text-sm font-semibold text-white",
  label:
    "ml-4 mt-4 origin-top-left rounded-full bg-brand-ink px-3 py-1.5 text-xs font-medium text-white",
};

const CURSOR_LABEL: Record<Mode, string> = { circle: "VIEW", label: "VIEW ↗" };

const FollowZone = ({ mode, children }: { mode: Mode; children: ReactNode }) => {
  const zoneRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const zone = zoneRef.current;
    const cursor = cursorRef.current;
    if (!zone || !cursor) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    const tick = () => {
      x += (tx - x) * LERP;
      y += (ty - y) * LERP;
      cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    const onEnter = (e: MouseEvent) => {
      tx = x = e.clientX;
      ty = y = e.clientY;
      cursor.dataset.on = "true";
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onLeave = () => {
      cursor.dataset.on = "false";
      cancelAnimationFrame(raf);
    };

    zone.addEventListener("mouseenter", onEnter);
    zone.addEventListener("mousemove", onMove, { passive: true });
    zone.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      zone.removeEventListener("mouseenter", onEnter);
      zone.removeEventListener("mousemove", onMove);
      zone.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={zoneRef} className={ZONE[mode]}>
      {children}
      <span
        ref={cursorRef}
        data-on="false"
        aria-hidden="true"
        className="group/cur pointer-events-none fixed left-0 top-0 z-50"
      >
        <span
          className={`block scale-0 transition-transform duration-200 ease-out group-data-[on=true]/cur:scale-100 ${CURSOR_IN[mode]}`}
        >
          {CURSOR_LABEL[mode]}
        </span>
      </span>
    </div>
  );
};

const FollowCursorDemos = () => (
  <div className="mb-24">
    <h1 className="text-3xl font-bold tracking-tight">Follow cursor test</h1>
    <p className="mt-2 text-sm text-zinc-500">
      카드 위에서 마우스를 천천히, 빠르게 움직여 보세요. 따라오는 느낌을 비교합니다.
    </p>
    <div className="mt-10 space-y-12">
      {DEMOS.map(({ mode, title, desc }) => (
        <section key={mode}>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mb-4 mt-1 text-sm text-zinc-500">{desc}</p>
          <FollowZone mode={mode}>
            <article className="flex flex-col gap-8 rounded-[2rem] bg-zinc-50 p-5 sm:p-8 lg:flex-row lg:gap-10">
              <div className="aspect-square w-full shrink-0 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,color-mix(in_srgb,#fb923c_20%,white),color-mix(in_srgb,#fb923c_7%,white))] lg:w-2/5">
                <div className="flex h-full items-center p-6 sm:p-10">
                  <img src={mepiiMain} alt="mepii 화면" className="w-full rounded-xl" />
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <p className="text-sm text-zinc-500">소재 공학 데이터 플랫폼</p>
                <h3 className="mt-1 text-5xl font-bold tracking-tight text-brand-ink">mepii</h3>
                <p className="mt-6 text-sm text-zinc-500">
                  카드 어디든 마우스를 올리면 커서가 바뀝니다.
                </p>
              </div>
            </article>
          </FollowZone>
        </section>
      ))}
    </div>
  </div>
);

export default FollowCursorDemos;
