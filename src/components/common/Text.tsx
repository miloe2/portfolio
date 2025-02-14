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
      {desc}
    </p>
  );
};

export default Text;
