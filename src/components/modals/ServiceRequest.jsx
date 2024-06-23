import React, { useState } from "react";
import Axios from "axios";
import { SuccessAlert } from "../../utils/Alerts";

const ServiceRequest = ({data}) => {

  const {id, idUser, nameUser} = data[0]

  const [ responseRequest, setResponseRequest ] = useState([])
  const [nombreValid, setNombreValid] = useState(false);
  const [apellidosValid, setApellidosValid] = useState(false);
  const [rutValid, setRutValid] = useState(false);
  const [cellphoneValid, setCellphoneValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [descriptWorkValid, setDescriptWorkValid] = useState(false);


  const [getnombre, setNombre] = useState(false);
  const [getapellidos, setApellidos] = useState(false);
  const [getrut, setRut] = useState(false);
  const [getcellphone, setCellphone] = useState(false);
  const [getemail, setEmail] = useState(false);
  const [getdescriptWork, setDescriptWork] = useState(false);

  const [nombreValidMsge, setNombreValidMsge] = useState([]);
  const [apellidosValidMsge, setApellidosValidMsge] = useState([]);
  const [cellphoneValidMsge, setCellphoneValidMsge] = useState([]);
  const [emailValidMsge, setEmailValidMsge] = useState([]);
  const [customValidity, setCustomValidity] = useState([]);
  const [descriptWorkValidMsge, setDescriptWorkValidMsge] = useState([]);

  const clearForm = () => {

      document.getElementById('requestForm').reset()

      setNombreValid(false)
      setNombreValidMsge('')

      setApellidosValid(false)
      setApellidosValidMsge('')

      setRutValid(false)
      setCustomValidity('')

      setCellphoneValid(false)
      setCellphoneValidMsge('')

      setEmailValid(false)
      setEmailValidMsge('')

      setDescriptWorkValid(false)
      setDescriptWorkValidMsge('')
  }

  const handleChange = (e) => {
    if(e.target.name === 'clientName'){
        checkName(e.target.value)
    }else if(e.target.name === 'clientLastname'){
        checkLastName(e.target.value)
    }else if(e.target.name === 'clientRut'){
        checkRut(e.target)
    }else if(e.target.name === 'clientPhone'){
        checkCellphone(e.target.value)
    }else if(e.target.name === 'clientEmail'){
        checkEmail(e.target.value)
    }else if(e.target.name === 'descriptWork'){
      checkDescriptWork(e.target.value)
    }
  }


  const checkName = (name) =>{
    const regName = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
    if(name.length > 0){
        if(!regName.test(name)){
            setNombreValidMsge('Por favor, sólo ingrese letras.')
            setNombreValid(true)
            return true
        }else{
            setNombreValidMsge('')
            setNombreValid(false)
            setNombre(name)
            return false
        }
    }else{
        setNombreValidMsge('Por favor, ingrese su nombre.')
        setNombreValid(true)
        return true
    }
  }

  const checkLastName = (lastname) =>{
    const regLastname = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/g);
    if(lastname.length > 0){
        if(!regLastname.test(lastname)){
            setApellidosValidMsge('Por favor, sólo ingrese letras.')
            setApellidosValid(true)
            return true
        }else{
            setApellidosValidMsge('')
            setApellidosValid(false)
            setApellidos(lastname)
            return false
        }
    }else{
        setApellidosValidMsge('Por favor, ingrese sus apellidos.')
        setApellidosValid(true)
        return true
    }
  }

  const checkRut = (rut) => {
    var valor = rut.value.replace('.','');
    valor = valor.replace('-','');
    
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();
    
    if(cuerpo.length < 7 && valor.length !== 0){ 
        setRutValid(true)
        setCustomValidity("RUT Incompleto"); 
        return true
    }else if(valor.length === 0){
        setRutValid(true)
        setCustomValidity("Por favor, ingrese su RUT"); 
        return true
    }
    
    let suma = 0;
    let multiplo = 2;
    
    for(let i=1;i<=cuerpo.length;i++){
    
        let index = multiplo * valor.charAt(cuerpo.length - i);
        
        suma = suma + index;
        
        if(multiplo < 7){ 
            multiplo = multiplo + 1; 
        }else{ 
            multiplo = 2; 
        }
    }
    
    let dvEsperado = 11 - (suma % 11);
    
    dv = (dv === 'K') ? 10 : dv;
    dv = (parseInt(dv,10) === 0) ? 11 : dv;
    
    if(dvEsperado !== parseInt(dv,10)){ 
        setRutValid(true)
        setCustomValidity("RUT Inválido"); 
        return true; 
    }
    
    setRutValid(false)
    setRut(rut.value)
    setCustomValidity("RUT válido");
    return false
  }

  const checkCellphone = (cell) =>{
    const regCell = new RegExp('^[0-9]+$');
    if(cell.length === 8 && regCell.test(cell)){
        setCellphoneValidMsge('')
        setCellphoneValid(false)
        setCellphone(cell)
        return false
    }else if(cell.length < 8 && regCell.test(cell)){
        setCellphoneValidMsge('Ingrese los 8 números de su número de celular.')
        setCellphoneValid(true)
        return true
    }else if(cell.length <= 8 && !regCell.test(cell)){
        setCellphoneValidMsge('Número de celular no válido.')
        setCellphoneValid(true)
        return true
    }
  }


  const checkDescriptWork = (descriptWork) =>{
    const regdescriptWork = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~´]/);
    if(descriptWork !== '' && descriptWork !== null && descriptWork !== undefined){
        if(!regdescriptWork.test(descriptWork)){
            setDescriptWorkValid(false)
            setDescriptWorkValidMsge('')
            setDescriptWork(descriptWork)
            return false
        }else{
            setDescriptWorkValid(true)
            setDescriptWorkValidMsge('Por favor, ingrese sólo letras o números.')
            return true
        }
    }
  }

  const checkEmail = (email) =>{
    const regEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if(email.length > 0){
        if(!regEmail.test(email)){
            setEmailValidMsge('Correo electrónico no válido.')
            setEmailValid(true)
            return true
        }else{
            setEmailValidMsge('')
            setEmailValid(false)
            setEmail(email)
            return false
        }
    }else{
        setEmailValidMsge('Por favor, ingrese su correo electrónico.')
        setEmailValid(true)
        return true
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    let validation = null
    let arrayValues = [];

    let checkNameValue = checkName(document.getElementById('clientName').value);
    let checkLastNameValue = checkLastName(document.getElementById('clientLastname').value);
    let checkRutValue = checkRut(document.getElementById('clientRut'));
    let checkCellphoneValue = checkCellphone(document.getElementById('clientPhone').value);
    let checkEmailValue = checkEmail(document.getElementById('clientEmail').value);

    let checkDescriptWorkValue = checkDescriptWork(document.getElementById('descriptWork').value);

    validation = (checkNameValue === false && checkLastNameValue === false && checkRutValue === false
      && checkCellphoneValue === false && checkEmailValue === false && checkDescriptWorkValue === false);

    if(validation){

        arrayValues.push(getnombre,getapellidos,getrut,getcellphone,getemail,getdescriptWork,idUser)

        Axios.post('https://www.services.irodum.com/api/request-work',arrayValues)
        .then((result) => {
            if(result.status === 200){
                setResponseRequest(result.status)
                clearForm()
                // Axios.post('https://www.services.irodum.com/api/requestEmail',arrayValues)
                // .then((result) => {
                //     if(result.status === 200){
                //         console.log(result);
                //     }
                // }).catch(error => {
                //     console.log(error);
                // });
            }
        }).catch(error => {
            setResponseRequest(error.response.status)
        });
    }
  } 


  return (
    <>
      <div
        className="modal fade"
        id="serviceRequest"
        tabIndex={-1}
        aria-labelledby="proposalModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content position-relative">
            <button
              type="button"
              className="btn-close position-absolute"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ top: "10px", right: "10px", zIndex: "9" }}
            />
              <div className="modal-body p-4">
              <h4 className="mb20">Solicitud de Servicio</h4>
              <div className='form-floating'>
                  <p>Ingrese sus datos personales para que <strong>{nameUser}</strong> pueda tomar contacto con usted.</p>
              </div>
              <hr />
              <form id="requestForm">
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                    <label className="form-label">Nombre<span className='mb-1' style={{color: 'red'}}> *</span></label>
                    <input type='text' className='form-control' id='clientName' name='clientName' placeholder='Ej: Juan' 
                      onChange={handleChange} />
                      {
                          nombreValid === true ? <p className='mb-1'>
                              <span className='mb-1' style={{color: 'red'}}>{nombreValidMsge}</span></p> : nombreValidMsge
                      }
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                    <label className="form-label">Apellidos<span className='mb-1' style={{color: 'red'}}> *</span></label>
                    <input type='text' className='form-control' id='clientLastname' name='clientLastname' placeholder='Ej: Rodriguez Gonzalez'
                      onChange={handleChange}/>
                      {
                          apellidosValid === true ? <p className='mb-1'>
                              <span className='mb-1' style={{color: 'red'}}>{apellidosValidMsge}</span></p> : apellidosValidMsge
                      }
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                <label className="form-label">Rut<span className='mb-1' style={{color: 'red'}}>*</span></label>
                <input type='text' className='form-control' id='clientRut' name='clientRut' placeholder='Ej: 123456789'
                  onChange={handleChange} maxLength='9'/>
                  {
                      rutValid === false ? <p className='mb-1'><span className='mb-1' style={{color: '#5f738f'}}>
                          {customValidity === 'RUT válido' ? '' : 'Sin puntos ni guión'}</span></p> : 
                          <p className='mb-1'>
                          <span className='mb-1' style={{color: 'red'}}>{customValidity}</span></p>
                  }
                </div>
                <div className="mb-3">
                <label className="form-label">Correo electrónico<span className='mb-1' style={{color: 'red'}}> *</span></label>
                  <input type='email' className='form-control' id='clientEmail' name='clientEmail' placeholder='correo@gmail.com'
                      onChange={handleChange}/>
                      {
                          emailValid === true ? <p className='mb-1'>
                          <span className='mb-1' style={{color: 'red'}}>{emailValidMsge}</span></p> : emailValidMsge
                      }
                </div>
                <div className="mb-3">
                <label>Número de Whatsapp<span className='mb-1' style={{color: 'red'}}>*</span></label>
                  <input type='text' className='form-control' id='clientPhone' name='clientPhone' placeholder='Ej: 12345678'
                          onChange={handleChange} maxLength='8'/>
                    {
                        cellphoneValid === true ? <p className='mb-1'>
                        <span className='mb-1' style={{color: 'red'}}>{cellphoneValidMsge}</span></p> : cellphoneValidMsge
                    }
                </div>
                <div className="mb-3">
                <label className="form-label">¿Necesitas detallar algo más? <span className='mb-1' > (Opcional)</span></label>
                <textarea className='form-control' id='descriptWork' name='descriptWork' style={{ height: '100px' }}
                    placeholder='Describa el detalle a continuación..' maxLength={250} onChange={handleChange}></textarea>
                    {
                        descriptWorkValid === true ? <p className='mb-1'>
                        <span className='mb-1' style={{color: 'red'}}>{descriptWorkValidMsge}</span></p> : descriptWorkValidMsge
                    }
                </div>
                <button
                  type="button"
                  className="ud-btn btn-thm"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e)=>handleSubmit(e)}
                >
                  Enviar Solicitud
                  <i className="fal fa-arrow-right-long" />
                </button>
              </form>
              {/* <SuccessAlert /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default ServiceRequest;
