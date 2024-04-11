import TabSection from "../TabSection";
import BreadcumbProjects from "../BreadcumbProjects"
import Breadcumb2 from "../Breadcumb2"
import ProjectsList from "./ProjectsList";
import { useEffect } from "react";

export const metadata = {
  title: "Irodum - Freelance Marketplace React/Next Js Template | Project 1",
};

export default function ProjectsMain() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Breadcumb2 path={["Inicio", "Projectos", "Todos los proyectos"]} />
      <BreadcumbProjects />
      <ProjectsList />
    </>
  );
}
