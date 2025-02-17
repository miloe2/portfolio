import React from "react";
interface prjSummaryProps {
  desc1: string[];
  desc2: string[];
  txtColor: string;
  themeColor: string;
}
const PrjSummary: React.FC<prjSummaryProps> = ({ desc1, desc2, txtColor }) => {
  const labels = ["인원", "역할", "기간"];

  return (
    <div className="lg:max-w-5xl sm:max-w-2xl h-full flex sm:flex-row flex-col text-left mx-auto mb-20 mt-10">
      <div className="sm:w-1/2 w-2/3  mx-auto min-w-[320px] flex flex-col px-0 ">
        <div className="text-3xl/12 font-bold">개요</div>
        <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-x-0 space-y-1 text-zinc-600 font-semibold mt-2">
          {labels.map((label, index) => (
            <div key={label} className="text-sm/6">
              {label}
              <span className="ml-2" style={{ color: txtColor }}>
                {desc1[index]}
              </span>
            </div>
          ))}
        </div>
        <p className="font-semibold mt-1 text-zinc-600 text-sm/6">{desc1[3]}</p>
      </div>
      <div className="sm:w-1/2 w-2/3 min-w-[320px]  mx-auto pl-0 lg:pl-0 sm:pl-20 mt-10 sm:mt-0">
        <div className={`text-3xl/12 font-bold `}>상세 내용</div>
        <ul className="grid lg:grid-cols-2 grid-cols-1 pl-4 gap-y-1 text-zinc-600 font-semibold mt-2 ">
          {desc2.map((desc, index) => {
            return (
              <li key={index} className="text-sm/6 list-disc ">
                {desc}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PrjSummary;
