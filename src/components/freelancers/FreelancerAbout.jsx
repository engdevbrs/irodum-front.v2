import { Link } from "react-router-dom";

export default function FreelancerAbout(props) {

  const { infocard } = props

  return (
    <>
      <div className="price-widget pt25 bdrs8">
        <h3 className="widget-title">
          ${infocard.priceWork}
          <small className="fz15 fw500"> /por hora</small>
        </h3>
        <div className="category-list mt20">
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-place text-thm2 pe-2 vam" />
              Ubicación
            </span>
            <span>{ (infocard.cityUser !== null && infocard.communeUser !== null) ? infocard.cityUser+", "+infocard.communeUser : "Indeterminada" }</span>
          </a>
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-photo text-thm2 pe-2 vam" />
              Rut
            </span>
            <span>{infocard.rutUser}</span>
          </a>
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-30-days text-thm2 pe-2 vam" />
              Fecha Nacimiento
            </span>
            <span>{infocard.bornDate}</span>
          </a>
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-mars text-thm2 pe-2 vam" />
              Género
            </span>
            <span>{infocard.gender}</span>
          </a>
          <a className="d-flex align-items-center justify-content-between bdrb1 pb-2">
            <span className="text">
              <i className="flaticon-mobile text-thm2 pe-2 vam" />
              Celular
            </span>
            <span>{infocard.cellphone}</span>
          </a>
        </div>
        <div className="d-grid">
          <a className="ud-btn btn-thm"
              id="edit"
              data-bs-toggle="modal"
              data-bs-target="#proposalModalFreelancer">
            Enviar Solicitud
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
}
