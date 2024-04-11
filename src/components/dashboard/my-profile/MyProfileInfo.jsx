import { useContext, useEffect, useState } from "react";
import Axios from 'axios'
import Education from "../../Education";
import WorkExperience from "../../WorkExperience"
import DashboardNavigation from "../DashboardNavigation";
import Loading from "../../../utils/Loading";
import { DeniedAccess } from "../../../utils/deniedAccess";
import ProfileDetails from "./ProfileDetails";
import { DashboardContext } from "../DashboardMain";
import Skill from "./Skill";
import ChangeEmail from "./ChangeEmail";
import UploadAttachment from "../manage-services/UploadAttachment";

export default function MyProfileInfo() {

  const infoUser = useContext(DashboardContext)
  let token = sessionStorage.getItem('accessToken')

  const [ loading, setLoading ] = useState(true)
  const [ dataUser, setDataUser ] = useState([])
  const [ response, setResponse ] = useState([])
  const [localidades, setLocalidades] = useState([]);

  

  useEffect(() => {
    Axios.post("https://www.services.irodum.com/api/user-info", {
      'authorization' : `${token}`
  })
    .then((result) => {
        if(result.status === 200){
              setResponse(result.status)
              setDataUser(result.data[0])

              Axios.get("https://www.services.irodum.com/api/localidades").then((res)=>{
                if(res.status === 200 && res.data !== null && res.data !== undefined){
                  setResponse(res.status)
                  setLocalidades(res.data);
                  setLoading(false);
                }
              }).catch(error => {
                setResponse(error.response.status)
                setLoading(false);
              });
        }
    }).catch(error => {
          setLoading(false);
          setResponse(error.response.status)
    });

  },[]);

  return (
    <>
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          
        </div>
        <div className="row">
          <div className="col-xl-12">
          {
            <>         
              {loading === true ? 
                <Loading /> : response === 200 ? 
                    <>
                      <div className="col-lg-9">
                        <div className="dashboard_title_area">
                          <h2>Mi Perfil</h2>
                          <p className="text">Agrega y/o Edita información adicional a tu perfil.</p>
                        </div>
                      </div>
                      <ProfileDetails dataUser={dataUser} localidades={localidades}/>
                      <Skill />
                      <Education />
                      <WorkExperience />
                      <UploadAttachment />
                      <ChangeEmail />
                      {/* <Skill />
                      <Education />
                      <WorkExperience />
                      <Award />
                      <ChangePassword />
                      <ConfirmPassword /> */}
                    </> : <DeniedAccess response={response}/>
              }
            </>
          }
          </div>
        </div>
      </div>
    </>
  );
}
