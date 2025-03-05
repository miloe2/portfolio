import React from "react";
import gitIcon from "../../assets/Images/icon/GitHub_Logo.svg";
interface ViewCodeProps {
  bgColor: string;
  site: string;
  git?: string;
  txtColor: string;
  notice?: string;
}

const ViewCode: React.FC<ViewCodeProps> = ({ bgColor, txtColor, site, git, notice }) => {
  return (
    <div
      className={`w-full h-auto flex justify-center items-center py-10 space-x-4 lg:mb-40 mb-20`}
      style={{ backgroundColor: bgColor, color: txtColor }}
    >
      <div className="flex flex-col  w-auto h-auto ">
        <div className=" underline  font-semibold text-white">
          {site !== "#" ? (
            <a href={site} target="_blank" rel="noopener noreferrer">
              사이트 접속하기
            </a>
          ) : null}
        </div>
        {notice && <div className="no-underline text-sm font-normal">{notice}</div>}
      </div>
      {git && (
        <div className="w-8 h-8 bg-white rounded-full justify-center flex items-center">
          <a href={git} target="_blank" rel="noopener noreferrer">
            <img src={gitIcon} alt="GitHub" className="w-full h-full object-cover" />
          </a>
        </div>
      )}
    </div>
  );
};

export default ViewCode;
