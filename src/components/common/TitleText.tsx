interface TitleTextProps {
  txtColor: string;
  title: string;
}

const TitleText: React.FC<TitleTextProps> = ({ txtColor, title }) => {
  return (
    <h1 className="lg:text-4xl/12 text-3xl/10 font-bold mb-4" style={{ color: txtColor }}>
      {title.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index !== title.split("\n").length - 1 && <br />}
        </span>
      ))}
    </h1>
  );
};

export default TitleText;
