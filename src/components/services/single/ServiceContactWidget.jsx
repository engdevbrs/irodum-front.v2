import { Link } from "react-router-dom";

export default function ServiceContactWidget(props) {

  const infoservice  = props.infoAboutService


  return (
    <>
      <div className="freelancer-style1 service-single mb-0">
        <div className="wrapper d-flex align-items-center">
          <div className="thumb position-relative mb25">
            <img
              height={60}
              width={60}
              className="rounded-circle mx-auto"
              src={"https://www.services.irodum.com/api/images/" + infoservice.photoUser}
              alt="rounded-circle"
            />
            <span className="online" />
          </div>
          <div className="ml20">
            <h5 className="title mb-1">{`${infoservice.nameUser} ${infoservice.LastNameUser}`}</h5>
            <p className="mb-0">{infoservice.workAreaUser}</p>
            <div className="review">
              <p>
                <i className="fas fa-star fz10 review-color pr10" />
                <span className="dark-color">{infoservice.rankingUser}</span> (595 reviews)
              </p>
            </div>
            <q className="mb-0">{infoservice.workResume}</q>
          </div>
        </div>
        <hr className="opacity-100" />
        <div className="details">
          <div className="fl-meta d-flex align-items-center justify-content-between">
            <a className="meta fw500 text-start">
              Ciudad
              <br />
              <span className="fz14 fw400">{infoservice.cityUser}</span>
            </a>
            <a className="meta fw500 text-start">
              Tarifa
              <br />
              <span className="fz14 fw400">{`$${infoservice.priceWork} / hr`}</span>
            </a>
            <a className="meta fw500 text-start">
              Éxito laboral
              <br />
              <span className="fz14 fw400">%98</span>
            </a>
          </div>
        </div>
        <hr class="opacity-100" />
        <div className="d-flex justify-content-center">
        <div className="social-style1">
            <a>
              <i className="fab fa-facebook-f list-inline-item" />
            </a>
            <a>
              <i className="fab fa-twitter list-inline-item" />
            </a>
            <a>
              <i className="fab fa-instagram list-inline-item" />
            </a>
            <a>
              <i className="fab fa-linkedin-in list-inline-item" />
            </a>
          </div>
        </div>
        <div className="d-grid mt20">
          <Link to="/freelancer-single" className="ud-btn btn-thm-border">
            Contactarme
            <i className="fal fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </>
  );
}
