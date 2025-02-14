import React from "react";

interface FullVideoProps {
  videoUrl: string;
  bgColor: string;
}

const FullVideo: React.FC<FullVideoProps> = ({ videoUrl, bgColor }) => {
  return (
    <div
      className={`w-screen py-20 px-10 lg:px-0 flex justify-center items-center mb-60`}
      style={{ backgroundColor: bgColor }}
    >
      <video autoPlay loop muted playsInline>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default FullVideo;
