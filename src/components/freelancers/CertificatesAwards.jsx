import React, { useEffect, useState } from "react";
import Axios from "axios"
import Loading from "../../utils/Loading";
import { useParams } from "react-router-dom";
import { Buffer } from "buffer";

const CertificatesAwards = () => {

    const { id } = useParams(); 
  const [getFreelancerCertificates, setFreelancerCertificates] = useState([])
  const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        Axios.get("https://www.services.irodum.com/api/view/freelancer/speciality/" + id)
          .then((result) => {
              if(result.status === 200){
                setFreelancerCertificates(result.data)
                setLoading(false);
              }
          })
          .catch(error => {
                setLoading(false);
                setFreelancerCertificates([])
          });
  }, []);
  return(
    <>
          {
        loading === true ? <Loading /> 
        :
        <>
        <hr className="opacity-100 mb60 mt60" />
        <h4 className="mb30">Certificaciones</h4>
        {
            getFreelancerCertificates.length >=1 ? 
            <>
            <div className="row">
            {
                getFreelancerCertificates.map((value,id)=>{
                    let specialityToString = Buffer.from(value.especialityDoc)
                    let speciality = JSON.parse(specialityToString)
                    return(
                    <div className="col-6 col-lg-4">
                        <div className="project-attach" key={id}>
                            <div className="navpill-style1">
                            <p className="nav-item">
                            <a href={"https://www.services.irodum.com/" + speciality.originalname} 
                                            target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} >Ver Archivo</a>
                            </p>
                            </div>
                            
                            <p>{value.fileType === "application/msword" ? "DOC" : value.fileType === "application/pdf" ? "PDF" : value.fileType === "IMAGEN"}</p>
                            <p>{value.especialityDescript}</p>
                            <span className="icon flaticon-page" />
                        </div>
                    </div>
                    )
                })
            }
            </div>
            </> : <><p>El usuario aún no ha agregado ningúna certificación a su perfil.</p></>
        }
            
        </>
      }
    </>
  );
};

export default CertificatesAwards;
