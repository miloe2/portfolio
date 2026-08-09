# Portfolio Refactoring Guide

> 마지막 갱신: 2026-08-05
> 목적: 세션이 바뀌어도 같은 기준과 순서로 포트폴리오 리팩터링을 이어가기 위한 기준 문서

## 1. 이번 리팩터링의 범위

이번 작업은 콘텐츠가 아니라 코드 품질과 설계를 개선하는 데 집중한다.

### 포함

- Linux와 CI에서도 재현 가능한 빌드 환경
- 라우팅과 상태 관리 구조 개선
- 프로젝트 상세 페이지의 타입 및 컴포넌트 구조 개선
- 스크롤 애니메이션과 렌더링 성능 개선
- Tailwind 사용 방식 정리
- 접근성 개선
- 테스트와 CI 구축
- 에셋 로딩 및 번들 최적화

### 제외

- 경력 문구, 프로젝트 설명, 성과 지표 등 콘텐츠 개편
- 전체 비주얼 리디자인
- 근거 없는 프레임워크 교체 또는 전면 재작성

콘텐츠 개편은 코드 구조가 안정된 뒤 별도 작업으로 진행한다.

## 2. 기본 원칙

1. React, TypeScript, Vite, Tailwind 기반은 유지한다.
2. 한 번에 전면 재작성하지 않고 항상 실행 가능한 작은 단위로 변경한다.
3. 각 단계가 끝날 때 typecheck, lint, test, build를 통과시킨다.
4. 라우트로 표현 가능한 상태는 전역 상태에 저장하지 않는다.
5. 프로젝트 데이터와 UI 레이아웃을 분리한다.
6. 동적 Tailwind 클래스 문자열을 만들지 않는다.
7. 애니메이션은 접근성과 성능을 함께 고려한다.
8. 의존성 메이저 업그레이드와 구조 리팩터링을 한 번에 진행하지 않는다.
9. 기존 URL과 `/portfolio` base 경로를 깨뜨리지 않는다.

> canonical 경로는 `/portfolio`(trailing slash 없음)로 사용한다. 현재 라우터와 Vite base도 `/portfolio`로 맞춘다. 다만 GitHub Pages 프로젝트 사이트는 디렉터리 기반이라 실제 서버가 `/portfolio/`로 정규화할 수 있으며, 이 경우에는 호스팅 플랫폼의 동작이다.
10. 작업을 마칠 때 이 문서의 체크리스트와 작업 기록을 갱신한다.

## 3. 현재 상태 요약

- 브랜치: `master`
- 최초 점검 시 작업 트리: clean
- 패키지 매니저: Yarn Classic 계열
- 현재 로컬에는 `node_modules`가 없어 완전한 빌드 검증을 하지 못했다.
- `src/assets` 크기는 약 68MB이며, 영상 하나의 크기가 약 6.6~11MB다.
- 프로젝트 상세 관련 컴포넌트는 약 1,128줄이다.
- 자동화 테스트와 CI가 없다.

## 4. 발견된 문제

### P0 — 빌드 재현성

- 실제 경로는 `src/assets/images`, `src/assets/video`인데 import에는 `Images`, `Video`, `photos`가 혼재한다.
- 대소문자가 맞지 않는 import가 약 90곳이며 Linux 환경에서 빌드를 막는다.
- `tsconfig.json`에 존재하지 않는 `src/Components/detail/TSLogoSnippet.tsx` 경로가 들어 있다.
- `react-router-dom`은 v6인데 v5용 `@types/react-router-dom`이 설치 대상으로 남아 있다.
- 런타임 의존성과 개발 의존성 구분이 불명확하다.
- Node 및 패키지 매니저 버전이 고정되어 있지 않다.
- ESLint에 React Hooks 규칙이 설치만 되어 있고 활성화되어 있지 않다.

관련 파일:

- `package.json`
- `tsconfig.json`
- `eslint.config.mjs`
- `src/assets/data/SkillsList.ts`
- `src/components/exhibitions/Intro.tsx`

### P1 — 라우팅과 상태 관리

현재 프로젝트 선택 흐름:

