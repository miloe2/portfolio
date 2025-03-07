import Text from "../common/Text";
import TitleText from "../common/TitleText";

interface MobileSourceProps {
  bgColor?: string;
  txtColor: string;
  title: string;
  desc: string;
  source: string;
  align: string;
}
// bg-${bgColor}
const MobileSource: React.FC<MobileSourceProps> = ({
  bgColor = "",
  txtColor,
  title,
  desc,
  source,
  align,
}) => {
  return (
    <div
      className={`max-w-7xl h-full mx-auto flex relative items-center mb-60
        ${align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} 
        flex-col-reverse`}
    >
      <div className={`lg:w-1/2 w-full h-auto flex`} style={{ backgroundColor: bgColor }}>
        <div className="w-full flex justify-center h-160">
          {source.includes("mp4") ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full object-cover rounded-xl ring-8 ring-zinc-950 overflow-hidden shadow-2xl"
            >
              <source src={source} type="video/mp4" />
            </video>
          ) : (
            <img
              src={source}
              alt=""
              className="h-full object-cover rounded-xl ring-8 ring-zinc-950 overflow-hidden shadow-2xl"
            />
          )}
        </div>
      </div>
      <div className="w-80 mx-auto lg:mb-0 mb-6">
        <TitleText title={title} txtColor={txtColor} />
        <Text desc={desc} />
      </div>
    </div>
  );
};

export default MobileSource;
