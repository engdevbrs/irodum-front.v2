import { useEffect, useState } from "react";
import useScreen from "../../../hook/useScreen"
import { Sticky, StickyContainer } from "react-sticky";
import ServiceDetailSlider from "./ServiceDetailSlider";
import ServiceDetailReviewInfo from "./ServiceDetailReviewInfo";
import ServiceDetailPrice from "./ServiceDetailPrice";
import ServiceContactWidget from "./ServiceContactWidget";
import ServiceDetailComment from "./ServiceDetailComment";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ServiceDetail(props) {

  const { id } = useParams();

  const isMatchedScreen = useScreen(1216);
  const [getSelect, setSelect] = useState([]);
  const [getReviewsData, setReviewsData] = useState([]);

  let { extraServices, infoAboutService} = props.infoservice
  infoAboutService = JSON.parse(infoAboutService)
  extraServices = JSON.parse(extraServices)

  // handler
  const serviceSelectHandler = (value) => {
    const isExist = getSelect.includes(value);

    if (!isExist) {
      return setSelect((old) => [...old, value]);
    }

    const deleted = getSelect.filter((item) => item !== value);
    setSelect(deleted);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    axios.get('https://www.services.irodum.com/api/rating-service/' + id).then((res)=>{
      if(res.status === 200){
        setReviewsData(res.data)
      }
    }).catch((error)=>{
      setReviewsData([])
    })

  }, []);


  return (
    <>
      <StickyContainer>
        <section className="pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wrap">
              <div className="col-lg-8">
                <div className="column">
                  <ServiceDetailSlider data={infoAboutService} imgs={props.infoservice.imageServices}/>
                  <div className="service-about">
                    <h4>Acerca del Servicio</h4>
                    <p className="text mb30">
                      {infoAboutService.servicedetail}
                    </p>
                    <div className="d-flex align-items-start mb50">
                      <div className="list1">
                        <h6>Tipo de Servicio</h6>
                        <p className="text mb-0">{infoAboutService.category}</p>
                      </div>
                      <div className="list1 ml80">
                        <h6>Mis Aptitudes</h6>
                        {props.aptitudes.map((value,key) =>{
                          return(
                            <p className="text mb-0" key={key}>{value}</p>
                          )
                        })}
                      </div>
                    </div>
                    <hr className="opacity-100 mb60" />
                    {
                      extraServices !== null ? 
                      <>
                        <h4>Agregar Servicios Extras</h4>
                        <div className="extra-service-tab mb40 mt30">
                          <nav>
                            <div className="nav flex-column nav-tabs">
                              {extraServices.map((item,i) => (
                                <button
                                  key={ i }
                                  className={`nav-link ${
                                    getSelect?.includes(item.id) ? "active" : ""
                                  }`}
                                >
                                  <label className="custom_checkbox fw500 text-start">
                                    {`${item.title} (+${item.days} días)`}
                                    <span className="text text-bottom">{item.brief}</span>
                                    <input
                                      type="checkbox"
                                      checked={getSelect?.includes(item.id)}
                                      onChange={() => serviceSelectHandler(item.id)}
                                    />
                                    <span className="checkmark" />
                                  </label>
                                  <span className="price">${item.price}</span>
                                </button>
                              ))}
                            </div>
                          </nav>
                        </div>
                      </> : <></>
                    }
                    {
                      getReviewsData.length >= 1 ? <ServiceDetailReviewInfo data={getReviewsData}/> : <></>
                    }
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="column">
                <div className="scrollbalance-inner">
                  <div className="blog-sidebar ms-lg-auto">
                    <ServiceContactWidget infoAboutService={props.infoservice}/>
                  </div>
                </div>
                </div>
              </div>
              <ServiceDetailComment data={props.infoservice}/>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}
