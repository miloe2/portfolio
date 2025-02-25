import tslogo from "../../assets/images/icon/Typescript_logo_2020.svg";
import Text from "../common/Text";
import TitleText from "../common/TitleText";

const TSLogoSnipet = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row mb-60 justify-center items-center">
      <div className="flex-col max-w-lg mx-auto flex space-y-7 pl-10 lg:pl-0">
        <div className="flex space-x-5">
          <div className="w-20 border-8 rounded-full border-fuchsia-400" />
          <div className="w-20 border-8 rounded-full border-orange-400 " />
          <div className="w-20 border-8 rounded-full border-yellow-400 " />
        </div>
        <div className="flex space-x-5">
          <div className="w-40 border-8 rounded-full border-blue-400 " />
          <div className="w-20 border-8 rounded-full border-rose-600 " />
          <div className="w-20 border-8 rounded-full border-orange-400 " />
        </div>
        <div className="flex space-x-5">
          <div className="w-40 border-8 rounded-full border-zinc-500 " />
          <div className="w-20 border-8 rounded-full border-green-600 " />
        </div>

        <div className="w-44 h-auto mt-10">
          <img src={tslogo} alt="" />
        </div>
        <div className="flex space-x-5">
          <div className="w-20 border-8 rounded-full border-rose-500 " />
          <div className="w-40 border-8 rounded-full border-green-200 " />
        </div>
        <div className="flex space-x-5">
          <div className="w-20 border-8 rounded-full border-blue-400 " />
          <div className="w-20 border-8 rounded-full border-blue-200 " />
          <div className="w-20 border-8 rounded-full border-orange-400 " />
        </div>
        <div className="flex space-x-5">
          <div className="w-20 border-8 rounded-full border-blue-700 " />
          <div className="w-40 border-8 rounded-full border-blue-400 " />
          <div className="w-20 border-8 rounded-full border-cyan-400 " />
        </div>
        <div className="flex space-x-5">
          <div className="w-20 border-8 rounded-full border-blue-500 " />
          <div className="w-20 border-8 rounded-full border-rose-600 " />
          <div className="w-40 border-8 rounded-full border-orange-400 " />
          <div className="w-20 border-8 rounded-full border-yellow-500 " />
          <div className="w-20 border-8 rounded-full border-blue-500 " />
        </div>
        <div className="flex space-x-5">
          <div className="w-20 border-8 rounded-full border-fuchsia-600 " />
          <div className="w-40 border-8 rounded-full border-yellow-500 " />
        </div>
      </div>
      <div className="w-full lg:w-full max-w-lg mx-auto mb-10 lg:mb-0 flex flex-col justify-center h-60 bg-[#FF5851] pl-10">
        <TitleText title={"Typescript"} txtColor="#0041AF" />
        <Text
          txtColor="white"
          desc="타입스크립트를 사용하여
        props의 안정성과 가독성을 높혔습니다."
        />
      </div>
    </div>
  );
};

export default TSLogoSnipet;
