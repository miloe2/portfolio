import { ImageUrl1, ImageUrl2, ImageUrl3 } from "../../assets/data/ExhibitData";
import { useEffect, useState } from "react";

const IntroItems = () => {
  const [scrollY, setScrollY] = useState(0);
  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const itemsList = [
    {
      id: 0,
      images: ImageUrl1,
      translateX: {
        sign: "",
        rate: 0.15,
        // amount: 0,
        amount: 40,
      },
    },
    {
      id: 1,
      images: ImageUrl2,
      translateX: {
        sign: "-",
        rate: 0.08,
        amount: 14,
        // amount: 0,
      },
    },
    {
      id: 2,
      images: ImageUrl3,
      translateX: {
        sign: "",
        rate: 0.3,
        amount: 30,
        // amount: 0,
      },
    },
    {
      id: 3,
      images: ImageUrl1,
      translateX: {
        sign: "-",
        rate: 0.03,
        amount: 10,
        // amount: 0,
      },
    },
    {
      id: 4,
      images: ImageUrl3,
      translateX: {
        sign: "",
        rate: 0.1,
        amount: 80,
        // amount: 0,
      },
    },
  ];

  return (
    <div
      className="absolute w-full space-y-4 xl:space-y-6 rotate-[20deg]
    translate-x-100 translate-y-60
    sm:translate-x-80 sm:translate-y-40
    lg:translate-x-40 lg:translate-y-20
    xl:translate-x-0 xl:translate-y-0 
    2xl:-translate-x-20 2xl:-translate-y-20 
    "
    >
      {itemsList.map((item) => (
        <div
          className="flex flex-nowrap space-x-4 xl:space-x-6 justify-end"
          key={item.id}
          style={{
            transform: `translateX(${(item.translateX.sign === "-" ? -1 : 1) * scrollY * item.translateX.rate + item.translateX.amount}%)`,
          }}
        >
          {item.images.map((photo, index) => (
            <figure
              key={index}
              className="relative flex w-72 h-48 xl:w-80 xl:h-60 rounded-xl bg-cover bg-center flex-shrink-0 shadow-2xl"
              style={{ backgroundImage: `url(${photo})` }}
            >
              {item.id === 1 && index === 3 ? null : (
                <div className="absolute bg-black opacity-50 w-full h-full rounded-xl" />
              )}
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
};

export default IntroItems;
