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
        <div className='w-screen h-screen border-0'>
            <div className={`bg-${bgColor} w-full h-full pt-32 grid grid-cols-3 grid-rows-3 gap-4 px-44`}>
                <div className="bg-red-500"><img src={img1} alt="" className='w-full h-full object-cover'/></div>
                <div className="bg-green-500"><img src={img2} alt=""  className='w-full h-full object-cover'/></div>
                <div className="bg-blue-500"><img src={img3} alt="" className='w-full h-full object-cover'/></div>
                <div className="bg-yellow-500"><img src={img4} alt=""  className='w-full h-full object-cover'/></div>
                <div className="bg-purple-500"><img src={img5} alt="" className='w-full h-full object-cover'/></div>
                <div className="bg-orange-500"><img src={img6} alt=""  className='w-full h-full object-cover'/></div>
                <div className="bg-pink-500"><img src={img7} alt=""  className='w-full h-full object-cover'/></div>
                <div className="bg-teal-500"><img src={img8} alt="" className='w-full h-full object-cover'/></div>
                <div className="bg-indigo-500"><img src={img9} alt="" className='w-full h-full object-cover'/></div>
            </div>
        </div>
    );
};

export default Center9image;