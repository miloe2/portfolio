import React from "react";
import { SkillsList } from "../../assets/data/SkillsList";

interface StackCircleType {
  stack: string;
}

const StackCircle = ({ stack }: StackCircleType) => {
  const stackSrc = SkillsList.find((item) => item.skill === stack);

  return (
    <React.Fragment>
      <div className="flex flex-col items-center mb-2">
        <div className="w-12 h-12 rounded-full border border-zinc-500 justify-center items-center flex">
          <div className="w-10 h-10 bg-white rounded-full border-zinc-300 border">
            <img
              className="w-full h-full object-cover rounded-full"
              src={stackSrc?.imgUrl}
              alt={stackSrc?.imgUrl}
            />
          </div>
        </div>
        <div className="text-xs mt-3 text-zinc-600 w-20 text-center"> {stack} </div>
      </div>
    </React.Fragment>
  );
};

export default StackCircle;
