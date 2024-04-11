import { Link } from "react-router-dom";
import comments2 from "../../../images/blog/comments-2.png"
import React from "react";

export default function ServiceDetailReviewInfo(props) {

  const { data } = props
  let arrayreviews = []
  let fivestar = []
  let fourstar = []
  let threestar = []
  let twostar = []
  let onestar = []


  for(let i=1; i < data.length; i++ ){
    arrayreviews.push(data[i])
    data[i].rating === 5 ? fivestar.push(5) : data[i].rating === 4 ? fourstar.push(4) : data[i].rating === 3 ? threestar.push(3) : data[i].rating === 2 ? twostar.push(2) : data[i].rating === 1 ? onestar.push(1) : onestar.push(null)
  }

  return (
    <>
      <div className="mbp_pagination_comments">
          <div className="row">
            <div className="col-lg-12">
              <div className="total_review mb30 mt45">
                <h4>{data.length - 1} Reseñas</h4>
              </div>
              <div className="d-md-flex align-items-center mb30">
                <div className="total-review-box d-flex align-items-center text-center mb30-sm">
                  <div className="wrapper mx-auto">
                    <div className="t-review mb15">{data[0]}</div>
                    <h5>{data[0] >= 4 ? "Excepcional" : data[0] < 4 && data[0] >= 3 ? "Bueno" : data[0] < 3 && data[0] >= 2 ? "Necesita mejorar" : "Malo"}</h5>
                    <p className="text mb-0">{data.length - 1} comentarios</p>
                  </div>
                </div>
                <div className="wrapper ml60 ml0-sm">
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">5 {`(${fivestar.length}) opiniones`}</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: "100%",
                        }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">4 {`(${fourstar.length}) opiniones`}</div>
                    <div className="progress">
                      <div
                        className="progress-bar w-75"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">3 {`(${threestar.length}) opiniones`}</div>
                    <div className="progress">
                      <div
                        className="progress-bar w-50"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">2 {`(${twostar.length}) opiniones`}</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: "30%",
                        }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="review-list d-flex align-items-center mb10">
                    <div className="list-number">1 {`(${onestar.length}) opiniones`}</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow={10}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              arrayreviews.map((value,i)=>{
                return(
                  <>
                    <div className="col-md-12 mb30">
                      <div className="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
                        <img
                          height={60}
                          width={60}
                          src={comments2}
                          className="mr-3"
                          alt="comments-2.png"
                        />
                        <div className="ml20">
                          <h6 className="mt-0 mb-0">{value.nameuser}</h6>
                          <div>
                            <span className="fz14">{value.dateRated}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text mt20">
                        {value.comments}
                      </p>
                      {
                        value.responseOfUser === null ? <></> : <p><strong>Respuesta:</strong> {value.responseOfUser}</p>
                      }
                      <div className="review_cansel_btns d-flex">
                        <a>
                          <i className="fas fa-thumbs-up" />
                          Útil
                        </a>
                        <a>
                          <i className="fas fa-thumbs-down" />
                          No útil
                        </a>
                      </div>
                    </div>
                  </>
                )
              })
            }
            <div className="col-md-12">
              <div className="position-relative bdrb1 pb50">
                <Link to="/service-single" className="ud-btn btn-light-thm">
                  Ver Más
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
