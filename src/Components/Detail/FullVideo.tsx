import React from 'react';

interface FullVideoProps {
  videoUrl: string;
  bgColor: string;
  padding: number
}

const FullVideo: React.FC<FullVideoProps> = ({ videoUrl, bgColor, padding }) => {
  const computedPadding = `p-${padding}`;
  const computedBgColor = `bg-${bgColor}`;

  // console.log(computedBgColor)
  // console.log(computedPadding)
  // bg-[#0041AF]
  // p-40
  return (
    <div className={`w-full h-full ${computedPadding} ${computedBgColor} flex justify-center items-center `}>
      <video autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default FullVideo;

