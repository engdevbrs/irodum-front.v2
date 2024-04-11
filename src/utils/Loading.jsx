import React from "react";

const Loading = () => {
  return(
  <div className="container-fluid d-flex justify-content-center align-items-center" style={{ marginTop: '50px',height: '70vh' }}>
              <div className="row">
              <div className="loader col-lg-4 col-md-12">
                  <div className="wrapper">
                      <div className="circle"></div>
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <div className="line-3"></div>
                      <div className="line-4"></div>
                  </div>
              </div>
              <div className="loader col-lg-4 col-md-12">
                  <div className="wrapper">
                      <div className="circle"></div>
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <div className="line-3"></div>
                      <div className="line-4"></div>
                  </div>
              </div>
              <div className="loader col-lg-4 col-md-12">
                  <div className="wrapper">
                      <div className="circle"></div>
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <div className="line-3"></div>
                      <div className="line-4"></div>
                  </div>
              </div>
              </div>
   </div>
   )
};

export default Loading;
