import lefttop from "../images/vector-img/left-top.png"
import rightbot from "../images/vector-img/right-bottom.png"
import vectorservice from "../images/vector-img/vector-service-v1.png"
import freelancerimg from "../images/gallery/freelancersimg.png"

export default function Breadcumb4() {
  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-service-v1 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <img
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src={lefttop}
            alt="vector"
          />
          <img
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src={rightbot}
            alt="vector"
          />
          <img
            height={300}
            className="service-v1-vector bounce-y d-none d-lg-block"
            src={freelancerimg}
            alt="vector"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="position-relative">
                  <h2>Lista Freelancer</h2>
                  <p className="text mb-0">
                    A continuación podrás encontrar a todos los trabajadores independientes, sus servicios y habilidades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
