import Breadcumb2 from "../Breadcumb2"
import ServicesList from "./ServicesList";
import Breadcumb3 from "../Breadcumb3";
import { useEffect } from "react";

export default function ServicesMain() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Breadcumb2 path={["Inicio", "Servicios", "Todos los servicios"]} />
      <Breadcumb3 />
      <ServicesList />
    </>
  );
}
