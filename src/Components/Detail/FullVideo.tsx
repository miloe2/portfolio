import React from 'react';

interface FullVideoProps {
  videoUrl: string;
  bgColor: string;
  padding: number
}

const FullVideo: React.FC<FullVideoProps> = ({ videoUrl, bgColor }) => {
  // const computedPadding = `p-${padding}`;
  // const computedBgColor = `bg-${bgColor}`;

  // console.log(computedBgColor)
  // console.log(computedPadding)
  // bg-[#0041AF]
  // p-40
  return (
    <div className={`w-screen h-auto lg:py-40 lg:px-0 py-20 px-10  flex justify-center items-center mb-40`}
    style={{ backgroundColor : bgColor}}>
      <video autoPlay loop muted playsInline>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default FullVideo;

