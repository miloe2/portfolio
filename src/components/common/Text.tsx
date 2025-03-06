interface TextProps {
  txtColor?: string;
  className?: string;
  size?: "lg" | "base" | "sm" | "xs";
  desc: string;
}
const Text = ({ txtColor = "#0B0D0F", size = "base", className, desc }: TextProps) => {
  const checkSize = (size: string) => {
    if (size === "lg") return "text-lg";
    if (size === "base") return "text-base/8";
    if (size === "sm") return "text-sm";
    if (size === "xs") return "text-xs";
  };

  return (
    <p
      className={`
        ${className}
        ${checkSize(size)}
      `}
      style={{ color: txtColor }}
    >
      {desc.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index !== desc.split("\n").length - 1 && <br />}
        </span>
      ))}
    </p>
  );
};

export default Text;
