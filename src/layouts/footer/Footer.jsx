import { about, category, support } from "../../data/footer";
import FooterSocial5 from "./FooterSocial";
import { Link } from "react-router-dom";
import icon from "../../images/icon/icon.png"

export default function Footer() {
  return (
    <>
      <section className="footer-style1 at-home2 pb-0 pt60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-widget mb-4 mb-lg-5">
                <div className="mailchimp-widget mb90">
                  <h6 className="title text-white mb20">Subscríbete</h6>
                  <div className="mailchimp-style1 at-home9 bdrs60 overflow-hidden">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Tu dirección de correo"
                    />
                    <button className="text-thm" type="submit">
                      Enviar
                    </button>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <div className="link-style1 mb-3">
                      <h6 className="text-white mb25">Acerca de</h6>
                      <div className="link-list">
                        {about.map((item,i) => (
                          <Link key={ i } to={item.path}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="link-style1 mb-3">
                      <h6 className="text-white mb25">Categorías</h6>
                      <ul className="ps-0">
                        {category.map((item,i) => (
                          <li key={ i }>
                            <Link to={item.path}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="link-style1 mb-3">
                      <h6 className="text-white mb25">Ayuda</h6>
                      <ul className="ps-0">
                        {support.map((item,i) => (
                          <li key={ i }>
                            <Link to={item.path}>{item.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 offset-xl-2">
              <div className="footer-widget mb-4 mb-lg-5">
                <Link className="footer-logo" href="/">
                  <img
                    height={40}
                    width={133}
                    className="mb40 object-fit-contain"
                    src={icon}
                    alt="logo"
                  />
                </Link>
                <div className="row mb-4 mb-lg-5">
                  <div className="col-auto">
                    <div className="contact-info">
                      <p className="info-title mb-2">Puedes llamarnos directamente a</p>
                      <h5 className="info-phone">
                        <a className="text-white" href="#">
                          +(569) 93158746
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="contact-info">
                      <p className="info-title mb-2">Necesitas ayuda?</p>
                      <h5 className="info-mail">
                        <a className="text-white" href="mailto:hi@Irodum.com">
                          soporte@irodum.com
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="app-widget at-home9">
                  <h5 className="title text-white mb20">Versión Móvil</h5>
                  <div className="row mb-4 mb-lg-5">
                    <div className="col-auto">
                      <a>
                        <div className="app-info d-flex align-items-center mb10 bdrs60">
                          <div className="flex-shrink-0 pr15 border-0">
                            <i className="fab fa-apple fz30 text-white" />
                          </div>
                          <div className="flex-grow-1">
                            <p className="app-text text-white fz13 mb0">
                              Obténlo en
                            </p>
                            <h6 className="app-title mb-1 text-white">
                              Apple Store
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a>
                        <div className="app-info d-flex align-items-center mb10 bdrs60">
                          <div className="flex-shrink-0 pr15 border-0">
                            <i className="fab fa-google-play fz24 text-white" />
                          </div>
                          <div className="flex-grow-1">
                            <p className="app-text text-white fz13 mb0">
                              Descárgalo desde
                            </p>
                            <h6 className="app-title mb-1 text-white">
                              Google Play
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <FooterSocial5 />
              </div>
            </div>
          </div>
        </div>
        <div className="container white-bdrt1 py-4">
          <div className="row">
            <div className="col-sm-6">
              <div className="text-center text-lg-start">
                <p className="copyright-text mb-2 mb-md-0 text-white-light ff-heading">
                  © Copyright{" "} |
                  <Link
                    to="https://www.engdevbrs.com"
                    target="_blank"
                  >{" "}Boris Rioseco{" "}
                  </Link>
                  Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
