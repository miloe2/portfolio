import React from "react";
import TitleText from "../common/TitleText";
import Text from "../common/Text";
interface FullImageProps {
  img: string;
  title: string;
  desc: string;
  txtColor: string;
}

const FullImage: React.FC<FullImageProps> = ({ img, txtColor, title, desc }) => {
  return (
    <div
      className={`w-full h-screen flex relative items-center bg-cover bg-center mb-60`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-1/12 max-w-[360px]">
        <TitleText title={title} txtColor={txtColor} />
        <Text desc={desc} />
      </div>
    </div>
  );
};

export default FullImage;
