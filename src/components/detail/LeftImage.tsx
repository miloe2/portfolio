import React from "react";
import Text from "../common/Text";
import TitleText from "../common/TitleText";

interface LefttImageLeftProps {
  bgColor: string;
  txtColor: string;
  title: string;
  desc: string;
  source: string;
  items: string;
}
// bg-${bgColor}
const LeftImage: React.FC<LefttImageLeftProps> = ({
  bgColor,
  txtColor,
  title,
  desc,
  source,
  items,
}) => {
  return (
    <div
      className={`max-w-7xl h-full mx-auto flex relative items-center lg:flex-row flex-col-reverse mb-60 `}
    >
      <div
        className={`lg:w-1/2 w-full h-auto py-10 flex
            justify-center items-${items} flex-col `}
        style={{ backgroundColor: bgColor }}
      >
        <div className="w-full min-h-76">
          {source.includes("mp4") ? (
            <video autoPlay loop muted playsInline className="w-full h-full object-cover ">
              <source src={source} type="video/mp4" />
            </video>
          ) : (
            <img src={source} alt="" className="w-full h-full object-cover object-left" />
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

export default LeftImage;
