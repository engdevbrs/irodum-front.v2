import React from "react";
import { Tooltip } from "react-tooltip";

export default function ManageJobCard({ data }) {
  return (
    <>
      <tr>
        <td className="vam">
          <span className="fz15 fw400">{data.customerName+" "+data.lastNameCustomer}</span>
        </td>
        <td className="vam">
          <span>{data.rutCustomer}</span>
        </td>
        <td className="vam">
          <span className="fz14 fw400">{data.cellphoneCustomer}</span>
        </td>
        <td className="vam">
          <span className="fz14 fw400">{data.emailCustomer}</span>
        </td>
        <td className="vam">
          <span className="pending-style style6">{(data.statusRequest).toUpperCase()}</span>
        </td>
        <td className="vam">
          <span className="fz14 fw400">{data.dateRequest}</span>
        </td>
        <td className="vam">
          <span className="fz14 fw400">{data.descriptTrabajo}</span>
        </td>
        <td>
          <div className="d-flex">
            <a
              className="icon me-2"
              id="edit"
              data-bs-toggle="modal"
              data-bs-target="#proposalModal"
            >
              <Tooltip anchorSelect="#edit" className="ui-tooltip">
                Aceptar
              </Tooltip>
              <span className="flaticon-tick" />
            </a>
            <a
              className="icon"
              id="delete"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              <Tooltip anchorSelect="#delete" className="ui-tooltip">
                Rechazar
              </Tooltip>
              <span className="flaticon-delete" />
            </a>
          </div>
        </td>
      </tr>
    </>
  );
}
