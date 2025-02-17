interface TextProps {
  txtColor?: string;
  className?: string;
  desc: string;
}
const Text = ({ txtColor='#0B0D0F', className, desc } : TextProps) => {
  return (
    <p
      className={`text-base/8 mt-4 ${className}`}
      style={{ color: txtColor}}
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
