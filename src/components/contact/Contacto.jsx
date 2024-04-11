import ContactInfo from "./ContactInfo1";
import GoogleMap from "../../utils/GoogleMap"
import Breadcumb from "../Breadcumb";
import { useEffect } from "react";

export const metadata = {
  title: "Irodum - Freelance Marketplace React/Next Js Template | Contact",
};


export default function Contacto() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <>
    
      <Breadcumb
        title={"Contáctanos"}
        brief={`Nos encantaría hablar sobre cómo podemos ayudarle.`}
        isBtnActive={false}
      />
      <ContactInfo />
      <GoogleMap />
    </>
  );
}
