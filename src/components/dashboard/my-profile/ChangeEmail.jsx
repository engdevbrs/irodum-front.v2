import { Link } from "react-router-dom";

export default function ChangeEmail() {
  return (
    <>
      <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb25">
          <h5 className="list-title">Cambiar correo electrónico</h5>
        </div>
        <div className="col-lg-7">
          <div className="row">
            <form className="form-style1">
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw500 mb10">
                      Nuevo Email 
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Ej: hola@gmailcom"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="mb20">
                    <label className="heading-color ff-heading fw500 mb10">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="text-start">
                    <Link className="ud-btn btn-thm" to="/contact">
                      Cambiar Correo
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