```text
PrjList
  → Zustand에 프로젝트 제목과 devOpen 저장
  → Detail effect 실행
  → 상세 영역으로 스크롤
  → 1.4초 뒤 devOpen 초기화
  → 제목 문자열로 상세 컴포넌트 선택
```

문제:

- 상세 프로젝트 URL이 없어 새로고침, 공유, 뒤로가기가 자연스럽지 않다.
- 프로젝트 제목이 화면 문구이자 식별자로 사용된다.
- 빠르게 프로젝트를 바꾸면 `devOpen`이 이미 `true`여서 effect가 다시 실행되지 않을 수 있다.
- `store.tsx`의 `currentPage`, `naviModal`, `contactModal`, `XBtn` 상태는 사용되지 않는다.
- 컴포넌트가 selector 없이 Zustand 전체 store를 구독한다.
- Contact는 로컬 상태를 사용하므로 현재 전역 store가 꼭 필요하지 않다.

목표:

```text
/work/:projectSlug
  → route param
  → typed project registry
  → ProjectDetail
  → 공통 ProjectSection renderer
```

- 프로젝트 선택의 단일 진실 공급원은 URL로 둔다.
- 기존 `/develope` 주소는 새 `/work` 주소로 리다이렉트해 호환성을 유지한다.
- 다른 전역 요구사항이 생기지 않는다면 Zustand를 제거한다.

관련 파일:

- `src/store.tsx`
- `src/components/develope/PrjList.tsx`
- `src/components/develope/Detail.tsx`
- `src/App.tsx`

### P1 — 프로젝트 상세 구조

현재는 `LeftImage`, `RightImage`, `Left1Image`, `RightFullImage`, `MobileSource`처럼 배치마다 별도 컴포넌트를 사용한다. 각 프로젝트 상세 페이지도 유사한 JSX를 반복한다.

목표 타입의 예시:

```ts
type ProjectId =
  | "today-cocktail"
  | "piaenm"
  | "pada"
  | "portfolio"
  | "ddd"
  | "findway";

type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

type ProjectSection = {
  id: string;
  layout: "media-left" | "media-right" | "full" | "mobile";
  title: string;
  description: string;
  media: ProjectMedia;
  theme?: "light" | "dark";
};

type Project = {
  id: ProjectId;
  slug: string;
  title: string;
  period: string;
  summary: {
    team: string;
    role: string;
    duration: string;
    description: string;
  };
  stack: string[];
  sections: ProjectSection[];
};
```

원칙:

- 프로젝트 데이터 파일에는 JSX 요소를 저장하지 않는다.
- 이미지와 영상은 파일명 검사 대신 `type`으로 구분한다.
- `align: string`, `items: string`, `devPage: string`처럼 범위가 넓은 타입을 사용하지 않는다.
- `desc1[0]` 같은 위치 기반 데이터 대신 이름이 있는 객체를 사용한다.
- 한 프로젝트부터 새 구조로 옮겨 화면을 비교한 뒤 나머지를 순차 이전한다.

### P1 — 스크롤과 포인터 성능

다음 컴포넌트가 스크롤 또는 마우스 이동마다 React state를 갱신한다.

- `src/components/home/Hello.tsx`
- `src/components/develope/MainWork.tsx`
- `src/components/exhibitions/IntroItems.tsx`
- `src/components/develope/PrjList.tsx`

문제:

- 스크롤 이벤트마다 컴포넌트 트리가 다시 렌더링된다.
- `MainWork`는 매번 `width`를 변경해 레이아웃 계산을 유발한다.
- `MainWork`의 width 계산에는 최대값이 없어 100%를 초과한다.
- 프로젝트 카드의 커스텀 커서는 `mousemove`마다 여러 state를 갱신한다.

개선 원칙:

- 크기보다 `transform`과 `opacity`를 우선 사용한다.
- 연속 이벤트는 `requestAnimationFrame`으로 프레임당 한 번 반영한다.
- React 렌더링이 필요 없는 위치 값은 ref 또는 CSS 변수로 전달한다.
- 읽기 전용 스크롤 listener에는 가능한 경우 `passive: true`를 사용한다.
- `prefers-reduced-motion` 환경에서는 장식 애니메이션과 자동재생을 줄인다.

