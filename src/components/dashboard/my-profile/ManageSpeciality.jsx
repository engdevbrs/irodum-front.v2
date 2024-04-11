import { Tooltip } from "react-tooltip";
import { Buffer } from "buffer";

export default function ManageSpeciality( { data } ) {
  return (
    <>
        {data.map((value,i) =>{
                                let descriptSpec = value.especialityDescript
                                let specialityToString = Buffer.from(value.especialityDoc)
                                let speciality = JSON.parse(specialityToString)

                                    return(
                                      <tr>
                                      <td className="vam">
                                        <span className="fz15 fw400">{descriptSpec}</span>
                                      </td>
                                      <td className="navpill-style1"><button className="nav-link fw500 dark-color active"><a href={"https://www.services.irodum.com/" + speciality.originalname} 
                                          target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} >{speciality.originalname}</a></button>
                                      </td>
                                      <td className="vam">
                                        <span className="pending-style style6">{value.fileType}</span>
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
                                            <Tooltip anchorSelect="#delete" className="ui-tooltip">
                                              Eliminar
                                            </Tooltip>
                                            <span className="flaticon-delete" />
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    )
        })} 
    </>
  );
}
