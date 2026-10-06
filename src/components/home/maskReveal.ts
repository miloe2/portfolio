// 텍스트 마스크 리빌: 줄 박스(MASK)가 넘치는 부분을 가리고, 안쪽 글자(MASK_IN)가 아래에서 올라온다.
// 조상 중 group/inview 요소의 data-inview가 "true"가 되면 transition으로 재생된다.
// 정적 클래스 문자열이어야 Tailwind가 찾는다. 글자 순서는 style의 --i로 stagger(maskOrder).
import type { CSSProperties } from "react";

// 마지막 padding/margin은 디센더 잘림 방지
export const MASK = "block overflow-hidden pb-[0.12em] -mb-[0.12em]";
export const MASK_IN =
  "block transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] [transition-delay:calc(var(--i,0)*80ms)] group-data-[inview=false]/inview:translate-y-[110%]";

export const maskOrder = (i: number) => ({ "--i": i }) as CSSProperties;