### P1 — Tailwind 정확성

다음 패턴은 Tailwind가 정적으로 찾을 수 없어 CSS가 생성되지 않는다.

```tsx
`items-${items}`
```

발견된 의심 클래스:

- `items-${items}`
- `w-3xl`
- `max-w-8xl`
- `border-1`
- `min-h-76`
- `transition-width`
- `bg-red-00`, `bg-green-00`, `bg-yellow-00`

개선 원칙:

```ts
const alignClass = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
} as const;
```

- 완성된 클래스 이름만 소스에 작성한다.
- 공통 색상과 간격은 CSS 변수 또는 Tailwind theme token으로 정의한다.
- 임시 디버그 클래스와 주석 처리된 코드를 제거한다.

### P2 — Hook과 공통 로직

Intersection Observer 구현이 두 개 존재한다.

- `src/hooks/useIntersectionObserver.ts`
- `src/components/common/IntersectionObserver.tsx`

현재 Hook은 inline refs 배열 때문에 observer가 반복 생성될 수 있고 callback 의존성이 누락되어 있다. cleanup 시점의 `ref.current`가 처음 관찰한 노드와 다를 가능성도 있다.

목표:

- Intersection Observer 구현을 하나로 통합한다.
- 관찰 노드를 effect 내부 지역 변수로 캡처한다.
- cleanup은 `observer.disconnect()`를 사용한다.
- callback 참조를 안정화한다.
- 필요하면 `once`, `threshold`, `rootMargin` 옵션을 명시적으로 제공한다.
- 각 페이지에 반복된 `window.scrollTo`는 라우터 레벨의 공통 처리로 옮긴다.

### P2 — 접근성

- 네비게이션을 클릭 가능한 `li` 대신 `Link` 또는 `button`으로 만든다.
- 프로젝트 카드를 키보드로 접근 가능한 링크로 만든다.
- Contact 패널을 `role="dialog"`, `aria-modal`, 제목 연결이 있는 dialog로 만든다.
- dialog가 열릴 때 포커스를 이동하고 닫을 때 원래 위치로 복구한다.
- Escape 종료, backdrop 클릭 종료, body scroll lock을 지원한다.
- 아이콘 전용 버튼에 접근 가능한 이름을 제공한다.
- 이미지 URL을 alt로 사용하지 않는다.
- 문서에 `main`, `nav`, `section`, 제목 계층을 적용한다.
- autoplay UI와 영상은 reduced-motion 설정을 존중한다.

### P2 — 번들 및 에셋

- 페이지 route를 `React.lazy`로 분할한다.
- 프로젝트 상세 페이지도 프로젝트 단위 또는 상세 route 단위로 분할한다.
- Home 진입 시 상세 프로젝트 영상이 요청되지 않도록 한다.
- 이미지에는 적절히 `loading="lazy"`, `decoding="async"`, 크기 정보를 적용한다.
- 영상은 압축하고 `poster`, `preload="metadata"`를 검토한다.
- 사용하지 않는 JPG 원본은 실제 참조 여부를 확인한 뒤 제거하거나 빌드 외부로 옮긴다.
- 삭제 전 `rg`와 빌드 결과로 미사용 여부를 반드시 확인한다.

### P2 — 품질 자동화

- ESLint에 TypeScript, React Hooks 권장 규칙을 실제로 적용한다.
- 접근성 검사를 위해 `eslint-plugin-jsx-a11y` 도입을 검토한다.
- formatting과 correctness lint의 역할을 분리한다.
- `typecheck`, `lint`, `test`, `build` 스크립트를 명확히 둔다.
- GitHub Actions에서 clean install 후 모든 검증을 실행한다.
- Node와 패키지 매니저 버전을 고정한다.

## 5. 목표 디렉터리 구조

작은 포트폴리오에 과도한 계층을 만들지 않는다. 아래 구조를 기준으로 하되 실제 리팩터링 과정에서 단순화할 수 있다.

```text
src/
  app/
    App.tsx
    router.tsx
    AppLayout.tsx
  pages/
    home/
    work/
    exhibitions/
  features/
    projects/
      project.types.ts
      project.registry.ts
      ProjectList.tsx
      ProjectDetail.tsx
      ProjectSection.tsx
  components/
    common/
    contact/
  hooks/
  assets/
    images/
    video/
```

