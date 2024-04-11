import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function RegisterIndependent() {

  const [nombreValid, setNombreValid] = useState(false);
  const [apellidosValid, setApellidosValid] = useState(false);
  const [rutValid, setRutValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [nombreValidMsge, setNombreValidMsge] = useState([]);
  const [apellidosValidMsge, setApellidosValidMsge] = useState([]);
  const [emailValidMsge, setEmailValidMsge] = useState([]);
  const [rutValidMsge, setRutValidMsge] = useState([]);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const [ result, setResult] = useState([]);
  const [ resultEmail, setResultEmail] = useState([]);
  const [ loadingrequest, setLoadingRequest] = useState(true); 

  let newUser = {
    name: null,
    lastname: null,
    rut: null,
    email: null,
    password: null,
    type: null
  }

  const checkName = (name) =>{
    const regName = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
    if(name.length > 0){
        if(!regName.test(name)){
            setNombreValidMsge('Por favor, sólo ingrese letras.')
            setNombreValid(false)
            return true
        }else{
            setNombreValidMsge('')
            setNombreValid(true)
            return false
        }
    }else{
        setNombreValidMsge('Por favor, ingrese su nombre.')
        setNombreValid(false)
        return true
    }
  }

  const checkLastName = (lastname) =>{
      const regLastname = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
      if(lastname.length > 0){
          if(!regLastname.test(lastname)){
              setApellidosValidMsge('Por favor, sólo ingrese letras.')
              setApellidosValid(false)
              return true
          }else{
              setApellidosValidMsge('')
              setApellidosValid(true)
              return false
          }
      }else{
          setApellidosValidMsge('Por favor, ingrese sus apellidos.')
          setApellidosValid(false)
          return true
      }
  }

  const checkRut = (rut) => {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7 && valor.length !== 0){ 
        setRutValid(false)
        setRutValidMsge("RUT Incompleto"); 
        return true
    }else if(valor.length === 0){
        setRutValid(false)
        setRutValidMsge("Por favor, ingrese su RUT");
        return true
    }
    
    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(let i=1;i<=cuerpo.length;i++){
        // Obtener su Producto con el Múltiplo Correspondiente
        let index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7){ 
            multiplo = multiplo + 1; 
        }else{ 
            multiplo = 2; 
        }
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    let dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv === 'K') ? 10 : dv;
    dv = (parseInt(dv,10) === 0) ? 11 : dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado !== parseInt(dv,10)){ 
        setRutValid(false)
        setRutValidMsge("RUT Inválido"); 
        return true; 
    }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    setRutValid(true)
    setRutValidMsge("RUT válido");
    return false
  }

  const checkEmail = (email) =>{
    const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(email.length > 0){
        if(!regEmail.test(email)){
            setEmailValidMsge('Correo electrónico no válido.')
            setEmailValid(false)
            return true
        }else{
            setEmailValidMsge('')
            setEmailValid(true)
            
            return false
        }
    }else{
        setEmailValidMsge('Por favor, ingrese su correo electrónico.')
        setEmailValid(false)
        return true
    }
  }

  const handleChange1=(event)=>{
    const valueAux1 = event.target.value
    setValue1(valueAux1);
    if(valueAux1.length >= "8" && valueAux1.match(/[A-Z]/) && valueAux1.match(/[0-9]/) &&
    valueAux1.match(/[a-z]/) && valueAux1.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) && ((valueAux1 === value2) && (valueAux1 !==""))){
      setPasswordValid(true)
        return true
    }else{
        setPasswordValid(false)
        return false
    }
}

