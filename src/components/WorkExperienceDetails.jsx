import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export default function WorkExperienceDetails(props) {

  const { dataworkexperience } = props
  const path = useLocation()
  const pathname = path.pathname

  return (
    <>
      <div className="educational-quality ps-0">
      <hr className="mb60" />
      <h4 className="mb30">Experiencia Laboral</h4>
      {
        dataworkexperience.map((item, i) =>{
          return(
            <>
              <div className="position-relative  mt30" key={i}>
                  <div className="educational-quality">
                    <div className="m-circle text-thm">M</div>
                      <div className="wrapper mb40 position-relative">
                        {
                          pathname === "/mi-perfil" ? 
                          <div className="del-edit">
                            <div className="d-flex">
                              <a className="icon me-2" id="edit">
                                <Tooltip anchorSelect="#edit" className="ui-tooltip">
                                  Editar
                                </Tooltip>
                                <span className="flaticon-pencil" />
                              </a>
                              <a className="icon" id="delete">
                                <Tooltip anchorSelect="#delete" className="ui-tooltip">
                                  Eliminar
                                </Tooltip>
                                <span className="flaticon-delete" />
                              </a>
                            </div>
                          </div> : <></>
                        }
                        <span className="tag">{`${item.dateStart} a ${item.dateFinish}`}</span>
                        <h5 className="mt15">{item.roleWork}</h5>
                        <h6 className="text-thm">{item.companyWork}</h6>
                        <p>{item.roledetailsWork}</p>
                      </div>
                  </div>
              </div>
            </>
          )
        })
      }
      </div>
    </>
  );
}