구조 규칙:

- 라우팅과 전역 레이아웃은 `app`에 둔다.
- 프로젝트 도메인에만 쓰이는 타입, 데이터, UI는 같은 feature에 둔다.
- 여러 feature에서 재사용되는 UI만 `components/common`에 둔다.
- 파일과 폴더는 소문자 또는 일관된 PascalCase 규칙을 사용하고 import 경로의 대소문자를 정확히 맞춘다.
- `Develope`, `Prj`, `Thumnail`, `Snipet`, `pht` 같은 축약 및 오탈자는 단계적으로 정리한다.

## 6. 실행 계획

### Phase 0 — 빌드 기반 복구

- [x] 패키지 설치 후 현재 오류 전체 기록
- [x] assets 경로를 일관된 소문자로 정규화
- [x] 모든 import 경로 대소문자 수정
- [x] 잘못된 `tsconfig` include 제거
- [x] 불필요한 `@types/react-router-dom` 제거
- [x] dependencies와 devDependencies 재분류
- [x] Node 및 Yarn 버전 고정
- [x] `typecheck`, `lint`, `format:check`, `build` 스크립트 정리
- [x] ESLint React Hooks 규칙 활성화
- [ ] 모든 검증 명령 통과

완료 조건:

- 새 clone과 Linux CI에서 설치 및 빌드가 성공한다.
- TypeScript 오류와 ESLint warning이 0개다.
- 이 단계에서는 화면과 콘텐츠를 의도적으로 바꾸지 않는다.

### Phase 1 — 라우팅과 상태 재설계

- [x] `ProjectId`와 slug 타입 정의
- [x] `/work` 목록 route 추가
- [x] `/work/:projectSlug` 상세 route 추가
- [x] 기존 `/develope` 호환 redirect 추가
- [x] 제목 문자열 기반 상세 분기 제거
- [x] `devOpen`과 1.4초 timer 제거
- [x] 프로젝트 관련 Zustand 상태 제거
- [x] 사용하지 않는 store 상태 제거
- [ ] 404 route 추가
- [x] 잘못된 slug를 `/work`로 redirect
- [x] route 전환 시 스크롤 처리 통합
- [x] 페이지 route lazy loading 적용

완료 조건:

- 프로젝트 상세 URL을 직접 열고 새로고침할 수 있다.
- 브라우저 뒤로가기와 앞으로가기가 예상대로 작동한다.
- 프로젝트 선택을 위해 전역 상태나 timer가 필요하지 않다.

### Phase 2 — 프로젝트 상세 데이터화

- [ ] 프로젝트 schema와 registry 작성
- [ ] summary 배열을 이름 있는 객체로 변경
- [ ] media discriminated union 적용
- [ ] 공통 `ProjectSection` 작성
- [ ] 프로젝트 한 개를 새 renderer로 이전하고 화면 비교
- [ ] 나머지 프로젝트 순차 이전
- [ ] `LeftImage`, `RightImage` 등 중복 컴포넌트 제거
- [ ] data 파일에서 JSX와 Tailwind 표현 제거
- [ ] stack 조회를 타입 안전한 map으로 변경

완료 조건:

- 새 프로젝트는 registry 데이터 추가만으로 대부분 구성할 수 있다.
- 프로젝트별 상세 컴포넌트의 JSX 복제가 사라진다.
- 잘못된 layout, media type, project id는 컴파일 단계에서 차단된다.

### Phase 3 — 스타일과 애니메이션 정리

- [ ] 동적 Tailwind 클래스 제거
- [ ] 유효하지 않은 Tailwind 및 디버그 클래스 제거
- [ ] 색상, spacing, radius token 정리
- [ ] Intersection Observer 구현 통합
- [ ] 스크롤 listener 공통화
- [ ] 스크롤 state 업데이트를 RAF 또는 CSS 기반으로 전환
- [ ] `width` 애니메이션을 transform 중심으로 변경
- [ ] mousemove 커서를 ref 또는 CSS 변수 기반으로 변경
- [ ] reduced-motion 스타일 추가

