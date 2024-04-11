import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import {Buffer} from 'buffer';
import about2 from "../../../images/about/about-2.jpg"

export default function ManageServiceCard({ data }) {
  let idservice = data.idServices
  let servicesToString = Buffer.from(data.imageServices)
  let serviceImg = JSON.parse(servicesToString)
  let serviceData = JSON.parse(data.infoAboutService)
  return (
    <>
      <tr>
        <th className="dashboard-img-service" scope="row">
          <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
            <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
              <img
                height={91}
                width={122}
                className="w-100"
                src={serviceImg !== null && serviceImg !== "" && serviceImg !== undefined ?'https://www.services.irodum.com/'+ serviceImg[0].originalname : about2}
                alt="thumb"
              />
            </div>
            <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
              <h6 className="list-title mb-0">
                <Link to={`/servicio/${idservice}`}>{serviceData.titlebasic}</Link>
              </h6>
              {
                (data.extraServices) !== "null" ? <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                {JSON.parse(data.extraServices).map((item, i) => (
                  <li key={i}>{item.title}</li>
                ))}
              </ul> : <></>
              }
            </div>
          </div>
        </th>
        <td className="align-top">
          <span className="fz15 fw400">{serviceData.category}</span>
        </td>
        <td className="align-top">
          <span className="fz15 fw400">{serviceData.delivertime}</span>
        </td>
        <td className="align-top">
          <span className="fz14 fw400">${serviceData.pricebasic}/Fijo</span>
        </td>
        <td className="align-top">
          <div className="d-flex">
            <a
              className="icon me-2"
              id="edit"
              data-bs-toggle="modal"
              data-bs-target="#proposalModal"
            >
              <Tooltip anchorSelect="#edit" className="ui-tooltip" place="top">
                Editar
              </Tooltip>
              <span className="flaticon-pencil" />
            </a>
            <a
              className="icon"
              id="delete"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              <Tooltip
                anchorSelect="#delete"
                place="top"
                className="ui-tooltip"
              >
                Eliminar
              </Tooltip>
              <span className="flaticon-delete" />
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}
