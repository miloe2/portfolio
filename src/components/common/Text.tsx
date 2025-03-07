import { memo, useMemo } from "react";

interface TextProps {
  txtColor?: string;
  className?: string;
  size?: "lg" | "base" | "sm" | "xs";
  desc: string;
}

const Text: React.FC<TextProps> = ({ txtColor = "#0B0D0F", size = "base", className, desc }) => {
  const sizeClass = size === "lg" ? "text-lg"
    : size === "base" ? "text-base/8"
    : size === "sm" ? "text-sm"
    : "text-xs";

  const processedDesc = useMemo(
    () =>
      desc.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index !== desc.split("\n").length - 1 && <br />}
        </span>
      )),
    [desc]
  );

  return (
    <p className={`${className} ${sizeClass}`} style={{ color: txtColor }}>
      {processedDesc}
    </p>
  );
};

// ✅ memo의 areEqual을 활용하여 props가 변경되지 않으면 재렌더링 방지
export default memo(Text, (prevProps, nextProps) =>
  prevProps.desc === nextProps.desc &&
  prevProps.txtColor === nextProps.txtColor &&
  prevProps.size === nextProps.size &&
  prevProps.className === nextProps.className
);