완료 조건:

- 스크롤 중 불필요한 React 렌더링이 지속적으로 발생하지 않는다.
- 런타임 문자열로 생성되는 Tailwind 클래스가 없다.
- 애니메이션이 꺼진 환경에서도 정보와 기능을 사용할 수 있다.

### Phase 4 — 접근성 개선

- [ ] nav와 프로젝트 카드의 시맨틱 요소 수정
- [ ] Contact dialog 접근성 구현
- [ ] 키보드 focus 스타일과 이동 순서 검증
- [ ] 아이콘 버튼의 accessible name 추가
- [ ] 이미지 alt 정책 적용
- [ ] heading 계층과 landmark 정리
- [ ] carousel과 autoplay 제어 검증
- [ ] 모바일 및 키보드 전용 사용 흐름 점검

완료 조건:

- 마우스 없이 주요 페이지와 프로젝트 상세에 접근할 수 있다.
- dialog를 열고 닫을 때 포커스가 올바르게 관리된다.
- 자동재생 콘텐츠를 사용자가 제어할 수 있다.

### Phase 5 — 에셋과 번들 최적화

- [ ] route별 chunk 생성 확인
- [ ] 초기 페이지에서 불필요한 프로젝트 asset 요청 제거
- [ ] 이미지 lazy loading과 크기 속성 적용
- [ ] 대형 이미지 포맷과 해상도 점검
- [ ] 영상 압축, poster, preload 전략 적용
- [ ] 미사용 asset 목록 작성 후 안전하게 제거
- [ ] production build 결과와 네트워크 요청 비교

완료 조건:

- Home 초기 진입 시 상세 페이지 영상이 다운로드되지 않는다.
- 사용자가 프로젝트 상세를 열 때 필요한 asset만 로드된다.
- 변경 전후 build 산출물 크기가 기록되어 있다.

### Phase 6 — 테스트, CI, 최종 정리

- [ ] Vitest와 React Testing Library 기반 단위/통합 테스트 구축
- [ ] project slug 조회 및 잘못된 slug 테스트
- [ ] navigation, project card, dialog 동작 테스트
- [ ] 상세 URL 직접 진입 및 back navigation E2E 테스트
- [ ] GitHub Actions 검증 workflow 추가
- [ ] dead code와 미사용 dependency 제거
- [ ] 오탈자 파일 및 컴포넌트 이름 정리
- [ ] README의 개발 및 배포 방법 갱신
- [ ] 안정화 후 의존성 업그레이드 별도 수행

완료 조건:

- PR 또는 push마다 typecheck, lint, test, build가 자동 실행된다.
- 핵심 사용자 흐름을 자동 테스트로 보호한다.
- 저장소를 처음 받은 사람이 문서만 보고 실행할 수 있다.

## 7. 검증 명령 기준

Phase 0에서 실제 스크립트를 정리한 뒤 아래 명령을 표준으로 사용한다.

```bash
yarn install --frozen-lockfile
yarn typecheck
yarn lint
yarn test
yarn build
```

추가 수동 검증:

- `/`, `/work`, `/work/:slug`, `/exhibitions` 직접 진입
- 브라우저 back/forward
- 360px, 768px, 1280px 이상 레이아웃
- 키보드 Tab, Enter, Space, Escape
- reduced-motion 환경
- production build의 asset 요청과 chunk 구성
- `/portfolio` 하위 경로

## 8. 작업 시 지켜야 할 안전 규칙

- 사용자 콘텐츠 문구는 코드 구조 이전 과정에서 임의로 수정하지 않는다.
- 사용 여부를 확인하지 않은 asset을 삭제하지 않는다.
- 구조 변경과 대규모 dependency upgrade를 같은 작업에 넣지 않는다.
- 기존 URL을 제거할 때는 redirect를 먼저 제공한다.
- 한 단계가 green 상태가 되기 전에 다음 단계로 넘어가지 않는다.
- 시각적으로 동일해야 하는 리팩터링은 변경 전후 화면을 비교한다.
- 관련 없는 기존 사용자 변경을 되돌리지 않는다.

## 9. 세션 재개 절차

새 세션에서는 다음 순서로 시작한다.

