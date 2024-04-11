import { useState } from "react";
import { Link } from "react-router-dom";
import { Buffer } from "buffer"; 
import about2 from "../../images/about/about-2.jpg"

export default function FreelancerProfileCard({ data }) {

  const infoService = JSON.parse(data.infoAboutService)
  let imageServicesToString = Buffer.from(data.imageServices)
  let serviceImg = JSON.parse(imageServicesToString)

  const [isFavActive, setFavActive] = useState(false);
  return (
    <>
      <div className="listing-style1">
        <div className="list-thumb">
          <img
            height={190}
            width={255}
            className="w-100 h-100 object-fit-cover"
            src={serviceImg !== null && serviceImg !== "" && serviceImg !== undefined ?'https://www.services.irodum.com/'+ serviceImg[0].originalname : about2}
            alt="thumbnail"
          />
          <a
            onClick={() => setFavActive(!isFavActive)}
            className={`listing-fav fz12 ${isFavActive ? "ui-fav-active" : ""}`}
          >
            <span className="far fa-heart" />
          </a>
        </div>
        <div className="list-content">
          <p className="list-text body-color fz14 mb-1">{infoService.category}</p>
          <h6 className="list-title">
            <Link to={`/servicio/${data.idServices}`}>
              {infoService.titlebasic}
            </Link>
          </h6>
          <div className="review-meta d-flex align-items-center">
            <i className="fas fa-star fz10 review-color me-2" />
            <p className="mb-0 body-color fz14">
              Tiempo de entrega{" "}
              <span className="dark-color me-2">{infoService.delivertime}</span>
            </p>
          </div>
          <hr className="my-2" />
          <div className="list-meta mt15">
            <div className="budget">
              <p className="mb-0 body-color">
                Precio desde
                <span className="fz17 fw500 dark-color ms-1">
                  ${infoService.pricebasic}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
