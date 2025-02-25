interface TextProps {
  txtColor?: string;
  className?: string;
  desc: string;
}
const Text = ({ txtColor='#0B0D0F', className, desc } : TextProps) => {
  return (
    <p
      className={`
        ${className?.includes('mt-') ? className : 'mt-4'}
        text-base/8
      `}
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
