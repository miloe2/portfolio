import React from "react";
interface FullImageProps {
  img: string;
  title: string;
  desc: string;
  txtColor: string;
}

const FullImage: React.FC<FullImageProps> = ({ img, txtColor, title, desc }) => {
  return (
    <div
      className={`w-full h-screen flex relative items-center bg-cover bg-center`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="ring-4 absolute top-1/2 -translate-y-1/2 left-1/12">
        <div
          className="text-4xl/12 font-bold whitespace-pre-line py-2 "
          style={{ color: txtColor }}
        >
          {title}
        </div>
        <div className="text-sm/6 whitespace-pre-line ">{desc}</div>
      </div>
    </div>
  );
};

export default FullImage;
