import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// 마우스 옆을 따라다니는 작은 라벨. 기본 커서는 그대로 둔다.
// data-cursor-label="문구"를 가진 요소 위에 있을 때만 나타난다. (document 이벤트 위임, 앱에 하나만 마운트)
// 다른 요소로 넘어가면 한 번 꺼졌다가 다시 켜진다.
// fixed 요소를 transform으로만 움직이고 rAF에서 lerp로 따라간다. setState 없음.
// 부모의 transform 영향을 받지 않도록 body로 portal.

const LERP = 0.22;

const CursorLabel = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    if (!cursor || !text) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    let active = false;
    let current: HTMLElement | null = null;

    const tick = () => {
      x += (tx - x) * LERP;
      y += (ty - y) * LERP;
      cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    const hide = () => {
      if (!active) return;
      active = false;
      cursor.dataset.on = "false";
      cancelAnimationFrame(raf);
    };
    // 좌표 아래 요소를 보고 켜고 끈다. 다른 요소로 넘어가는 순간(또는 요소 밖)엔 끄고, 다음 호출에서 다시 켠다.
    const update = (el: Element | null, cx: number, cy: number) => {
      const target = el?.closest<HTMLElement>("[data-cursor-label]") ?? null;
      if (target !== current) {
        current = target;
        hide();
        // 마우스가 안 움직여도(스크롤 진입) 다음 프레임에 다시 켠다
        if (target) requestAnimationFrame(() => update(document.elementFromPoint(px, py), px, py));
        return;
      }
      if (!target) return;
      tx = cx;
      ty = cy;
      if (active) return;
      active = true;
      x = tx;
      y = ty;
      text.textContent = target.dataset.cursorLabel ?? "";
      // 카드의 --brand / --brand-sub를 라벨 색으로 (없으면 CSS 기본값)
      const style = getComputedStyle(target);
      ["--brand", "--brand-sub"].forEach((k) => {
        const v = style.getPropertyValue(k).trim();
        if (v) cursor.style.setProperty(k, v);
        else cursor.style.removeProperty(k);
      });
      cursor.dataset.on = "true";
      raf = requestAnimationFrame(tick);
    };

    let hasPointer = false;
    let px = 0;
    let py = 0;
    let scrollRaf = 0;

    const onMove = (e: MouseEvent) => {
      hasPointer = true;
      px = e.clientX;
      py = e.clientY;
      update(e.target as Element, px, py);
    };
    // 스크롤로 카드가 마우스 밑으로 들어오거나 빠져나가면 mousemove가 안 오므로 좌표로 다시 확인한다.
    const onScroll = () => {
      if (!hasPointer || scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        update(document.elementFromPoint(px, py), px, py);
      });
    };
    const onLeaveWindow = () => {
      hasPointer = false;
      current = null;
      hide();
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(scrollRaf);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, []);

  return createPortal(
    <span
      ref={cursorRef}
      data-on="false"
      aria-hidden="true"
      className="group/cur pointer-events-none fixed left-0 top-0 z-[100]"
    >
      <span
        ref={textRef}
        className="ml-4 mt-4 block origin-top-left scale-0 whitespace-nowrap rounded-full bg-[var(--brand,#18181b)] px-3 py-1.5 text-xs font-medium text-[var(--brand-sub,#fff)] transition-transform duration-200 ease-out group-data-[on=true]/cur:scale-100"
      />
    </span>,
    document.body,
  );
};

export default CursorLabel;
