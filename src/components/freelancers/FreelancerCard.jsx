import { Link } from "react-router-dom";
import freelancerimg from "../../images/team/client-3.png"

export default function FreelancerCard({ data }) {
  let skillsdata = null
  if(data.skills !== null){
    skillsdata = JSON.parse(data.skills)
  }
  
  return (
    <>
      <div className="freelancer-style1 bdr1 hover-box-shadow row ms-0">
        <div className="col-lg-8 ps-0">
          <div className="d-lg-flex bdrr1 bdrn-lg">
            <div className="thumb w90 position-relative rounded-circle mb15-md">
              <img
                height={75}
                width={75}
                className="rounded-circle mx-auto object-fit-cover"
                src={data.photoUser ? `https://www.services.irodum.com/api/images/${data.photoUser}` : freelancerimg}
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details ml15 ml0-md mb15-md">
              <h5 className="title mb-1">{data.nameUser}</h5>
              <p className="mb-0">{data.workAreaUser}</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">{data.rankingUser}</span> (
                  {data.reviews} reviews)
                </p>
              </div>
              {
                data.skills === null ? <></> :
                <div className="skill-tags mb-0">
                  {
                    skillsdata.map((value,i)=>{
                      return(
                        <span className="tag mb10 mr5" key={i}>{value}</span>
                      )
                    })
                  }
              </div>
              }
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 ps-0 ps-xl-3 pe-0">
          <div className="details">
            <div className="fl-meta d-flex align-items-center justify-content-between">
              <a className="meta fw500 text-start">
                Ubicación
                <br />
                <span className="fz14 fw400">{ (data.cityUser !== null && data.communeUser !== null) ? data.cityUser+", "+data.communeUser : "Indeterminada" }</span>
              </a>
              <a className="meta fw500 text-start">
                Tarifa
                <br />
                {
                  data.priceWork === null || data.priceWork === undefined || data.priceWork === "" ? <span className="fz14 fw400">Sin determinar</span> :
                  <span className="fz14 fw400">${`${data.priceWork} / hr`}</span>
                }
                
              </a>
            </div>
            <div className="d-grid mt15">
              <Link
                to={`/freelancer-perfil/${data.idUser}`}
                className="ud-btn btn-light-thm"
              >
                Ver Perfil
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
