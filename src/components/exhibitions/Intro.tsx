import BGItemsBG from "../../assets/Images/photos/BGItemsBG.jpg";
import IntroItems from "./IntroItems";

const Intro = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="flex w-screen h-screen relative overflow-hidden"
      style={{backgroundImage: `url(${BGItemsBG}) `}}>
        <IntroItems/>
        <div className="bg-gradient-to-t from-black to-transparent w-screen h-6 absolute bottom-0 " />
      </div>
    </div>
  );
};

export default Intro;
