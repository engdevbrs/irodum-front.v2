
import NeedSomething from "../NeedSomething";
import CtaBanner from "../CtaBanner";
import AboutArea from "./AboutArea";
import Breadcumb from "../Breadcumb";
import OurFaq from "../OurFaq";
import { useEffect } from "react";


export const metadata = {
  title:
    "Irodum - Freelance Marketplace React/Next Js Template | Become seller",
};


export default function MainRegister() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <>
      <Breadcumb
        title={"¡Únete a nuestro Marketplace de Oficios y haz que las cosas sucedan!"}
        brief={`🌍 Conectamos comunidades y construimos relaciones a través del intercambio de habilidades.`}
        isBtnActive={false}
      />
      <AboutArea />
      <CtaBanner />
      <NeedSomething />
      {/* <CounterInfo1 /> */}
      {/* <OurTeam1 /> */}
      <OurFaq />
    </>
  );
}
