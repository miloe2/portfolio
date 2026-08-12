import { useRef, useEffect } from "react";
import type { ComponentType } from "react";
import { useLocation, useParams } from "react-router-dom";
import DevPrjData, { type ProjectSlug } from "../../assets/data/DevPrjData";
import DetailDDD from "./DetailDDD";
import DetailPortfolio from "./DetailPortfolio";
import DetailFindway from "./DetailFindway";
import DetailPADA from "./DetailPADA";
import DetailPia from "./DetailPia";
import Stack from "./Stack";
import DetailTodaycocktail from "./DetailTodaycocktail";

const detailComponentBySlug: Record<ProjectSlug, ComponentType> = {
  findway: DetailFindway,
  ddd: DetailDDD,
  portfolio: DetailPortfolio,
  pada: DetailPADA,
  piaenm: DetailPia,
  "today-cocktail": DetailTodaycocktail,
};

const Detail = () => {
  const { projectSlug } = useParams();
  const location = useLocation();
  const routeProject = DevPrjData.find((project) => project.slug === projectSlug);
  const selectedProject = routeProject ?? DevPrjData[DevPrjData.length - 1];
  const DetailComponent = detailComponentBySlug[selectedProject.slug];

  const componentRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = () => {
    if (componentRef.current) {
      window.scrollTo({
        top: componentRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!location.state?.scrollToDetail) return;

    const frame = requestAnimationFrame(scrollToComponent);
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.state]);

  return (
    <div className="w-screen h-auto bg-white">
      <div ref={componentRef}>
        <Stack project={selectedProject} />
        <DetailComponent />
      </div>
    </div>
  );
};

export default Detail;
