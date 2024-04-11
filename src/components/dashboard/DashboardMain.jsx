import Axios from "axios";
import { useEffect, useState, createContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/header/Header";
import Loading from "../../utils/Loading";
import MobileNavigation from "../../layouts/header/MobileNavigation";
import DashboardLayout from "./DashboardLayout";
import DashboardInfo from "./DashboardInfo";
import { DeniedAccess } from "../../utils/deniedAccess";

export const metadata = {
  title: "Irodum - Freelance Marketplace React/Next Js Template | Dashboard",
};

export const DashboardContext = createContext();

export default function DashboardMain() {

  const [ dataUser, setDataUser ] = useState([])
  const [ response, setResponse ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ inputs , setInputs ] = useState(false)
  const [ validationCell, setValidationCell ] = useState(false)
  const [ cancelButton, setCancelButton ] = useState(false)
  const [ colorCard, setColorCard ] = useState("#33D09C")
  const [ savePhoto, setSavePhoto ] = useState(false)
  const [ getPhoto, setGetPhoto ] = useState(false)
  const [ enableSave, setEnableSave ] = useState(false)
  const [ updateProgress, setUpdateProgress ] = useState(0)
  const [ updateProgressSpec, setUpdateProgressSpec ] = useState(0)
  const [ hiddenProgress, showProgress ] = useState(true)
  const [ hiddenProgressSpec, showProgressSpec ] = useState(true)
  const [ratingScore, setRatingScore] = useState(0);
  const [commentsWorker, setCommentsWorker] = useState([])
  const [especialitiesWorker, setEspecialitiesWorker] = useState([])
  const [ descriptSpeciality, setDescriptSpeciality ] = useState(true)
  const [ specialityForm, setSpecialityForm ] = useState(false)
  const [ descriptSpecialityMsge, setDescriptSpecialityMsge ] = useState([])
  const [ specialityFormMsge, setSpecialityFormMsge ] = useState([])
  const [showModalSpeciality, setShowModalSpeciality] = useState(false);



const getAccess = (token) =>{
  Axios.post("https://www.services.irodum.com/api/user-info", {
          'authorization' : `${token}`
      })
        .then((result) => {
            if(result.status === 200){
                  setLoading(false);
                  setResponse(result.status)
                  setDataUser(result.data)
                  sessionStorage.setItem('photoUser', "https://www.services.irodum.com/api/images/" + result.data[0].photoUser)
                  setGetPhoto(result.data[0].photoUser)
                  // Axios.get("https://www.services.irodum.com/api/worker/ratings/" + result.data[0].idUser)
                  //     .then((result) => {
                  //         if(result.status === 200){
                  //             setRatingScore(result.data)
                  //             setCommentsWorker(result.data)
                  //         }
                  //     }).catch(error => {
                  //         setRatingScore([])
                  //         setCommentsWorker([])
                  //     });
                  // Axios.get("https://www.services.irodum.com/api/download/speciality/" + result.data[0].idUser)
                  //     .then((result) => {
                  //         if(result.status === 200){
                  //             setEspecialitiesWorker(result.data)
                  //         }
                  //     }).catch(error => {
                  //         setEspecialitiesWorker([])
                  //     });
            }else{
              setResponse(result.status)
            }
            
        }).catch(error => {
              setResponse(error.response.status)
              setLoading(false);
        });
}

  useEffect(() => {

      const token = sessionStorage.getItem('accessToken')
      if(token !== null && token !== undefined){
        getAccess(token);
      }else{
        setLoading(false);
      }
      
  
  }, []);

  return (
    <>    
    {
        <>
          
          {loading === true ? 
          <>
            <Loading />
            </> : response === 200 ? 
                <>
                <DashboardContext.Provider value={dataUser}>
                    <DashboardLayout>
                    <DashboardInfo />
                    </DashboardLayout>
                </DashboardContext.Provider>
            </> 
                : <DeniedAccess  response={response}/>
          }
          
      </>
      }

    </>
  );
}
