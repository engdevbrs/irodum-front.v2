import Breadcumb4 from "../Breadcumb4";
import TabSection from "../TabSection"
import Breadcumb2 from "../Breadcumb2";
import FreelancersList from "./FreelancersList";
import { useEffect } from "react";

export default function FreelancerMain() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Breadcumb2 path={["Inicio", "Freelancers"]} />
      <Breadcumb4 />
      <FreelancersList />
    </>
  );
}
