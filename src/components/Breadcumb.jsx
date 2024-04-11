import { Link } from "react-router-dom";
import rightbottom from "../images/vector-img/right-bottom.png"
import lefttop from "../images/vector-img/left-top.png"



export default function Breadcumb({ title, brief, isBtnActive }) {
  return (
    <>
      <section className="breadcumb-section wow fadeInUp mt40">
        <div className="cta-commmon-v1 cta-banner bgc-thm2 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
          <img
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src={lefttop}
            alt="object 1"
          />
          <img
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src={rightbottom}
            alt="object 2"
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div
                  className="position-relative wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <h2 className="text-white">{title}</h2>
                  <p className="text mb30 text-white">{brief}</p>
                  {isBtnActive && (
                    <Link className="ud-btn btn-thm" to="/contacto">
                      Conviértete en vendedor
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
