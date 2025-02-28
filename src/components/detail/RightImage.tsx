import React from "react";
import TitleText from "../common/TitleText";
import Text from "../common/Text";

interface RightImageLeftProps {
  bgColor: string;
  title: string;
  desc: string;
  img: string;
  items: string;
  txtColor: string;
}

const RightImage: React.FC<RightImageLeftProps> = ({
  bgColor,
  txtColor,
  title,
  desc,
  img,
  items,
}) => {
  return (
    <div className="max-w-7xl w-full mx-auto h-full flex lg:flex-row flex-col relative justify-end items-center mb-60">
      <div className={`lg:w-1/2 w-full h-full flex justify-center items-center flex-col mx-auto`}>
        <div className="w-80 lg:mb-0 mb-10 ">
          <TitleText title={title} txtColor={txtColor} />
          <Text desc={desc} />
        </div>
      </div>
      <div
        className={`lg:w-1/2 w-full h-auto py-20 flex justify-center items-${items} flex-col`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="lg:w-11/12 w-full h-auto">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default RightImage;
