import { useEffect } from "react";
import Career from "@/components/home/Career";
import WhatIDid from "@/components/home/WhatIDid";
import Hello from "@/components/home/Hello";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="pb-40">
      <Hello />
      <WhatIDid />
      <Career />
    </div>
  );
};

export default Home;
