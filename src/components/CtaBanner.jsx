import freelancerabout from "../images/gallery/freelancer-about.png"

export default function CtaBanner() {

  return (
    <>
      <section className="p-0">
        <div
          className={`cta-banner3 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg overflow-hidden`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title">
                    Todo un mundo de talento{" "}
                      <br className="d-none d-xl-block" /> freelance a tu alcance
                    </h2>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Prueba de calidad</h4>
                      <p className="text mb-0 fz15">
                      Verifique las muestras de trabajo de cualquier trabajador, las reseñas de los clientes y la verificación de identidad.
                      <br className="d-none d-lg-block" />{" "}
                        
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Sin coste hasta terminar el trabajo</h4>
                      <p className="text mb-0 fz15">
                      Entreviste a posibles candidatos para su trabajo, negocie tarifas y  
                      <br className="d-none d-lg-block" /> pague solo para el trabajo que apruebe.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Seguro y protegido</h4>
                      <p className="text mb-0 fz15">
                      Concéntrese en su trabajo sabiendo que le ayudamos a proteger sus datos y
                        privacidad. Estamos aquí con soporte 24 horas al día, 7 días a la semana si lo necesita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-7" >
                <div className="row d-flex justify-content-center">
                  <img
                    src={freelancerabout}
                    alt="cta banner 3"
                    style={{ width:'60%' }}
                  />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
