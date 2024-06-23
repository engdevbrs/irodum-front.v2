import Axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'
import { checkEmail, checkName  } from '../../../utils/validations';

export default function ServiceDetailComment({data}) {

  const { idServices,emailUser  } = data

  const path = useLocation()
  const pathname = (path.pathname).split("/")
  const route = pathname[1]

  const [ratingComment, setRatingComment] = useState(0)
  const [getComment, setComment] = useState("")
  const [getName, setName] = useState(null)
  const [getEmail, setEmail] = useState(null)

  const handleRatingReview = (rate) => {
    setRatingComment(rate)
  }

  const addComent = (event) =>{

    event.preventDefault()

    const validations = getName === "" && getEmail === "";
    if(validations){

      const datacomment = {
        idservice: idServices,
        emailservice: emailUser,
        from: route,
        rating: ratingComment,
        nameuser: document.getElementById("name").value,
        comment: document.getElementById("comment").value,
        emailuser: document.getElementById("email").value
      }

      Axios.post("https://www.services.irodum.com/api/rating-service", datacomment).then((result)=>{
          console.log(result.status);
      }).catch((error)=>{
        console.log(error);
      })

    }
    
  }

  return (
    <>
      <div className="bsp_reveiw_wrt mb20 mt60 col-lg-8 col-md-10">
        <h6 className="fz17">Agrega una Reseña</h6>
        <p className="text">
          Su dirección de correo electrónico no será publicada. Los campos obligatorios están marcados <span style={{ color: 'red' }}>*</span>
        </p>
        <h6>Su calificación de éste servicio</h6>
        <div className="d-flex">
        <Rating
          onClick={handleRatingReview}
          ratingValue={ratingComment}
          size={24}
          label
          transition
          fillColor='#f2c72c'
          emptyColor='gray'
          className='cuidad'
          titleSeparator="de"
        />
        </div>
        <form className="comments_form mt30 mb30-md">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-4">
                <label className="fw500 fz16 ff-heading dark-color mb-2">
                  Comentario <span style={{ color: 'red' }}>*</span>
                </label>
                <textarea
                  id='comment'
                  className="pt15"
                  rows={6}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Por favor, ingrese su valoración de este servicio, sea lo más detallado y honesto posible."
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb20">
                <label className="fw500 ff-heading dark-color mb-2">Nombre <span style={{ color: 'red' }}>*</span></label>
                <input
                  id='name'
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(checkName(e.target.value))}
                  placeholder="Ej: Ali Tufan"
                />
                  {
                    getName === "" || getName === null ? <></> : <p style={{ color: 'red' }}>{getName}</p>
                  }
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb20">
                <label className="fw500 ff-heading dark-color mb-2">
                  Correo electrónico <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  id='email'
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(checkEmail(e.target.value))}
                  placeholder="Ej: email@gmail.com"
                />
                  {
                      getEmail === "" || getEmail === null ? <></> : <p style={{ color: 'red' }}>{getEmail}</p>
                  }
              </div>
            </div>
            <div className="col-md-12">
              <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                <label className="custom_checkbox fz15 ff-heading">
                  Guardar mi nombre, correo electrónico en este sitio web para la próxima
                  vez que comente.
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <button className="ud-btn btn-thm" onClick={(e)=> addComent(e)}>
                Enviar calificación
                <i className="fal fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
