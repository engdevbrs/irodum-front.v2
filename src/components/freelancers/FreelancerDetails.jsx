import { Sticky, StickyContainer } from "react-sticky";
import FreelancerProfileCard from "./FreelancerProfileCard";
import ServiceDetailReviewInfo from "../services/single/ServiceDetailReviewInfo";
import ServiceDetailComment from "../services/single/ServiceDetailComment";
import useScreen from "../../hook/useScreen";
import { useParams } from "react-router-dom";
import FreelancerAbout from "./FreelancerAbout"
import lefttop from "../../images/vector-img/left-top.png"
import rightbot from "../../images/vector-img/right-bottom.png"
import fl1 from "../../images/team/fl-1.png"
import { useEffect, useState } from "react";
import EducationDetails from "../EducationDetails";
import Axios from "axios";
import WorkExperienceDetails from "../WorkExperienceDetails";
import CertificatesAwards from "./CertificatesAwards";
import FreelancerProposal from "../modals/FreelancerProposal";

export default function FreelancerDetails(props) {

  const isMatchedScreen = useScreen(1216);
  const { id } = useParams(); 
  const [getFreelancerEducation, setFreelancerEducation] = useState([])
  const [getFreelancerWorkExperiencie, setFreelancerWorkExperiencie] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [getReviewsData, setReviewsData] = useState([]);

  const { idUser,nameUser, LastNameUser,emailUser, bornDate,photoUser,priceWork,rankingUser,cityUser,communeUser,registerDay,skillsUser,slogan,workAreaUser,workResume} = props.infofreelancers
  const singleInfoAboutService = props.infoService
  const infofreelancers = props.infofreelancers
  const datafreelancer = {
    idServices: idUser,
    emailUser: emailUser
  }

  let skillsdata = null
  if(infofreelancers.SkillsUsers !== null && infofreelancers.SkillsUsers !== undefined && infofreelancers.SkillsUsers !== ""){
    skillsdata = JSON.parse(infofreelancers.SkillsUsers)
  }

  useEffect(() => {
        Axios.get("https://www.services.irodum.com/api/freelancer/get-education/" + id)
          .then((result) => {
              if(result.status === 200){
                setFreelancerEducation(result.data)
              }
          })
          .catch(error => {
                setLoading(false);
                setFreelancerEducation([])
          });

        Axios.get("https://www.services.irodum.com/api/freelancer/get-workexperience/" + id)
          .then((result) => {
              if(result.status === 200){
                setFreelancerWorkExperiencie(result.data)
              }
          })
          .catch(error => {
                setLoading(false);
                setFreelancerWorkExperiencie([])
          });
  }, []);

  useEffect(() => {

    Axios.get('https://www.services.irodum.com/api/rating-freelancer/' + id)
    .then((res)=>{
      if(res.status === 200){
        setLoading(false)
        setReviewsData(res.data)
      }
    }).catch((error)=>{
      setLoading(false)
      setReviewsData([])
    })

  }, []);
  

  return (
    <>
      <StickyContainer>
        <section className="p15 pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-lg-8">
                <div className="cta-service-v1 freelancer-single-v1 pt60 pb60 bdrs16 position-relative overflow-hidden mb30 d-flex align-items-center">
                  <img
                    width={198}
                    height={226}
                    style={{ height: "fit-content" }}
                    className="left-top-img wow zoomIn"
                    src={lefttop}
                    alt=""
                  />
                  <img
                    width={255}
                    height={181}
                    style={{ height: "fit-content" }}
                    className="right-bottom-img wow zoomIn"
                    src={rightbot}
                    alt=""
                  />
                  <div className="row wow fadeInUp">
                    <div className="col-xl-12">
                      <div className="position-relative pl50 pl20-sm">
                        <div className="list-meta d-sm-flex align-items-center">
                          <a
                            className="position-relative freelancer-single-style"
                            href="#"
                          >
                            <span className="online"></span>
                            <img
                              width={90}
                              height={90}
                              className="rounded-circle wa-sm mb15-sm"
                              src={photoUser !== "" && photoUser !== null && photoUser !== undefined ? `https://www.services.irodum.com/api/images/${photoUser}` : fl1}
                              alt="Freelancer User"
                            />
                          </a>
                          <div className="ml20 ml0-xs">
                            <h5 className="title mb-1">
                              {nameUser ? nameUser: "Sin nombre"}
                            </h5>
                            <p className="mb-0">{workAreaUser}</p>
                            <p className="mb-0 dark-color fz15 fw500 list-inline-item mb5-sm">
                              <i className="fas fa-star vam fz10 review-color me-2"></i>{" "}
                              4.82 94 reviews
                            </p>
                            <p className="mb-0 dark-color fz15 fw500 list-inline-item ml15 mb5-sm ml0-xs">
                              <i className="flaticon-30-days vam fz20 me-2"></i>{" "}
                              Miembro desde {registerDay}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-target" />
                      </div>
                      <div className="details">
                        <h5 className="title">Job Success</h5>
                        <p className="mb-0 text">98%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-goal" />
                      </div>
                      <div className="details">
                        <h5 className="title">Total Jobs</h5>
                        <p className="mb-0 text">921</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-fifteen" />
                      </div>
                      <div className="details">
                        <h5 className="title">Total Hours</h5>
                        <p className="mb-0 text">1,499</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3">
                    <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                      <div className="icon flex-shrink-0">
                        <span className="flaticon-file-1" />
                      </div>
                      <div className="details">
                        <h5 className="title">In Queue Service</h5>
                        <p className="mb-0 text">20</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-about">
                  <h4>Sobre Mí</h4>
                  {
                    workResume !== null ? workResume : <p className="text mb30">
                    Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una 
                    página cuando mire su diseño. El objetivo de utilizar Lorem Ipsum es que tiene una distribución de letras 
                    más o menos normal, en lugar de utilizar "Contenido aquí, contenido aquí", lo que hace que parezca un 
                    inglés legible.
                    </p>
                  }
                  <EducationDetails dataeducation = {getFreelancerEducation} />
                  <WorkExperienceDetails dataworkexperience = {getFreelancerWorkExperiencie}/>
                  <CertificatesAwards />
                  <hr className="opacity-100 mb60" />

                  <h4 className="mb30">Servicios Disponibles</h4>
                  <div className="row mb35">
                    {singleInfoAboutService.length > 0 ? singleInfoAboutService.slice(0, 3).map((item,i) => (
                      <div className="col-sm-6 col-xl-4" key={ i }>
                        <FreelancerProfileCard data={item} />
                      </div>
                    )) : <><p>Éste usuario aún no ha agregado ningún servicio a su perfil</p></>
                  }
                  </div>
                  <hr className="opacity-100" />
                  {
                    getReviewsData.length >= 1 ? <ServiceDetailReviewInfo data={getReviewsData}/> : <p>El usuario aún no ha sido calificado.</p>
                  }
                  <ServiceDetailComment data={datafreelancer}/>
                </div>
              </div>
              <div className="col-lg-4">
                {isMatchedScreen ? (
                  <Sticky>
                    {({ style }) => (
                      <div className="blog-sidebar ms-lg-auto" style={style}>
                        <FreelancerAbout infocard={infofreelancers}/>
                        {
                          skillsdata === null ? <></> :
                        <div className="sidebar-widget mb30 pb20 bdrs8">
                          <h4 className="widget-title">Mis Cualidades</h4>
                          <div className="tag-list mt30">
                            {
                              skillsdata.map((value,i)=>{
                                return(
                                  <span className="tag mb10 mr5" key={i}>{value}</span>
                                )
                              })
                            }
                          </div>
                        </div>
                        }
                      </div>
                    )}
                  </Sticky>
                ) : (
                  <div className="blog-sidebar ms-lg-auto">
                    <FreelancerAbout infocard={infofreelancers}/>
                    {
                      skillsdata === null ? <></> :
                        <div className="sidebar-widget mb30 pb20 bdrs8">
                          <h4 className="widget-title">Mis Cualidades</h4>
                          <div className="tag-list mt30">
                            {
                              skillsdata.map((value,i)=>{
                                return(
                                  <span className="tag mb10 mr5" key={i}>{value}</span>
                                )
                              })
                            }
                          </div>
                        </div>
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
          <FreelancerProposal data={[{idUser,nameUser}]}/>
        </section>
      </StickyContainer>
    </>
  );
}
