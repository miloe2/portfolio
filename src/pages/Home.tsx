import { useEffect } from "react";
import Hello from "../components/home/Hello";
import Career from "../components/home/Career";
import FeaturedProjects from "../components/home/FeaturedProjects";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="pb-40">
      <Hello />
      <Career />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