1. 이 문서를 끝까지 읽는다.
2. `git status --short --branch`와 `git diff`를 확인한다.
3. 아래 진행 현황에서 현재 Phase를 찾는다.
4. 해당 Phase의 첫 번째 미완료 체크박스부터 작업한다.
5. 변경 범위에 맞는 검증 명령을 실행한다.
6. 체크박스와 작업 기록을 갱신한다.
7. 다음 세션이 바로 이어갈 수 있도록 `다음 작업`을 구체적으로 남긴다.

## 10. 진행 현황

| Phase | 상태 | 비고 |
| --- | --- | --- |
| 진단 | 완료 | 코드, 설계, 성능, 접근성, 빌드 구조 점검 |
| Phase 0 | 완료 | 빌드 기반 복구 |
| Phase 1 | 진행중 | 라우팅과 상태 재설계 |
| Phase 2 | 대기 | 프로젝트 상세 데이터화 |
| Phase 3 | 대기 | 스타일과 애니메이션 정리 |
| Phase 4 | 대기 | 접근성 개선 |
| Phase 5 | 대기 | 에셋과 번들 최적화 |
| Phase 6 | 대기 | 테스트, CI, 최종 정리 |

현재 다음 작업:

> Phase 1의 남은 작업은 404 route와 라우팅 동작의 자동 테스트다. 이후 Phase 2 상세 데이터 모델링을 시작한다.

## 11. 작업 기록

각 작업이 끝날 때 아래 형식으로 추가한다.

```md
### YYYY-MM-DD — 작업 제목

- Phase:
- 변경 내용:
- 변경 파일:
- 검증 명령과 결과:
- 남은 문제:
- 다음 작업:
```

### 2026-08-05 — 초기 진단 및 계획 수립

- Phase: 진단
- 변경 내용: 코드 품질과 설계 관점의 문제를 분류하고 단계별 리팩터링 계획을 작성했다.
- 변경 파일: `docs/refactor.md`
- 검증 명령과 결과: 저장소 구조, Git 상태, 소스 사용처를 정적으로 점검했다. `node_modules`가 없어 완전한 build와 lint는 아직 실행하지 못했다.
- 남은 문제: Phase 0 전체
- 다음 작업: 의존성 설치 후 build/typecheck/lint 오류를 기록하고 경로 대소문자 문제부터 수정한다.

### 2026-08-05 — Phase 0 빌드 기반 복구

- Phase: Phase 0
- 변경 내용: assets import 경로 대소문자 정리, `tsconfig`의 존재하지 않는 include 제거, Router v5 타입 패키지 제거, typecheck 스크립트 추가, ESLint 9용 lint 명령 수정, React Hooks 기본 규칙 활성화
- 변경 파일: `package.json`, `yarn.lock`, `tsconfig.json`, `eslint.config.mjs`, 관련 import 파일
- 검증 명령과 결과: `yarn install`, `yarn typecheck`, `yarn lint`, `yarn build` 통과. build 시 Browserslist 데이터 갱신 경고만 남아 있다.
- 남은 문제: dependency 분류, Node/Yarn 버전 고정, format/test 명령, Browserslist 갱신 여부
- 다음 작업: Phase 0을 마무리한 뒤 URL 기반 프로젝트 라우팅(Phase 1)을 시작한다.

### 2026-08-05 — Phase 1 URL 기반 프로젝트 선택

- Phase: Phase 1
- 변경 내용: 프로젝트 slug 타입과 registry 필드 추가, `/work/:projectSlug` route 추가, 기존 `/develope` redirect 추가, 프로젝트 선택을 URL navigation으로 변경, Zustand 프로젝트 상태와 timer 제거
- 변경 파일: `src/App.tsx`, `src/pages/Develope.tsx`, `src/components/develope/PrjList.tsx`, `src/components/develope/Detail.tsx`, `src/components/develope/Stack.tsx`, `src/components/common/Navigator.tsx`, `src/assets/data/DevPrjData.tsx`, `src/store.tsx`
- 검증 명령과 결과: `yarn typecheck`, `yarn lint`, `yarn format:check`, `yarn build` 통과. Browserslist 데이터 갱신 경고만 남아 있다.
- 남은 문제: 404 route, 자동 테스트
- 다음 작업: 프로젝트 route의 테스트 기반을 만든 뒤 Phase 2의 상세 데이터 모델링으로 넘어간다.

