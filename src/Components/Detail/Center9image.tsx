import React from 'react';
interface Center9imageProps {
    bgColor :string;
    img1 :string;
    img2 :string;
    img3 :string;
    img4 :string;
    img5 :string;
    img6 :string;
    img7 :string;
    img8 :string;
    img9 :string;
}
const Center9image :React.FC<Center9imageProps>= ({bgColor, img1, img2, img3, img4, img5, img6, img7, img8, img9}) => {
    return (
        <div className='w-screen h-auto border-0 mb-60'>
<div className={`w-full h-auto pt-32 grid grid-cols-1 gap-4 lg:px-20 px-10
  lg:grid-cols-3 md:grid-cols-2`}
  style={{ backgroundColor : bgColor}}>
{/* <div className={`bg-${bgColor} w-full h-auto pt-32 grid grid-cols-3 grid-rows-3 gap-4 px-20
  lg:grid-cols-3 lg:px-44 md:grid-cols-2 md:px-20 sm:grid-cols-1`}> */}
                <div className="bg-red-500 w-auto h-full"><img src={img1} alt="" className='w-full h-full object-cover'/></div>
                <div className="bg-green-500 w-full h-full"><img src={img2} alt=""  className='w-full h-full object-cover'/></div>
                <div className="bg-blue-500 w-full h-full"><img src={img3} alt="" className='w-full h-full object-cover'/></div>
                <div className="bg-yellow-500 w-full h-full"><img src={img4} alt=""  className='w-full h-full object-cover'/></div>
                <div className="bg-purple-500 w-full h-full"><img src={img5} alt="" className='w-full h-full object-cover'/></div>
                <div className="bg-orange-500 w-full h-full"><img src={img6} alt=""  className='w-full h-full object-cover'/></div>
                <div className="bg-pink-500 w-full h-full"><img src={img7} alt=""  className='w-full h-full object-cover'/></div>
                <div className="bg-teal-500 w-full h-full"><img src={img8} alt="" className='w-full h-full object-cover'/></div>
                <div className="bg-indigo-500 w-full h-full"><img src={img9} alt="" className='w-full h-full object-cover'/></div>
            </div>
        </div>
    );
};

export default Center9image;