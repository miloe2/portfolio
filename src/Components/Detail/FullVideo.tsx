import React from 'react';

interface FullVideoProps {
  videoUrl: string;
  bgColor: string;
}

const FullVideo: React.FC<FullVideoProps> = ({ videoUrl, bgColor }) => {
  return (
    <div className={`w-full h-full bg-${bgColor} flex justify-center items-center p-24`}>
      <video autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default FullVideo;

