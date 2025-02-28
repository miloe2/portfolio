import React from "react";
import TitleText from "../common/TitleText";
import Text from "../common/Text";

interface LeftImageProps {
  bgColor: string;
  txtColor: string;
  images: string[];
  title: string;
  desc: string;
}

const Left3Image: React.FC<LeftImageProps> = ({ bgColor, txtColor, images, title, desc }) => {
  return (
    <div className="lg:w-[1240px] w-full h-full mx-auto flex lg:flex-row flex-col-reverse  relative justify-center items-center mb-60">
      <div
        className={`lg:w-1/2 w-full ring-0 h-full  flex justify-center items-center flex-col`}
        style={{ backgroundColor: bgColor }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-8/12 h-40 mb-10">
            <img src={img} alt={img} className="w-full h-full object-cover object-center " />
          </div>
        ))}
      </div>
      <div
        className={`lg:w-1/2 w-full  lg:mt-0 mt-4 h-full  flex justify-center items-center flex-col`}
      >
        <div className="w-80 mx-auto lg:mb-0 mb-6">
          <TitleText title={title} txtColor={txtColor} />
          <Text desc={desc} />
        </div>
      </div>
    </div>
  );
};

export default Left3Image;
