import React, { useEffect, useState } from "react";
import Axios from 'axios'
import data from "../../../data/job"
import { checkBornDate, checkCellphone, checkLastName, checkName, checkRut } from "../../../utils/validations";
import SelectInput from "../../../utils/SelectInput"
import ToastSuccess from "../../../utils/ToastSuccess";

export default function ProfileDetails(props) {

  const { jobs } = data
  const { dataUser, localidades } = props
  let token = sessionStorage.getItem('accessToken')

  const getPhotoUser = sessionStorage.getItem("photoUser")
  const [ response, setResponse ] = useState([])
  //const [ getInfoUser, setInforUser ] = useState(infoUser[0])
  
  const [ciudades, setCiudades] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [countWords,setCountWords] = useState(255)
  const [getnameValue, setNameValue] = useState("");
  const [getlastnameValue, setLastNameValue] = useState("");
  const [getRutValue, setRutValue] = useState("");
  const [getCellphoneValue, setCellphoneValue] = useState("");
  const [getBornDateValue, setBornDateValue] = useState("");

  const [getCurrencyValid, setCurrencyValid] = useState(false);
  const [editInformation, setEditInformation] = useState(true);

  const [ disableLocation, setDisableLocation ] = useState(null)
  const [getCurrencyValue, setCurrencyValue] = useState("");
  const [getButton, setButton] = useState();

  const [getGender, setGender] = useState({
    option: "Seleccionar género",
    value: null,
  });
  const [getSpecialization, setSpecialization] = useState({
    option: "Seleccionar especialidad",
    value: null,
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const [getRegion, setRegion] = useState({
    option: "Seleccionar Región",
    value: "seleccionar",
  });

  const [getCity, setCity] = useState({
    option: "Seleccionar Ciudad",
    value: "seleccionar",
  });

  const [getComunne, setComunne] = useState({
    option: "Seleccionar Comuna",
    value: "seleccionar",
  });

  // handlers
  const genderHandler = (option, value) => {
    setGender({ option, value });
  };

  const specializationHandler = (option, value) => {
    setSpecialization({ option, value });
  };

  const regionHandler = (option, value) => {
    setRegion({ option, value });
    const ciudadesIndex = localidades.find(element => {
      return element.region === value;
    });
    setCity({ option: "Seleccionar Ciudad", value: "seleccionar"});
    setComunne({ option: "Seleccionar Comuna", value: "seleccionar" });
    setCiudades(ciudadesIndex.ciudad);
    setDisableLocation(false)
    setComunas([]);
  };

  const cityHandler = (option, value) => {
    setCity({ option, value });
    const comunasData = ciudades.find(element => {
      return element[0] === value;
  });
  setComunne({ option: "Seleccionar Comuna", value: "seleccionar" });
  setComunas(comunasData[1].comunas);
  };

  const comunneHandler = (option, value) => {
    setComunne({ option, value });
  };

  const CountingWords = (e) =>{
    if (e.code === 'Space') {
      return countWords
    }
    if(e.code === "Backspace" && e.target.value.substr((e.target.value).length) === " "){
      return countWords
    }
    if(e.code === "Backspace" && countWords === 255){
      return countWords     
    }else{
      if(e.code === "Backspace" && countWords < 255){
        setCountWords(countWords + 1)
      }else{
        setCountWords(countWords - 1)
      }
    }
  }

  const currencyFormatter = (event) =>{
    const regCLP = new RegExp('^[0-9]+$');
    if(!regCLP.test(event.target.value)){
        return setCurrencyValid(true)
    }else{
        return setCurrencyValid(false)
    }
    
}

  const updateUser = (event) =>{

    event.preventDefault()
    let token = sessionStorage.getItem('accessToken')

    const name = document.getElementById('name').value
    const lastname = document.getElementById('lastname').value
    const rut = document.getElementById('rut').value
    const cellphone = document.getElementById('cellphone').value
    const price = document.getElementById('hourly').value
    const birthday = document.getElementById('date').value
    const gender = document.getElementById('gender').innerText
    const slogan = document.getElementById('slogan').value
    const specialization = document.getElementById('specialization').innerText
    const region = document.getElementById('region').innerText
    const city = document.getElementById('city').innerText
    const commune = document.getElementById('commune').innerText
    const presentation = document.getElementById('presentation').value


    const validation1 = name !== "" && lastname !== "" && rut !== "" && cellphone !== ""
    const validation2 = birthday !== "" && price !== "" && gender !== "" && specialization !== ""
    const validation3 = region !== "" && city !== "" && commune !== "" && presentation !== ""
    if(validation1 && validation2 && validation3){
      
      let personalData = {
        name: name,
        lastname: lastname,
        rut:rut,
        cellphone:cellphone,
        birthday:birthday,
        price:price,
        gender: gender,
        slogan: slogan,
        specialization: specialization,
        region: region,
        city: city,
        commune:commune,
        presentation:presentation,
        classUser: dataUser.classUser
      }

      Axios.put("https://www.services.irodum.com/api/update-user",{personalData ,'authorization' : `${token}`})
      .then((res)=>{
          if(res.status === 200){
            setResponse(200)
          }
      }).catch(error =>{

      }); 

    }
    
    
  }

  const uploadPicture = (event) =>{

    event.preventDefault()
    let imagefile = document.getElementById('formFile');
    const formData = new FormData();
    formData.append('formFile',imagefile.files[0])

    Axios.put("https://www.services.irodum.com/api/images",
    formData,
    {
        headers: {
            'Content-Type': 'multipart/form-data;',
            'Authorization': `${token}`
        }
    }).then((result) => {
        if(result.status === 200){
          if( sessionStorage.getItem('photoUser') !== null && sessionStorage.getItem('photoUser') !== "" && sessionStorage.getItem('photoUser') !== undefined){
            sessionStorage.removeItem('photoUser')
          }
          sessionStorage.setItem('photoUser', "http://localhost:3001" + result.data.imagePath)
        }
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {

    setRegion({
      option: dataUser.regionUser,
      value: dataUser.regionUser,
    })
    setCity({
      option: dataUser.cityUser,
      value: dataUser.cityUser,
    })
    setComunne({
      option: dataUser.communeUser,
      value: dataUser.communeUser,
    })
    if(dataUser.gender !== "" && dataUser.gender !== undefined && dataUser.gender !== null){
      setGender({option: dataUser.gender, value:dataUser.gender})
    }
    if(dataUser.workAreaUser !== "" && dataUser.workAreaUser !== undefined && dataUser.workAreaUser !== null){
      setSpecialization({option: dataUser.workAreaUser, value:dataUser.workAreaUser})
    }
   const isNotEmpty = dataUser.regionUser !== "" && dataUser.regionUser !== undefined 
    && dataUser.cityUser !== "" && dataUser.cityUser !== undefined 
    && dataUser.communeUser !== "" && dataUser.communeUser !== undefined
    setDisableLocation(isNotEmpty)

  }, []);



  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Información Personal</h5>
        </div>
        <div className="col-xl-7">
          <div className="profile-box d-sm-flex align-items-center mb30">
            <div className="profile-img mb20-sm">
              <img
                height={71}
                width={71}
                className="rounded-circle wa-xs"
                src={selectedImage !== null ? selectedImage : dataUser.photoUser ? `https://www.services.irodum.com/api/images/${dataUser.photoUser}` : "/images/team/fl-1.png"}
                style={{
                  height: "71px",
                  width: "71px",
                  objectFit: "cover",
                }}
                onChange={handleImageChange}
                alt="profile"
              />
            </div>
            <div className="profile-content ml20 ml0-xs">
              <div className="d-flex align-items-center my-3">
              <a
                  className="tag-delt text-thm2"
                  onClick={(e) => uploadPicture(e)}
                >
                  <span className="flaticon-tick text-thm2" />
                </a>
                <a
                  className="tag-delt text-thm2 ml10"
                  onClick={() => setSelectedImage(null)}
                >
                  <span className="flaticon-delete text-thm2" />
                </a>
                <label>
                  <input
                    id="formFile"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="d-none"
                    onChange={handleImageChange}
                  />
                  <a className="upload-btn ml10">Subir foto de perfil</a>
                </label>
              </div>
              <p className="text mb-0">
              El tamaño máximo de archivo es de 1 MB, dimensión mínima: 330x300 y adecuado
                son .jpg &amp; .png
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-9">
          <form className="form-style1">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Nombre <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Ej: Juan"
                    disabled={editInformation}
                    defaultValue={dataUser.nameUser}
                    onChange={(e)=>setNameValue(checkName(e.target.value))}
                  />
                  {
                    getnameValue === "" ? <></> : <p style={{ color: 'red' }}>{getnameValue}</p>
                  }
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Apellidos <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    className="form-control"
                    placeholder="Ej: González"
                    disabled={editInformation}
                    defaultValue={dataUser.LastNameUser}
                    onChange={(e)=>setLastNameValue(checkLastName(e.target.value))}
                  />
                  {
                    getlastnameValue === "" ? <></> : <p style={{ color: 'red' }}>{getlastnameValue}</p>
                  }
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Rut <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    id="rut"
                    type="text"
                    className="form-control"
                    placeholder="Ej: 11111111-1"
                    disabled={editInformation}
                    defaultValue={dataUser.rutUser}
                    onChange={(e)=>setRutValue(checkRut(e.target.value))}
                  />
                  {
                    getRutValue === "" ? <></> : <p style={{ color: 'red' }}>{getRutValue}</p>
                  }
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Correo Electrónico
                  </label>
                  <input
                    disabled
                    id="email"
                    type="email"
                    className="form-control"
                    defaultValue={dataUser.emailUser}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Celular <span style={{ color: 'red' }}>*</span>
                  </label>
                  <input
                    id="cellphone"
                    type="text"
                    className="form-control"
                    placeholder="Ej: 912345678"
                    disabled={editInformation}
                    defaultValue={dataUser.cellphone}
                    onChange={(e)=>setCellphoneValue(checkCellphone(e.target.value))}
                  />
                  {
                    getCellphoneValue === "" ? <></> : <p style={{ color: 'red' }}>{getCellphoneValue}</p>
                  }
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                <label className="heading-color ff-heading fw500 mb10">
                    Fecha de Nacimiento <span style={{ color: 'red' }}>*</span>
                  </label>
                <input
                    id="date"
                    type="date"
                    className="form-control"
                    placeholder="Ej: 20.000"
                    disabled={editInformation}
                    defaultValue={dataUser.bornDate}
                    onChange={(e)=>setBornDateValue(checkBornDate(e.target.value))}
                  />
                  {
                    getBornDateValue === "" ? <></> : <p style={{ color: 'red' }}>{getBornDateValue}</p>
                  }
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                <label className="heading-color ff-heading fw500 mb10">
                    Precio/Hora <span style={{ color: 'red' }}>*</span>
                  </label>
                <input
                    id="hourly"
                    type="text"
                    className="form-control"
                    placeholder="Ej: 20.000"
                    disabled={editInformation}
                    defaultValue={dataUser.priceWork}
                    onKeyUp={(e)=>currencyFormatter(e)}           
                  />
                  {
                    getCurrencyValid === false ? <></> : <p style={{ color: 'red' }}>Por favor, ingrese el precio sin puntos ni comas</p>
                  }
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    id="gender"
                    label="Género"
                    defaultSelect={getGender}
                    disabled={editInformation}
                    data={[
                      { option: "Masculino", value: "Masculino" },
                      {
                        option: "Femenino",
                        value: "Femenino",
                      },
                      { option: "Prefiero no responder", value: "Prefiero no responder" },
                    ]}
                    handler={genderHandler}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Eslogan (Opcional)
                  </label>
                  <input
                    id="slogan"
                    type="text"
                    className="form-control"
                    defaultValue={dataUser.slogan}
                    placeholder="Ej: “Alguien en quien confiar”"
                    disabled={editInformation}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="mb20">
                  <SelectInput
                    id="specialization"
                    label="Especialidad"
                    disabled={editInformation}
                    defaultSelect={getSpecialization}
                    data={jobs.map((item) =>{ 
                      return { option: item, value: item }
                    })}
                    handler={specializationHandler}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb20">
                  <SelectInput
                    id="region"
                    label="Región"
                    disabled={editInformation}
                    defaultSelect={getRegion}
                    data={localidades.map((item) =>{ 
                      return { option: item.region, value: item.region }
                    })}
                    handler={regionHandler}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb20">
                  <SelectInput
                    id="city"
                    label="Ciudad"
                    disabled={disableLocation ? true : false}
                    defaultSelect={getCity}
                    data={ciudades.map((item) =>{ 
                      return { option: item[0], value: item[0] }
                    })}
                    handler={cityHandler}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb20">
                  <SelectInput
                    id="commune"
                    label="Comuna"
                    disabled={disableLocation ? true : false}
                    defaultSelect={getComunne}
                    data={comunas.map((item) =>{ 
                      return { option: item, value: item }
                    })}
                    handler={comunneHandler}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb10">
                  <label className="heading-color ff-heading fw500 mb10">
                  Preséntese
                  </label>
                  <textarea 
                    id="presentation" 
                    cols={30} 
                    rows={6} 
                    onKeyUp={(e)=>CountingWords(e)} 
                    defaultValue={dataUser.workResume}
                    disabled={editInformation}
                    placeholder="Ej: Soy un trabajador con más de 5 años de experiencia...." />
                    
                  <p>{`Quedan ${countWords} palabras`}</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="text-start" hidden={editInformation}>
                  <button className="ud-btn btn-thm" onClick={(e) => updateUser(e)} >
                    Guardar
                    <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
                <div className="profile-box mb30">
                    <div>
                      <div className="d-flex align-items-center my-3">
                        <label>
                          <a className="upload-btn"
                            onClick={()=>setEditInformation(!editInformation)}
                          >Editar Perfil</a>
                        </label>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {
          response === 200 ? <ToastSuccess text={"Datos actualizados correctamente"}/> : <></>
        }
    </>
  );
}
