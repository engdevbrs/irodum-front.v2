import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../utils/Loading";
import TabSection from "../../TabSection";
import Breadcumb2 from "../../Breadcumb2";
import BreadcumbServiceSingle from "../../BreadcumbServiceSingle"
import ServiceDetail from "./ServiceDetail";

// export const metadata = {
//   title:
//     "Irodum - Freelance Marketplace React/Next Js Template | Service Single",
// };

export default function ServiceSingle() {

  const { id } = useParams();
  
  const [ singleServicesData, setSingleServicesData ] = useState([])
  const [ singleInfoAboutService, setSingleInfoAboutService ] = useState([])
  const [ singleExtraServices, setSingleExtraServices ] = useState([])
  const [ aptitudes, setAptitudes ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Axios.get("https://www.services.irodum.com/api/get-services/" + id)
          .then((result) => {
              if(result.status === 200){
                setLoading(false);
                setSingleServicesData(result.data)
                setSingleInfoAboutService(JSON.parse(result.data.infoAboutService))
                setSingleExtraServices(JSON.parse(result.data.extraServices))
                let infoAboutParsed= JSON.parse(result.data.infoAboutService)
                setAptitudes((infoAboutParsed.aptitudes).split(","))
              }
          }).catch(error => {
                setSingleServicesData(error.response.status)
          });
  }, []);


  return (
    <>
      {
      loading === true ? <Loading /> 
      : 
        <>
          <Breadcumb2 path={["Home", "Servicios"]} />
          <BreadcumbServiceSingle infouser={ singleServicesData } infoservice={ singleInfoAboutService }/>
          <ServiceDetail infoservice={ singleServicesData } aptitudes={aptitudes}/>
        </>
      }
    </>
  );
}
