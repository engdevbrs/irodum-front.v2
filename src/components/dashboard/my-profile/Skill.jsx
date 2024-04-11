import { useEffect, useState } from "react";
import skills from "../../../data/job"
import Option from "../../../utils/Option";
import Axios from "axios";
import { DeniedAccess } from "../../../utils/deniedAccess";
import Loading from "../../../utils/Loading";

export default function Skill() {

  const { habilidades } = skills
  let token = sessionStorage.getItem('accessToken')
  // handlers
  const [option2, setOption2] = useState([]);
  const [getSkillsData, setSkillsData] = useState([]);
  const [ loading, setLoading ] = useState(true)
  const [ response, setResponse ] = useState([])

  const optionHandler2 = (data) => {
    if (!option2.includes(data)) {
      return setOption2((prev) => [...prev, data]);
    }
    setOption2(option2.filter((item) => item !== data));
  };

  const addSkills = (event) =>{
    event.preventDefault()
      Axios.post("https://www.services.irodum.com/api/add-skills",{
        'authorization' : `${token}`,
        'data': option2
      })
      .then(result =>{
        if(result.status === 200){
          console.log(result.status);
        }
      })
      .catch(error =>{
        console.log(error);
      })
  }

  const updateSkills = (event) =>{
    event.preventDefault()
      Axios.put("https://www.services.irodum.com/api/update-skills",{
        'authorization' : `${token}`,
        'data': option2
      })
      .then(result =>{
        if(result.status === 200){
          console.log(result.status);
        }
      })
      .catch(error =>{
        console.log(error);
      })
  }

  useEffect(() => {
    Axios.post("https://www.services.irodum.com/api/get-skills",{
        'authorization' : `${token}`
      })
      .then(result =>{
        if(result.status === 200){
          setResponse(result.status)
          setLoading(false);
          if(result.data === ""){
            setSkillsData([])
          }else{
            setOption2(JSON.parse(result.data.SkillsUsers))
            setSkillsData(JSON.parse(result.data.SkillsUsers))
          }
        }
      })
      .catch(error =>{
        setLoading(false);
        setResponse(error.response.status)
      })
  }, []);
  
  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Competencias Laborales</h5>
        </div>
        {
            <>         
              {loading === true ? 
                <Loading /> : response === 200 ? 
                    <>
                      <div className="col-xl-10 col-lg-10">
                        <div className="row">
                          <form className="form-style1">
                            <div className="row">
                              <div className="col-xl-6 col-lg-12 col-md-10 col-sm-12">
                                <div className="ui-content">
                                  <Option
                                    id="skills"
                                    lebel="Cualidades"
                                    data={habilidades}
                                    selected={option2}
                                    handler={optionHandler2}
                                  />
                                </div>
                              </div>
                              
                              {
                                option2.length > 0 ?
                                  <div className="col-xl-8 col-lg-12 col-md-10 col-sm-12">
                                    <div className="sidebar-widget mb30 pb20 bdrs8">
                                      <h4 className="widget-title">Mis cualidades</h4>
                                        <div className="tag-list mt30">
                                          {
                                            option2.map((value,i) =>{
                                              return(
                                                <>
                                                <a key={i} onClick={()=> optionHandler2(value)}>{value}</a>
                                                </>
                                              )
                                            })
                                          }
                                        </div>
                                    </div>
                                  </div>
                                : 
                                <div className="sidebar-widget mb30 pb20 bdrs8">
                                    <h4 className="widget-title">Habilidades Seleccionadas</h4>
                                    <div className="tag-list mt30">
                                      {option2.length > 0 ?
                                        option2.map((value,i) => {
                                          return(
                                            <a key={i}>{value}</a>
                                          )
                                        }) : "Ninguna habilidad seleccionada"
                                      }
                                    </div>
                                  </div>
                              }
                              {
                                option2.length >= 5 ? <p className="validations-alerts" >Solo puedes seleccionar un máximo de 5 habilidades</p> : <></>
                              }
                              {
                                  option2.length <= 0 ? 
                                  <div className="message-alart-style1">
                                    <div className="alert alart_style_two alert-dismissible fade show mb20" role="alert" >
                                  <p className="mr30">{`Seleccione al menos una cualidad para poder ${getSkillsData.length > 0 ? "actualizar" : "guardar"} sus cualidades`}</p>
                                  <i className="far fa-xmark btn-close" data-bs-dismiss="alert" aria-label="Close"/>
                                </div></div> : <></>
                              }
                              <div className="col-md-12">
                                <div className="text-start">
                                  {
                                    getSkillsData.length === 0 ? 
                                    <button className="ud-btn btn-thm" disabled={option2.length > 0 ? false : true} onClick={(e)=> addSkills(e)}>
                                    Guardar
                                    <i className="fal fa-arrow-right-long" /> 
                                    </button>
                                    : 
                                    <button className="ud-btn btn-thm" disabled={option2.length > 0 ? false : true} onClick={(e)=> updateSkills(e)}>
                                    Actualizar
                                    <i className="fal fa-arrow-right-long" /> </button>
                                  }
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </> : <DeniedAccess response={response}/>
              }
            </>
          }
      </div>
    </>
  );
}
