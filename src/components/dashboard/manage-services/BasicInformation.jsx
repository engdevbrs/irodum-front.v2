import Axios from 'axios'
import { useEffect, useState } from "react";
import SelectInput from '../../../utils/SelectInput';
import Option from "../../../utils/Option"

const options = [
  "Adaptabilidad",
  "Comunicación",
  "Proactividad",
  "Creatividad",
  "Puntualidad",
  "Responsabilidad",
  "Gestión del Tiempo",
  "Paciencia",
  "Trabajo en equipo",
  "Compromiso con la calidad",
];

export default function BasicInformation(props) {



  const [option2, setOption2] = useState([]);

  const [localidades, setLocalidades] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [comunas, setComunas] = useState([]);

  const optionHandler2 = (data) => {
    if (!option2.includes(data)) {
      return setOption2((prev) => [...prev, data]);
    }
    setOption2(option2.filter((item) => item !== data));
  };
  
  const [getCategory, setCategory] = useState({
    option: "Seleccionar opción",
    value: "seleccionar",
  });

  const [getResTime, setResTime] = useState({
    option: "Seleccionar opción",
    value: "seleccionar",
  });
  const [getDeliveryTime, setDeliveryTime] = useState({
    option: "Seleccionar opción",
    value: "seleccionar",
  });

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
  const categoryHandler = (option, value) => {
    setCategory({
      option,
      value,
    });
  };

  const resTimeHandler = (option, value) => {
    setResTime({
      option,
      value,
    });
  };
  const deliveryTimeHandler = (option, value) => {
    setDeliveryTime({
      option,
      value,
    });
  };

  const regionHandler = (option, value) => {
    setRegion({ option, value });
    const ciudadesIndex = localidades.find(element => {
      return element.region === value;
    });
    setCity({ option: "Seleccionar Ciudad", value: "seleccionar"});
    setComunne({ option: "Seleccionar Comuna", value: "seleccionar" });
    setCiudades(ciudadesIndex.ciudad);
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

  const addBasicInformation = () => {
    const addExtraService = {
      titlebasic: document.getElementById('titlebasic').value,
      pricebasic: document.getElementById('pricebasic').value,
      category: document.getElementById('category').innerText,
      aptitudes: document.getElementById('skills').innerText,
      responsetime: document.getElementById('response').innerText,
      delivertime: document.getElementById('deliver').innerText,
      region: document.getElementById('region').innerText,
      city:document.getElementById('city').innerText,
      commune:document.getElementById('commune').innerText,
      servicedetail: document.getElementById('servicedetail').value,
    }
    props.informationDetail(addExtraService)
  }

  useEffect(() => {

    Axios.get("https://www.services.irodum.com/api/localidades").then((res)=>{
        
        if(res.status === 200 && res.data !== null && res.data !== undefined){
          setLocalidades(res.data);
        }else{
          setLocalidades([]);
        }
    });        
  },[]);

  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Información Básica</h5>
        </div>
        <div className="col-xl-8">
          <form className="form-style1">
            <div className="row">
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Título del Servicio
                  </label>
                  <input
                    id='titlebasic'
                    type="text"
                    className="form-control"
                    placeholder="Ej: Armado de Estructuras"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <label className="heading-color ff-heading fw500 mb10">
                    Precio desde
                  </label>
                  <input
                    id='pricebasic'
                    type="number"
                    className="form-control"
                    placeholder="Ej: $100.000"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    id="category"
                    label="Categoría"
                    defaultSelect={getCategory}
                    handler={categoryHandler}
                    data={[
                      {
                        option: "Seleccionar",
                        value: "seleccionar",
                      },
                      {
                        option: "Construcción & Reparación",
                        value: "construccion",
                      },
                      {
                        option: "Electricidad",
                        value: "electricidad",
                      },
                      {
                        option: "Cuidado Personal",
                        value: "cuidado-personal",
                      },
                      {
                        option: "Limpieza",
                        value: "limpieza",
                      },
                      {
                        option: "Cocina",
                        value: "cocina",
                      },
                      {
                        option: "Video & Animación",
                        value: "video-animacion",
                      },
                      {
                        option: "Musica & Audio",
                        value: "musica-audio",
                      },
                      {
                        option: "Programación & Tecnología",
                        value: "programming-tech",
                      },
                      {
                        option: "Mecánica Automotriz",
                        value: "mecanica",
                      },
                      {
                        option: "Agricultura & Ganadería",
                        value: "agricultura-ganaderia",
                      },
                      {
                        option: "Transporte",
                        value: "transporte",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ui-content mb40">
                  <Option
                    id="skills"
                    lebel="Aptitudes"
                    data={options.sort()}
                    selected={option2}
                    handler={optionHandler2}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    id="response"
                    label="Tiempo de Respuesta"
                    defaultSelect={getResTime}
                    handler={resTimeHandler}
                    data={[
                      {
                        option: "Seleccionar",
                        value: "seleccionar",
                      },
                      {
                        option: "Usualmente Rápido",
                        value: "response-quick",
                      },
                      {
                        option: "Suelo demorar un poco",
                        value: "response-normal",
                      },
                      {
                        option: "Me toma un tiempo responder",
                        value: "response-slow",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb20">
                  <SelectInput
                    id="deliver"
                    label="Tiempo de Entrega"
                    defaultSelect={getDeliveryTime}
                    handler={deliveryTimeHandler}
                    data={[
                      {
                        option: "Seleccionar",
                        value: "seleccionar",
                      },
                      {
                        option: "Depende de los requisitos",
                        value: "delivery-time-one",
                      },
                      {
                        option: "De 1 a 7 dias",
                        value: "delivery-time-two",
                      },
                      {
                        option: "De 8 a 15 dias",
                        value: "delivery-time-three",
                      },
                      {
                        option: "De 15 a 30 dias",
                        value: "delivery-time-four",
                      },
                      {
                        option: "De 1 a 2 meses",
                        value: "delivery-time-five",
                      },
                      {
                        option: "De 2 a 3 meses",
                        value: "delivery-time-six",
                      },
                      {
                        option: "De 3 a 4 meses",
                        value: "delivery-time-seven",
                      },
                      {
                        option: "De 5 a 6 meses",
                        value: "delivery-time-eight",
                      },
                      {
                        option: "De 6+ meses",
                        value: "delivery-time-nine",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb20">
                  <SelectInput
                    id="region"
                    label="Región"
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
                    defaultSelect={getComunne}
                    data={comunas.map((item) =>{ 
                      return { option: item, value: item }
                    })}
                    handler={comunneHandler}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div>
                  <label className="heading-color ff-heading fw500 mb10">
                    Detalles del Servicio
                  </label>
                  <textarea id='servicedetail' cols={30} rows={6} placeholder="Descripción.." />
                </div>
              </div>
            </div>
          </form>
          <a className="ud-btn btn-thm mt-2" onClick={()=> addBasicInformation()}>
            Agregar Información
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
}
