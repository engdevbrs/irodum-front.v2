import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../utils/Loading";
import Breadcumb2 from "../Breadcumb2";
import FreelancerDetails from "./FreelancerDetails";
import Axios from "axios";

export default function FreelancerProfile() {

  const { id } = useParams();
  const [ loading, setLoading ] = useState(true)
  const [ singlefreelancersData, setSingleFreelancersData ] = useState([])
  const [ SingleFreelancerServiceData, setSingleFreelancerServiceData ] = useState([])


  useEffect(() => {
    Axios.get("https://www.services.irodum.com/api/get-freelancers/" + id)
          .then((result) => {
              if(result.status === 200){
                setSingleFreelancersData(result.data)
                Axios.get("https://www.services.irodum.com/api/services/freelancers/" + id)
                .then((result) => {
                    if(result.status === 200){
                      setSingleFreelancerServiceData(result.data)
                      setLoading(false);
                    }
                })
                .catch(error => {
                      setLoading(false);
                      setSingleFreelancersData(error.response.status)
                });
              }
          })
          .catch(error => {
                setLoading(false);
                setSingleFreelancersData(error.response.status)
          });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {
        loading === true ? <Loading /> 
        : 
        <>
        <Breadcumb2 path={["Home", "Freelancers"]} />
        <FreelancerDetails infofreelancers={singlefreelancersData} infoService={SingleFreelancerServiceData}/>
        </>
      }
    </>
  );
}
