import { Link } from "react-router-dom";

export default function AboutArea() {
  return (
    <>
      <section className="our-faq pb90 pt100">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-4">
              <div className="vertical-tab">
                <div className="widget_list">
                  <nav>
                    <div className="nav flex-column nav-tabs text-start">
                      <button
                        className="nav-link active text-start"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-accountpayment"
                      >
                        <span>Para Empresas</span>
                      </button>
                      <button
                        className="nav-link text-start"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-manageother"
                      >
                        <span>Para Independientes</span>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-accountpayment"
                  aria-labelledby="nav-accountpayment-tab"
                  >
                  <div className="for-hire">
                    <h4>Para Contratar</h4>
                    <p className="text mb30">
                    💼 Para Empresas: ¿Necesitas servicios para tu empresa? 
                    Encuentra proveedores confiables y mejora la eficiencia de tu negocio.
                    </p>
                    <p className="text mb30">
                      Ésta sección es para ti.
                    </p>
                    <Link className="ud-btn btn-thm-border mb25 me-4" to="/registro/hiring">
                      Comenzar
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-manageother"
                  aria-labelledby="nav-manageother-tab"
                >
                  <div className="for-hire">
                    <h4>Para Independientes</h4>
                    <p className="text mb30">
                    🤝 ¿Eres un profesional con talento? Únete a nuestra comunidad y haz crecer tu negocio. 
                    Publicita tus servicios, muestra tu experiencia y llega a nuevos clientes en tu área.
                    </p>
                    <p className="text mb30">
                      Ésta sección es para ti.
                    </p>
                    <Link className="ud-btn btn-thm-border mb25 me-4" to="/registro/freelancer">
                      Comenzar
                      <i className="fal fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