const handleChange2=(event)=>{
    const valueAux2 = event.target.value
    setValue2(valueAux2);
    if(value1.length >= "8" && value1.match(/[A-Z]/) && value1.match(/[0-9]/) &&
    value1.match(/[a-z]/) && value1.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) && ((value1 === valueAux2) && (value1 !==""))){
        setPasswordValid(true)
        return true;
    }else{
        setPasswordValid(false)
        return false;
    }
}

  const handleCreate = async (e) => {
      e.preventDefault()
      newUser.name = document.getElementById('name').value
      newUser.lastname = document.getElementById('lastname').value
      newUser.rut = document.getElementById('rut').value
      newUser.email = document.getElementById('email').value
      newUser.password = document.getElementById('password').value
      newUser.type = 0

      Axios.post("https://www.services.irodum.com/api/create-user", newUser)
      .then((result) => {
          if(result.status === 200){
              setResult(result.status);
              document.getElementById("nextButton").style.display = "block";
              setLoadingRequest(false);
              // Axios.post("https://www.services.irodum.com/api/welcomeMail", newUser)
              // .then((response) => {
              //   if(response.status === 200){
              //     setResultEmail(response.status);
              //   }
              // }).catch(error => {
              //   setResultEmail(error.response.status);
              // });
              // clearTimeout();
          }else{
            
          }
      }).catch(error => {
          setResult(error.response.status);
          setLoadingRequest(false);
          clearTimeout();
      });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
      <section className="bgc-thm4 our-register">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Registro Freelancer</h2>
                <p className="paragraph">
                Ofrezca a sus visitantes una experiencia online excepcional
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30">
                  <h4>¡Creemos tu cuenta!</h4>
                  <p className="text mt20">
                  Ya tienes una cuenta?{" "}
                    <Link to="/login" className="text-thm">
                      Acceder!
                    </Link>
                  </p>
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Ej: Juan"
                    onChange={(e) => checkName(e.target.value)}
                  />
                  {
                      nombreValid === false ? <span className='mb-1'>
                          <p className='mb-1' style={{color: 'red'}}>{nombreValidMsge}</p></span> : nombreValidMsge
                  }
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    Apellidos
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    className="form-control"
                    placeholder="Ej: González Rivas"
                    onChange={(e) => checkLastName(e.target.value)}
                  />
                    {
                        apellidosValid === false ? <span className='mb-1'>
                            <p className='mb-1' style={{color: 'red'}}>{apellidosValidMsge}</p></span> : apellidosValidMsge
                    }
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">
                    Rut
                  </label>
                  <input
                    id="rut"
                    type="text"
                    className="form-control"
                    placeholder="Ej: 111727880	"
                    maxLength='9'
                    onChange={(e) => checkRut(e.target)}
                  />
                  {
                      rutValid === false ?
                          <span className='mb-1'>
                          <p className='mb-1' style={{color: 'red'}}>{rutValidMsge}</p></span> : 
                          <span className='mb-1'><p className='mb-1' style={{color: '#5f738f'}}>
                          {rutValidMsge === 'RUT válido' ? '' : 'Sin puntos ni guión'}</p></span>
                  }
                </div>
                <div className="mb25">
                  <label className="form-label fw500 dark-color">Correo</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="alitfn58@gmail.com"
                    onChange={(e) => checkEmail(e.target.value)}
                  />
                  {
                      emailValid === false ? <span className='mb-1'>
                      <p className='mb-1' style={{color: 'red'}}>{emailValidMsge}</p></span> : emailValidMsge
                  }
                </div>
                <div className="mb15">
                  <label className="form-label fw500 dark-color">
                    Contraseña
                  </label>
                  <p className='mt-1' style={{fontWeight:"bold"}}>Todas las marcas de verificación deben volverse verdes, la contraseña debe tener:</p>
                            <p><i style={{color: value1.length >= "8" ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i><span> Al menos, 8 carácteres.</span></p>
                            <p><i style={{color: value1.match(/[A-Z]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i><span> Al menos, una letra mayúscula.</span></p>
                            <p><i style={{color:value1.match(/[0-9]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i><span> Al menos, un número.</span></p>
                            <p><i style={{color:value1.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) ? "green" : "red",fontSize:"20px"}} className="fa fa-check-circle" aria-hidden="true">
                                </i><span>  Al menos, un carácter especial. <span>{' '}</span>
                                <Tooltip id="my-tooltip" place="bottom" style={{ zIndex: '999' }}>
                                  <div>
                                    <p style={{ color: '#FFFFFF' }}>Algunos ejemplos de carácteres especiales son:</p>
                                    <ul style={{ listStyle: 'none', textAlign: 'start', margin: '3px' }}>
                                        <li>.</li>
                                        <li>,</li>
                                        <li>#</li>
                                        <li>!</li>
                                        <li>@</li>
                                        <li>$</li>
                                        <li>/</li>
                                        <li>*</li>
                                        <li>&</li>
                                        <li>-</li>
                                    </ul>
                                  </div>
                                </Tooltip>
                                <a data-tooltip-id="my-tooltip">
                                  <i className='fas fa-question-circle' id="bottom" style={{fontSize:'18px',cursor:'pointer', color: '#384451'}}></i>
                                </a>
                                </span></p>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="*******"
                    onChange={(e) => {handleChange1(e)}}
                  />
                  
                </div>
                <div className="mb15">
                  <label className="form-label fw500 dark-color">
                    Repetir Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="*******"
                    onChange={handleChange2}
                  />
                </div>
                <p className='mt-2'><i style={{color:((value1 === value2) && (value1 !=="")) ? "green" : "red",fontSize:"20px"}} 
                        className="fa fa-check-circle" aria-hidden="true"></i><span>  ¿Ambas contraseñas son iguales?</span></p>
                <div className="d-grid mb20">
                  <button
                    id="nextButton"
                    className="ud-btn btn-thm default-box-shadow2"
                    type="button"
                    disabled={ emailValid === true && rutValid === true && nombreValid === true  && apellidosValid === true && passwordValid === true ? false : true}
                    onClick={e => handleCreate(e)}
                  >
                    Crear Cuenta <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
                <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">O</span>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-facebook-f pr10" />Continuar Facebook
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-google" /> Continuar Google
                  </button>
                  <button className="ud-btn btn-apple fz14 fw400" type="button">
                    <i className="fab fa-apple" /> Continuar Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
