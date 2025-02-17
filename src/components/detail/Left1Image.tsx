import React from "react";
import TitleText from "../common/TitleText";
import Text from "../common/Text";

interface Left1ImageProps {
  bgColor: string;
  img1: string;
  title: string;
  desc: string;
  txtColor: string;
}

const Left1Image: React.FC<Left1ImageProps> = ({ bgColor, txtColor, img1, title, desc }) => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center mb-60">
      <div className={`lg:mr-10 mr-0 p-6`} style={{ backgroundColor: bgColor }}>
        <img src={img1} alt={img1} className="" />
      </div>
      <div className={`flex flex-col min-w-[360px] lg:mb-0 mb-6`}>
        <TitleText title={title} txtColor={txtColor} />
        <Text desc={desc} />
      </div>
    </div>
  );
};

export default Left1Image;