### 2026-08-05 — Phase 1 route 안정화와 lazy loading

- Phase: Phase 1
- 변경 내용: 잘못된 project slug를 `/work`로 redirect하고, 페이지 및 프로젝트 상세 컴포넌트를 lazy loading으로 분리했다.
- 변경 파일: `src/App.tsx`, `src/pages/Develope.tsx`, `src/components/develope/Detail.tsx`
- 검증 명령과 결과: `yarn typecheck`, `yarn lint`, `yarn format:check`, `yarn build` 통과. 상세 컴포넌트가 별도 JS chunk로 생성되는 것을 확인했다.
- 남은 문제: 404 route의 명시적 화면, 라우팅 동작 자동 테스트
- 다음 작업: 프로젝트 route의 테스트 기반을 만든 뒤 Phase 2의 상세 데이터 모델링으로 넘어간다.

### 2026-08-05 — 공통 Hook과 Tailwind utility 정리

- Phase: Phase 3 일부 선행 작업
- 변경 내용: Intersection Observer 구현을 단일 Hook으로 정리하고 cleanup을 `disconnect()`로 통일했다. observer callback과 refs를 안정화했다. 동적 `items-${items}` 클래스를 정적 class map으로 교체하고 일부 유효하지 않은 Tailwind utility를 수정했다.
- 변경 파일: `src/hooks/useIntersectionObserver.ts`, `src/components/home/*`, `src/components/detail/detailLayout.ts`, 관련 상세 레이아웃 컴포넌트
- 검증 명령과 결과: `yarn typecheck`, `yarn lint`, `yarn format:check`, `yarn build` 통과. 개발 서버 `/portfolio`, `/portfolio/work` 응답 200 확인.
- 남은 문제: 전체 상세 UI 데이터화, 남은 debug/유효하지 않은 utility, 접근성
- 다음 작업: Phase 2 프로젝트 상세 데이터를 typed section model로 이전한다.




오늘 작업은 크게 4가지입니다.

  1. 빌드 기반 복구

  - Images/Video 대소문자 경로 문제 수정
  - TypeScript 설정 오류 수정
  - ESLint 9 대응
  - Prettier 설정 통일
  - Node 22.22.2, Yarn 1.22.19 고정
  - 미사용 dependency 정리

  2. 프로젝트 라우팅 변경

  기존:

  /develope

  변경:

  /work
  /work/findway
  /work/ddd
  /work/portfolio
  /work/pada
  /work/piaenm
  /work/today-cocktail

  기존 /develope 주소는 /work로 redirect됩니다.

  3. 전역 상태 제거

  기존에는 프로젝트 클릭 시 Zustand에 제목을 저장하고 timer로 상세 화면을 열었습니다.

  이제는 URL의 slug를 기준으로 프로젝트를 선택합니다.

  - 프로젝트 제목 기반 분기 제거
  - devOpen, devPage 제거
  - 사용하지 않던 store.tsx 삭제
  - 새로고침·공유·뒤로가기가 가능한 구조로 변경

  4. 성능·코드 구조 기초 정리

  - 페이지와 프로젝트 상세 lazy loading 적용
  - 프로젝트별 JS chunk 분리
  - Intersection Observer 구현 통합
  - observer cleanup 안정화
  - 동적 Tailwind 클래스 제거
  - 잘못된 Tailwind 클래스 일부 수정

  참고로 여러 파일이 바뀐 이유 중 상당 부분은 실제 기능 변경이 아니라 import 경로 수정과 Prettier 포맷 정리입니다. 콘텐츠는 수정하지 않았고, 현
  재 typecheck, lint, format:check, build는 모두 통과합니다.

  아직 안 한 것:

  - 상세 컴포넌트 데이터화
  - 404 화면
  - 자동 테스트
  - Contact와 프로젝트 카드 접근성 개선
  - 스크롤 애니메이션 최적화

  다음은 상세 페이지 JSX 중복을 데이터 기반 구조로 통합하는 단계입니다.
