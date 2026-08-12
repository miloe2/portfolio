import type { DevProject } from "../../assets/data/DevPrjData";
import StackCircle from "../detail/StackCircle";

const Stack = ({ project }: { project: DevProject | undefined }) => {
  if (!project) {
    return null;
  }
  return (
    <div className="w-full max-w-3xl min-h-[300px] justify-center items-center flex ">
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
