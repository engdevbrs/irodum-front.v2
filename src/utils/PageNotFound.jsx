import { Link } from "react-router-dom";
import pagenotfound from "../images/icon/error-page-img.svg"

export default function PageNotFound() {
  return (
    <>
      <section className="our-error">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="animate_content text-center text-xl-start">
                <div className="animate_thumb">
                  <img
                    height={400}
                    width={400}
                    className="w-100"
                    src={pagenotfound}
                    alt="error-page-img"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 offset-xl-1 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="error_page_content text-center text-xl-start">
                <div className="erro_code">
                  40<span className="text-thm">4</span>
                </div>
                <div className="h2 error_title">
                  Oops! Parece que estás perdido.
                </div>
                <p className="text fz15 mb20">
                La página que estás buscando no está disponible. Intenta buscar
                de nuevo o usa el botón ir <br className="d-none d-lg-block" /> a.
                </p>
                <Link to="/" className="ud-btn btn-thm">
                  Volver al inicio
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
