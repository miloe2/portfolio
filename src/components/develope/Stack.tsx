import DevPrjData from "../../assets/data/DevPrjData";
import useStore from "../../store";
import StackCircle from "../detail/StackCircle";

const Stack = () => {
  const { devPage } = useStore();
  const project = DevPrjData.find((data) => data.title === devPage);

  if (!project) {
    return null; // 프로젝트가 없을 경우 렌더링하지 않음
  }

  return (
    <div className="w-3xl min-h-[300px] justify-center items-center flex ">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className=" mb-4 font-bold text-lg">사용기술</div>
        <div className="flex flex-wrap justify-center bg-zinc-100 rounded-xl px-4 pb-4 pt-6">
          {project.stack.map((stack, index) => (
            <StackCircle stack={stack} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
