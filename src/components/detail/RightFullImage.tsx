import React from "react";
import TitleText from "../common/TitleText";
import Text from "../common/Text";

interface RightFullImageProps {
  bgColor: string;
  title: string;
  desc: string;
  img: string;
  txtColor: string;
  descColor: string;
}
const RightFullImage: React.FC<RightFullImageProps> = ({
  bgColor,
  txtColor,
  descColor,
  title,
  desc,
  img,
}) => {
  return (
    <div
      className={`max-w-7xl w-full mx-auto flex flex-col lg:flex-row relative justify-end items-center mb-60 `}
    >
      <div
        className={`lg:w-1/2 w-full h-full p-16 flex items-start flex-col `}
        style={{ backgroundColor: bgColor }}
      >
        <TitleText title={title} txtColor={txtColor} />
        <Text desc={desc} txtColor={descColor} />
      </div>
      <div className={`lg:w-1/2 w-full h-3/4 flex justify-start items-start`}>
        <img src={img} alt={img} className="w-full h-full object-left-top object-cover shadow-md" />
      </div>
    </div>
  );
};

export default RightFullImage;
