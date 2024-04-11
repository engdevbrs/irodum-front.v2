import React,{ useEffect, useState } from "react";
import Loading from "../../../utils/Loading";
import { DeniedAccess } from "../../../utils/deniedAccess";
import Axios from 'axios'
import DashboardNavigation from "../DashboardNavigation";
import ReviewCommentServicio from "./ReviewCommentServicio";
import ReviewCommentFreelancer from "./ReviewCommentFreelancer";

const tab = ["Servicios", "Trabajos"];

export default function ReviewsInfo() {

  let token = sessionStorage.getItem('accessToken')

  const [getCurrentTab, setCurrentTab] = useState(0);
  const [ loading, setLoading ] = useState(true)
  const [ getCommentsUser, setCommentsUser ] = useState([])
  const [ response, setResponse ] = useState([])

  useEffect(() => {
    Axios.post("https://www.services.irodum.com/api/get-comments", {
      'authorization' : `${token}`
  })
    .then((result) => {
        if(result.status === 200){
              setResponse(result.status)
              setCommentsUser(result.data)
              setLoading(false);
        }
    }).catch(error => {
          setLoading(false);
          setResponse(error.response.status)
          setCommentsUser([])
    });

  },[]);

  return (
    <>
    {
            <>         
              {loading === true ? 
                <Loading /> : response === 200 ? 
                    <>
                      <div className="dashboard__content hover-bgc-color">
                        <div className="row pb40">
                          <div className="col-lg-12">
                            <DashboardNavigation />
                          </div>
                          <div className="col-lg-12">
                            <div className="dashboard_title_area">
                              <h2>Comentarios</h2>
                              <p className="text">Revisa que comentan tus clientes sobre tus trabajos.</p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                              <div className="packages_table table-responsive">
                                <div className="navtab-style1">
                                  <nav>
                                    <div className="nav nav-tabs mb30">
                                      {tab.map((item, i) => (
                                        <button
                                          onClick={() => setCurrentTab(i)}
                                          key={i}
                                          className={`nav-link fw500 ps-0 ${
                                            getCurrentTab === i ? "active" : ""
                                          }`}
                                        >
                                          {item}
                                        </button>
                                      ))}
                                    </div>
                                  </nav>
                                  {getCurrentTab === 0 && 
                                    <div className="col-md-12">
                                    <ReviewCommentServicio
                                      reviews={getCommentsUser.service}
                                    />
                                  </div>
                                  }
                                  {getCurrentTab === 1 && 
                                    <div className="col-md-12">
                                    <ReviewCommentFreelancer
                                      reviews={getCommentsUser.freelancer}
                                    />
                                  </div>
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </> : <DeniedAccess response={response}/>
              }
            </>
          }
    </>
  );
}
