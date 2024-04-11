import { Link } from "react-router-dom";
import about3 from "../images/about/about-3.png"
import hiring from "../images/home/hiringhome.svg"

export default function OurCta() {


  return (
    <>
      <section
        className={`bgc-thm4 our-cta pt90 pb90 pt60-md pb60-md mt100 mt0-lg`}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-7 col-xl-5 wow fadeInLeft">
              <div className="cta-style3">
                <h2 className="cta-title">
                Encuentre el talento necesario para hacer crecer su negocio.
                </h2>
                <p className="cta-text">
                  Anuncie sus trabajos a miles de usuarios mensuales y reciba 
                  cientos de propuestas.
                </p>
                <Link to="/registro/hiring" className="ud-btn btn-thm2">
                  Empezar Hoy <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-5 position-relative wow zoomIn">
              <div className="cta-img">
                <img
                  height={489}
                  width={596}
                  className="w-100 h-100 object-fit-contain"
                  src={hiring}
                  alt="comenzar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
