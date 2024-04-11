import React, { useEffect, useState } from "react";
import DashboardNavigation from "../DashboardNavigation";
import Pagination from "../../../utils/Pagination"
import { managejob } from "../../../data/dashboardNavigation";
import ManageJobCard from "./ManageJobCard";
import Axios from "axios";
import Loading from "../../../utils/Loading";
import ProposalModal from "../../../utils/modal/ProposalModal";
import DeleteModal from "../../../utils/modal/DeleteModal";
import { DeniedAccess } from "../../../utils/deniedAccess";

const tab = [
  "Propuestas Activas",
  "En Negociación",
  "En Curso",
  "Terminadas",
  "Rechazadas",
];


export default function ManageJobInfo() {

  const [ response, setResponse ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [selectedTab, setSelectedTab] = useState(0);
  const [ requestsWorksData, setRequestsWorkData ] = useState([])

  const getAccess = (token) =>{
    Axios.post("https://www.services.irodum.com/api/get/request-work", {
            'authorization' : `${token}`
        })
          .then((result) => {
              if(result.status === 200){
                    setResponse(result.status)
                    setRequestsWorkData(result.data)
                    setLoading(false);
              }else{
                setResponse(result.status)
                setRequestsWorkData([])
                setLoading(false);
              }
              
          }).catch(error => {
                setResponse(error.response.status)
                setRequestsWorkData([])
                setLoading(false);
          });
  }

  useEffect(() => {

    const token = sessionStorage.getItem('accessToken')
    if(token !== null && token !== undefined){
      getAccess(token);
    }else{
      setLoading(false);
    }
  }, []);

  return (
    <>
      {
        <>
            {loading === true ? 
            <>
              <Loading /></> : response === 200 ? 
                  <>
                  <div className="dashboard__content hover-bgc-color">
                    <div className="row pb40">
                      <div className="col-lg-12">
                        <DashboardNavigation />
                      </div>
                      <div className="col-lg-12">
                        <div className="dashboard_title_area">
                          <h2>Administrar trabajos</h2>
                          <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                          <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                            <div className="navtab-style1">
                              <nav>
                                <div className="nav nav-tabs mb30">
                                  {tab.map((item, i) => (
                                    <button
                                      key={i}
                                      className={`nav-link fw500 ps-0 ${
                                        selectedTab === i ? "active" : ""
                                      }`}
                                      onClick={() => setSelectedTab(i)}
                                    >
                                      {item}
                                    </button>
                                  ))}
                                </div>
                              </nav>
                              {selectedTab === 0 && (
                                <div className="packages_table table-responsive">
                                  <table className="table-style3 table at-savesearch">
                                    <thead className="t-head">
                                      <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Rut</th>
                                        <th scope="col">Celular</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Solicitado</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Acciones</th>
                                      </tr>
                                    </thead>
                                    <tbody className="t-body">
                                      {requestsWorksData.map((item,i) => (
                                        <ManageJobCard key={i} data={item} />
                                      ))}
                                    </tbody>
                                  </table>
                                  <div className="mt30">
                                    <Pagination />
                                  </div>
                                </div>
                              )}
                              {selectedTab === 1 && (
                                <div className="packages_table table-responsive">
                                  <table className="table-style3 table at-savesearch">
                                    <thead className="t-head">
                                      <tr>
                                      <th scope="col">Nombre</th>
                                        <th scope="col">Rut</th>
                                        <th scope="col">Celular</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Solicitado</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Acciones</th>
                                      </tr>
                                    </thead>
                                    <tbody className="t-body">
                                      {requestsWorksData.map((item,i) => (
                                        <ManageJobCard key={i} data={item} />
                                      ))}
                                    </tbody>
                                  </table>
                                  <div className="mt30">
                                    <Pagination />
                                  </div>
                                </div>
                              )}
                              {selectedTab === 2 && (
                                <div className="packages_table table-responsive">
                                  <table className="table-style3 table at-savesearch">
                                    <thead className="t-head">
                                      <tr>
                                      <th scope="col">Nombre</th>
                                        <th scope="col">Rut</th>
                                        <th scope="col">Celular</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Solicitado</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Acciones</th>
                                      </tr>
                                    </thead>
                                    <tbody className="t-body">
                                      {requestsWorksData.map((item,i) => (
                                        <ManageJobCard key={i} data={item} />
                                      ))}
                                    </tbody>
                                  </table>
                                  <div className="mt30">
                                    <Pagination />
                                  </div>
                                </div>
                              )}
                              {selectedTab === 3 && (
                                <div className="packages_table table-responsive">
                                  <table className="table-style3 table at-savesearch">
                                    <thead className="t-head">
                                      <tr>
                                      <th scope="col">Nombre</th>
                                        <th scope="col">Rut</th>
                                        <th scope="col">Celular</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Solicitado</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Acciones</th>
                                      </tr>
                                    </thead>
                                    <tbody className="t-body">
                                      {requestsWorksData.map((item,i) => (
                                        <ManageJobCard key={i} data={item} />
                                      ))}
                                    </tbody>
                                  </table>
                                  <div className="mt30">
                                    <Pagination />
                                  </div>
                                </div>
                              )}
                              {selectedTab === 4 && (
                                <div className="packages_table table-responsive">
                                  <table className="table-style3 table at-savesearch">
                                    <thead className="t-head">
                                      <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Rut</th>
                                        <th scope="col">Celular</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Solicitado</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Acciones</th>
                                      </tr>
                                    </thead>
                                    <tbody className="t-body">
                                      {requestsWorksData.map((item,i) => (
                                        <ManageJobCard key={i} data={item} />
                                      ))}
                                    </tbody>
                                  </table>
                                  <div className="mt30">
                                    <Pagination />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <ProposalModal />
                  <DeleteModal />
                </>
                  : <DeniedAccess response={response}/>
            }
        </>
        }
    </>
  );
}
