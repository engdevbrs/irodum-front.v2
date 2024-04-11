import lefttop from "../images/vector-img/left-top.png"
import rightbot from "../images/vector-img/right-bottom.png"
import projectsimg from "../images/gallery/projectsimg.png"

export default function BreadcumbProjects() {
  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <img
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src={lefttop}
            alt="left-top"
          />
          <img
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src={rightbot}
            alt="right-bottom"
          />
          <img
            height={300}
            className="service-v1-vector bounce-y d-none d-xl-block"
            src={projectsimg}
            alt="vector-service"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-7">
                <div className="position-relative">
                  <h2>Lista de proyectos</h2>
                  <p className="text mb30">
                    A continuación podrás ver una lista de todos los proyectos activos.
                  </p>
                </div>
                <div className="advance-search-tab bgc-white p10 bdrs4 zi1 position-relative">
                  <div className="row">
                    <div className="col-md-8 col-xl-9">
                      <div className="advance-search-field ">
                        <form className="form-search position-relative">
                          <div className="box-search bb1-sm">
                            <span className="icon far fa-magnifying-glass" />
                            <input
                              className="form-control"
                              type="text"
                              name="search"
                              placeholder="Qué estás buscando?"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-3">
                      <div className="text-center text-xl-start">
                        <button className="ud-btn btn-thm w-100" type="button">
                          Buscar
                        </button>
                      </div>
                    </div>
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
