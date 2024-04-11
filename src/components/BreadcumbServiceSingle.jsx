import lefttop from "../images/vector-img/left-top.png"
import rightbot from "../images/vector-img/right-bottom.png"
import vectorservice from "../images/vector-img/vector-service-v1.png"

export default function BreadcumbServiceSingle(props) {

  const { infouser,infoservice } = props

  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-service-single cta-banner mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
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
            width={532}
            className="service-v1-vector bounce-y d-none d-xl-block"
            src={vectorservice}
            alt="vector-service"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-7">
                <div className="position-relative">
                <h2>{infoservice.titlebasic}</h2>
                <h6><q>{ infouser.slogan !== "" && infouser.slogan !== null ? infouser.slogan : <></>}</q></h6>
                  <div className="list-meta mt30">
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="fas fa-star vam fz10 review-color me-2" />
                      {`${infouser.rankingUser} evaluación`}
                    </p>
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="flaticon-file-1 vam fz20 me-2" />2 Órdenes en total
                    </p>
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="flaticon-calendar vam fz20 me-2" />
                      {`Miembro desde: ${infouser.registerDay}`}
                    </p>
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
