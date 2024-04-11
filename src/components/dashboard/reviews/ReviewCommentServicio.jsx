import React, { useEffect, useState } from "react";
import Axios from "axios"
import comments from "../../../images/blog/comments-2.png"
import { Tooltip } from "react-tooltip";

export default function ReviewCommentServicio({reviews}) {

  const token = sessionStorage.getItem("accessToken")

  const addAnswer = (event) =>{
    let getAnswer = {
      response: null,
      id: null,
    }
    const response = document.getElementById(`textarea-${event.target.id}`).value
    getAnswer = {
      response,
      id: parseInt(event.target.id,10)
    }

    Axios.post("https://www.services.irodum.com/api/answer/reviews", {
      'authorization' : `${token}`,
      'data': getAnswer
    })
      .then((result) => {
          if(result.status === 200){

          }
      }).catch(error => {

      });
  }

  const editAnswer = (event) =>{
    let getAnswer = {
      response: null,
      id: null,
    }
    const response = document.getElementById((`textarea-${event.target.id}`)).value
    getAnswer = {
      response,
      id: parseInt(event.target.id,10)
    }

    // Axios.post("https://www.services.irodum.com/api/answer/reviews", {
    //   'authorization' : `${token}`,
    //   'data': getAnswer
    // })
    //   .then((result) => {
    //       if(result.status === 200){

    //       }
    //   }).catch(error => {

    //   });
  }

  const manageInputs = (event) =>{
    const id = event.currentTarget.id
    document.getElementById(`textarea-${id}`).disabled = false
    document.getElementById(`edit-${id}`).style.display = "inline-block"
  }

  return (
    <>
      <div className={`pb20 bdrb1`}>
        {
        reviews.length >= 1 ?  
        <>
        {
          reviews.map((value,j) =>{
            return(
              <>
              <div className="mbp_first position-relative d-sm-flex align-items-center justify-content-start mb30-sm mt30" key={j}>
              <img
                height={60}
                width={60}
                src={comments}
                className="mr-3"
                alt="comments-2.png"
              />
                <div className="ml20 ml0-xs mt20-xs">
                  <div className="del-edit">
                    {
                      value.responseOfUser === null ? <></> : 
                      <a className="icon me-2" id={value.idRating} onClick={(e)=> manageInputs(e)}>
                        <Tooltip className="ui-tooltip">
                          Editar
                        </Tooltip>
                        <span className="flaticon-pencil" />
                      </a>
                    }
                  </div>
                  <h6 className="mt-0 mb-1">{value.nameuser}</h6>
                  <div className="d-flex align-items-center">
                    <div>
                      <i className="fas fa-star vam fz10 review-color me-2" />
                      <span className="fz15 fw500">{value.rating}</span>
                    </div>
                    <div className="ms-3">
                      <span className="fz14 text">Publicado el {value.dateRated}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text mt10">
                {value.comments}
              </p>
              <div className="mb10">
              <textarea
                    id={`textarea-${value.idRating}`}
                    rows={6}
                    type="textarea"
                    placeholder="Ej: Muchas gracias por su evaluación..."
                    disabled={value.responseOfUser !== null}
                    defaultValue={value.responseOfUser !== null ? value.responseOfUser : ""}
                />
              </div>
              <a id={`edit-${value.idRating}`} className="ud-btn btn-light-thm" onClick={(e)=> editAnswer(e)} style={{ display: 'none' }}>
                Responder
              </a>
              {
                value.responseOfUser === null ? <a id={value.idRating} className="ud-btn btn-light-thm" onClick={(e)=> addAnswer(e)}>
                Responder
                </a> : <></>
              }
              </>
            )
          })
        }
        </> : <></>
        }
      </div>
    </>
  );
}
