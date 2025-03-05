interface CareerDescriptionProps {
  title: string;
  type: string;
  desc: desc[];
}
interface desc {
  title: string;
  content: string | string[];
  icons?: string[];
  subText?: string;
}
const CareerDescription = ({ content }: { content: CareerDescriptionProps }) => {
  return (
    <div className="mx-auto max-w-[15rem]">
      {/* type text */}
      {content.type === "text" && (
        <div className=" w-full bg-yellow-00 ">
          <p className="font-bold text-lg mb-4">{content.title}</p>
          {content.desc.map((item, index) => (
            <div key={index} className="flex  text-sm mb-2">
              <p className="whitespace-pre-line min-w-[76px] mr-2">{item.title}</p>
              <p className="space-x-4">
                {item.content}
                {item.subText && <span className="text-zinc-500"> | {item.subText}</span>}
              </p>
            </div>
          ))}
        </div>
      )}
      {/* type text */}

      {/* type desc */}
      {content.type === "desc" && (
        <div className=" w-full bg-yellow-00">
          <p className="font-bold text-lg mb-4">{content.title}</p>
          {content.desc.map((item, index) => (
            <div key={index} className="flex flex-col text-sm mb-2">
              <p className="">{item.title}</p>
              <p className="text-zinc-400">({item.content})</p>
            </div>
          ))}
        </div>
      )}
      {/* type desc */}

      {/* type icon */}
      {content.type === "icon" && (
        <div className=" w-full bg-yellow-00">
          <p className="font-bold text-lg mb-4">{content.title}</p>
          {content.desc.map((item, index) => (
            <div key={index} className="flex flex-col text-sm mb-2">
              <p className="">{item.title}</p>
              <div className="flex">
                {item.icons?.map((icon, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <img
                      src={icon}
                      alt={icon}
                      className="w-4 h-4 mr-1 bg-zinc-200 rounded-full opacity-80"
                    />
                    <span className="mr-2 text-zinc-700">{item.content[index]}</span>
                  </div>
                ))}

                {/* <p className="font-medium">{item.content}</p> */}
              </div>
            </div>
          ))}
        </div>
      )}
      {/* type icon */}
    </div>
  );
};

export default CareerDescription;
