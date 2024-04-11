import { Tooltip } from "react-tooltip";
import datajobs from "../data/job"
import SelectInput from "../utils/SelectInput";
import { useEffect, useState } from "react";
import Axios from "axios";
import { DeniedAccess } from "../utils/deniedAccess";
import Loading from "../utils/Loading";
import EducationDetails from "./EducationDetails";

export default function Education() {

  let token = sessionStorage.getItem('accessToken')

  const { studylevelschile } = datajobs

  const [ response, setResponse ] = useState([])
  const [getDataEducation, setDataEducation] = useState([]);
  const [ loading, setLoading ] = useState(true)

  const [hiddenInputs, setHiddenInputs] = useState(true);
  const [validInputs, setValidInputs] = useState(true)
  const [getTitle, setTitle] = useState("");
  const [getEstablishment, setEstablishment] = useState("");
  const [getDateStart, setDateStart] = useState("");
  const [getDateFinish, setDateFinish] = useState("");

  const [getStudyLevels, setStudyLevels] = useState({
    option: "Seleccionar nivel de estudio",
    value: null,
  });

  const studyLevelsHandler = (option, value) => {
    setStudyLevels({ option, value });
  };

  const handlerChange = (input) =>{
    if( input.id === "title"){
      input.value === "" ? setTitle("") : setTitle(input.value)
    }else if( input.id === "establishment"){
      input.value === "" ? setEstablishment("") : setEstablishment(input.value)
    }else if( input.id === "datestart"){
      input.value === "" ? setDateStart("") : setDateStart(input.value)
    }else if( input.id === "datefinish"){
      input.value === "" ? setDateFinish("") : setDateFinish(input.value)
    }
  }

  const addEducation = (event) =>{
    event.preventDefault()
    const validation1 = getStudyLevels.value !== null && getStudyLevels.value !== "" && getStudyLevels.value !== undefined
    const validation2 = getEstablishment !== null && getEstablishment !== "" && getEstablishment !== undefined
    const validation3 = getDateStart !== null && getDateStart !== "" && getDateStart !== undefined
    const validation4 = getDateFinish !== null && getDateFinish !== "" && getDateFinish !== undefined
    if(validation1 && validation2 && validation3 && validation4){
      setValidInputs(true)
      const dataToAdd = {
        grade: getStudyLevels,
        title: getTitle,
        establishment: getEstablishment,
        datestart: getDateStart,
        datefinish: getDateFinish
      }

      Axios.post("https://www.services.irodum.com/api/add-education",{
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

    Axios.post("https://www.services.irodum.com/api/get-education",{
        'authorization' : `${token}`
      })
      .then(result =>{
        if(result.status === 200){
          setResponse(result.status)
          setDataEducation(result.data)
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
          <h5 className="list-title">Educación</h5>
          <a className="add-more-btn text-thm" onClick={() => setHiddenInputs(!hiddenInputs)}>
            <i className="icon far fa-plus mr10" />
            Agregar Educación
          </a>
        </div>
        <div className="bdrt1 mt15" hidden={hiddenInputs}>
          <div className="row mb30 mt30">
              <div className="col-sm-6">
                <div className="mb20">
                <SelectInput
                    id="grade"
                    label="Grado"
                    defaultSelect={getStudyLevels}
                    data={studylevelschile.map((item) =>{ 
                      return { option: item, value: item }
                    })}
                    handler={studyLevelsHandler}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Título
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="form-control"
                    placeholder="Ej: González"
                    onChange={(e) => handlerChange(e.target)}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Establecimiento <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    id="establishment"
                    type="text"
                    className="form-control"
                    placeholder="Ej: González"
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
                <a className="ud-btn btn-thm" onClick={(e)=> addEducation(e)}>
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
                    <EducationDetails dataeducation= {getDataEducation}/>
                    : <DeniedAccess response={response}/>
              }
            </>
          }
      </div>
    </>
  );
}
