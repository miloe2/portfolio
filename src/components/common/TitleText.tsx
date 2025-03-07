import { memo, useMemo } from "react";

interface TitleTextProps {
  txtColor: string;
  title: string;
}

const TitleText: React.FC<TitleTextProps> = ({ txtColor, title }) => {
  const processedTitle = useMemo(
    () =>
      title.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index !== title.split("\n").length - 1 && <br />}
        </span>
      )),
    [title]
  );

  return (
    <p className="lg:text-4xl/12 text-3xl/10 font-bold mb-4" style={{ color: txtColor }}>
      {processedTitle}
    </p>
  );
};

// ✅ `memo`의 `areEqual`을 활용하여 불필요한 리렌더링 방지
export default memo(TitleText, (prevProps, nextProps) =>
  prevProps.title === nextProps.title && prevProps.txtColor === nextProps.txtColor
);
