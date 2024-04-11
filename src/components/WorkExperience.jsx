import { useEffect, useState } from "react";
import Axios from "axios";
import { DeniedAccess } from "../utils/deniedAccess";
import Loading from "../utils/Loading";
import EducationDetails from "./EducationDetails";
import WorkExperienceDetails from "./WorkExperienceDetails";

export default function WorkExperience() {

  let token = sessionStorage.getItem('accessToken')

  const [ response, setResponse ] = useState([])
  const [getWorkExperience, setWorkExperience] = useState([]);
  const [ loading, setLoading ] = useState(true)

  const [hiddenInputs, setHiddenInputs] = useState(true);
  const [validInputs, setValidInputs] = useState(true)
  const [getRole, setRole] = useState("");
  const [getCompany, setCompany] = useState("");
  const [getRoleDetails, setRoleDetails] = useState("");
  const [getDateStart, setDateStart] = useState("");
  const [getDateFinish, setDateFinish] = useState("");


  const handlerChange = (input) =>{
    if( input.id === "role"){
      input.value === "" ? setRole("") : setRole(input.value)
    }else if( input.id === "company"){
      input.value === "" ? setCompany("") : setCompany(input.value)
    }else if( input.id === "roldetails"){
      input.value === "" ? setRoleDetails("") : setRoleDetails(input.value)
    }else if( input.id === "datestart"){
      input.value === "" ? setDateStart("") : setDateStart(input.value)
    }else if( input.id === "datefinish"){
      input.value === "" ? setDateFinish("") : setDateFinish(input.value)
    }
  }

  const addWorkExperience = (event) =>{
    event.preventDefault()
    const validation1 = getRole !== null && getRole !== "" && getRole !== undefined
    const validation2 = getCompany !== null && getCompany !== "" && getCompany !== undefined
    const validation3 = getRoleDetails !== null && getRoleDetails !== "" && getRoleDetails !== undefined
    const validation4 = getDateStart !== null && getDateStart !== "" && getDateStart !== undefined
    const validation5 = getDateFinish !== null && getDateFinish !== "" && getDateFinish !== undefined
    if(validation1 && validation2 && validation3 && validation4 && validation5){
      setValidInputs(true)
      const dataToAdd = {
        role: getRole,
        company: getCompany,
        roledetails: getRoleDetails,
        datestart: getDateStart,
        datefinish: getDateFinish
      }

      Axios.post("https://www.services.irodum.com/api/add-workexperience",{
        'authorization' : `${token}`,
        'data': dataToAdd
      })
      .then(result =>{
        if(result.status === 200){
          console.log(result.status);
        }
      })
      .catch(error =>{
        console.log(error);
      })
    }else{
      setValidInputs(false)
    }
      
  }


  useEffect(() => {

    Axios.post("https://www.services.irodum.com/api/get-workexperience",{
        'authorization' : `${token}`
      })
      .then(result =>{
        if(result.status === 200){
          setResponse(result.status)
          setWorkExperience(result.data)
          setLoading(false);
        }
      })
      .catch(error =>{
        setResponse(error.response.status)
        setLoading(false);
      })
  }, []);

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="d-sm-flex justify-content-between">
          <h5 className="list-title">Trabajo & Experiencia</h5>
          <a className="add-more-btn text-thm" onClick={() => setHiddenInputs(!hiddenInputs)}>
            <i className="icon far fa-plus mr10" />
            Agregar Experiencia
          </a>
        </div>
        <div className="bdrt1 mt15" hidden={hiddenInputs}>
          <div className="row mb30 mt30">
              <div className="col-sm-6">
                <div className="mb20">
                <label className="heading-color ff-heading fw500 mb10">
                    Rol <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    id="role"
                    type="text"
                    className="form-control"
                    placeholder="Ej: Encargado de ventas"
                    onChange={(e) => handlerChange(e.target)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Empresa <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="form-control"
                    placeholder="Ej: Nombre de la empresa"
                    onChange={(e) => handlerChange(e.target)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Descripción de su rol <span style={{ color: 'red' }}>*</span>
                  </label>
                  <textarea
                    className="pt15"
                    rows={6}
                    id="roldetails"
                    type="textarea"
                    placeholder="Ej: Fui encargado de administrar las ventas de ..."
                    onChange={(e) => handlerChange(e.target)}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="mb20">
                <label className="heading-color ff-heading fw500 mb10">
                    Inicio<span style={{ color: 'red' }}>*</span>
                  </label>
                <input
                    id="datestart"
                    type="month"
                    className="form-control"
                    onChange={(e) => handlerChange(e.target)}
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="mb20">
                <label className="heading-color ff-heading fw500 mb10">
                    Termino<span style={{ color: 'red' }}>*</span>
                  </label>
                <input
                    id="datefinish"
                    type="month"
                    className="form-control"
                    onChange={(e) => handlerChange(e.target)}
                  />
                </div>
              </div>
              <div className="text-start mt20">
                {
                  validInputs === true ? <></> : <p style={{ color: 'red'}}>Por favor, complete todos los campos requeridos.</p>
                }
                <a className="ud-btn btn-thm" onClick={(e)=> addWorkExperience(e)}>
                  Guardar
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
        </div>
        </div>
        {
          <>
            {
            loading === true ? <><Loading /></> : 
            response === 200 ? 
                  <WorkExperienceDetails dataworkexperience= {getWorkExperience}/>
                  : <DeniedAccess response={response}/>
            }
          </>
        }
      </div>
    </>
  );
}
