import React from "react";
interface Center9imageProps {
  bgColor: string;
  images: string[];
}
const Center9image: React.FC<Center9imageProps> = ({ bgColor, images = [] }) => {
  return (
    <div
      className={`w-full h-auto pt-32 grid grid-cols-1 gap-4 lg:px-20 px-10 lg:grid-cols-3 md:grid-cols-2`}
      style={{ backgroundColor: bgColor }}
    >
      {images.map((img, idx) => (
        <div key={idx} className="w-full h-full">
          <img src={img} alt={img} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Center9image;
