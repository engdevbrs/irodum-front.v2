import { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  
  const[ warnCredentials, setwarnCredentials ]=useState([]);
  const router = useNavigate()

  const[ userPass, setPass]=useState("password");
  const[ userName,setUserName ]=useState("");

  const submitForm = (e) =>{
      e.preventDefault();
      Axios.post("https://www.services.irodum.com/api/login", {userName,userPass})
        .then((result) => {
            if(result.status === 200){
                  sessionStorage.setItem("accessToken", result.data.accessToken);
                  setwarnCredentials(false)
                if(result.data.userType === "independiente"){
                      localStorage.setItem("isfreelance", true);
                     return router("/dashboard")
                }else{
                      localStorage.setItem("isfreelance", false);
                }
            }
        }).catch(error => {
              setwarnCredentials(true)
        });
  }; 

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bgc-thm4 mm-wrapper mm-wrapper--position-left-front">
      <section className="our-login">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Iniciar Sesión</h2>
                <p className="paragraph">
                Ofrezca a sus visitantes una experiencia online sólida y confiable
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 col-lg-8 col-md-10 mx-auto">
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30">
                  <h4>¡Nos alegra verte de nuevo!</h4>
                  <p className="text">
                  No tienes una cuenta?{" "}
                    <Link to="/registrarse" className="text-thm">
                      Regístrate!
                    </Link>
                  </p>
                </div>
                <div className="mb20">
                  <label className="form-label fw600 dark-color">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="alitfn58@gmail.com"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb15">
                  <label className="form-label fw600 dark-color">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="*******"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                  <label className="custom_checkbox fz14 ff-heading">
                    Recordarme
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <Link to={"recuperar-contraseña"} className="fz14 ff-heading">Olvidaste tu contraseña?</Link>
                </div>
                <div className="d-grid mb20">
                  <button className="ud-btn btn-thm" onClick={(e) => submitForm(e)}>
                    Iniciar Sesión <i className="fal fa-arrow-right-long" />
                  </button>
                </div>
                {
                  warnCredentials === true ?           
                  <div className="message-alart-style1">
                    <div
                      className="alert alart_style_three alert-dismissible fade show mb20"
                      role="alert"
                    >
                      Usuario y/o Contraseña son incorrectas
                      <i
                        className="far fa-xmark btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      />
                    </div>
                  </div> : <></>
                }
                <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">O</span>
                </div>
                <div className="d-md-flex justify-content-between">
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
    </div>
  );
}
