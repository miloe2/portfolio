import type { WhatIDidItem } from "./WhatIDidCard";

// 카드마다 아래로 조금씩 내려가는 계단식 배치. 동적 클래스 조합을 피하려고 static 클래스를 순서대로 쓴다.
const staggers = ["lg:mt-0", "lg:mt-8", "lg:mt-16"];

interface WhatIDidDeckProps {
  items: WhatIDidItem[];
}

/**
 * lg 이상: 브라우저 폭을 다 쓰는 큰 카드가 가로로 겹쳐 있고 한 장씩 아래로 계단처럼 내려간다.
 * 뒤 카드가 앞 카드의 오른쪽을 덮으며, 호버/포커스하면 z-index가 올라가며 16px 위로 올라온다.
 * lg 미만: 겹치지 않고 세로로 쌓는다.
 *
 * 레퍼런스 카드의 computed style을 기준으로 맞췄다: 높이 512px, 패딩 24px, 본문 ~17.9px(뷰포트
 * 비례라 deck-body 유동 폰트), 자간 -0.02em, transform 0.5s ease, z-index 1.
 * 글자 크기는 em으로 잡아서 deck-body에 비례해 같이 커지고 줄어든다.
 */
const WhatIDidDeck = ({ items }: WhatIDidDeckProps) => {
  return (
    <div className="flex flex-col gap-6 pb-24 lg:flex-row lg:items-start lg:gap-0 lg:pb-32">
      {items.map((item, index) => (
        <article
          key={item.key}
          tabIndex={0}
          className={`relative z-[1] flex flex-col bg-[#ffe32b] p-6 text-deck-body leading-[1.34] tracking-[-0.02em] text-[#1a1a1a] transition-transform duration-500 ease-[ease] lg:h-[32rem] lg:w-[43%] lg:shrink-0 lg:first:ml-0 lg:-ml-[14.5%] lg:hover:z-20 lg:hover:-translate-y-4 lg:focus:z-20 lg:focus:-translate-y-4 ${staggers[index % staggers.length]}`}
        >
          <h3 className="text-[2.2em] font-medium uppercase leading-[0.95]">{item.title}</h3>

          <div className="mt-[2em]">
            <p className="font-semibold">{item.headline}</p>
            {item.highlights.map((h) => (
              <p key={h.text}>{h.text}</p>
            ))}
          </div>

          <div className="relative mt-[1em] min-h-[10em] flex-1 bg-white/30">
            <ul className="absolute bottom-0 left-0 flex flex-wrap gap-[0.5em]">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-white px-[0.6em] py-[0.2em] text-[0.8em] font-medium uppercase tracking-wide"
                >
                  {tag}
                </li>
              ))}
              <li className="bg-[#1a1a1a] px-[0.6em] py-[0.2em] text-[0.8em] font-medium uppercase tracking-wide text-white">
                {item.date}
              </li>
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
};

export default WhatIDidDeck;
