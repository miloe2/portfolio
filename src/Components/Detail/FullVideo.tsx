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


// import React from 'react';
// import videoUrl from '../../assets/Video/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.mp4';


// const FullVideo = () => {
//     return (
//         <div className='w-full h-full bg-[#0041AF] flex justify-center items-center p-24'>
//             <video autoPlay loop muted >
//                 <source src={videoUrl} type="video/mp4" />
//             </video>
//         </div>
//     );
// };

// export default FullVideo;