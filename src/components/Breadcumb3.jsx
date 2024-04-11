import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import lefttop from "../images/vector-img/left-top.png"
import rightbot from "../images/vector-img/right-bottom.png"
import vectorservice from "../images/vector-img/vector-service-v1.png"
import serviceimg from "../images/gallery/servicesimg.png"


export default function Breadcumb3() {

  const [toggler, setToggler] = useState(false);

  const path = useLocation()
  const pathname = path.pathname

  return (
    <>
      <section className="breadcumb-section pt-0">
        <div
          className={`cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center px30-lg cta-service-v2`}
        >
          <img
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src={lefttop}
            alt="vector-img"
          />
          <img
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src={rightbot}
            alt="vector-img"
          />
          <img
            height={300}
            className="service-v1-vector bounce-y d-none d-lg-block"
            src={serviceimg}
            alt="vector-img"
          />

          <div className="container">
            <div className="row wow fadeInUp">
              <div
                className="col-xl-8 col-lg-8 col-md-8">
                <div
                  className="position-relative">
                  <h2>Construcción, reparación, cuidado personal y más</h2>
                  <p className="text mb30">
                  ¡Haz realidad tus proyectos con nuestro Marketplace de Oficios!
                  </p>
                  <div className="d-flex align-items-center">
                    <a
                      onClick={() => setToggler(!toggler)}
                      className="video-btn mr10 popup-iframe popup-youtube"
                    >
                      <i className="fal fa-play" />
                    </a>
                    <h6 className="mb-0">Cómo funciona IRODUM</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=7EHnQ0VM4KY"]}
      />
    </>
  );
}
