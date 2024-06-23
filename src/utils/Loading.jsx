import React from "react";

const Loading = () => {
  return(
  <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
              <div className="row justify-content-center p30">
              <div className="loader col-4">
                  <div className="wrapper">
                      <div className="circle"></div>
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <div className="line-3"></div>
                      <div className="line-4"></div>
                  </div>
              </div>
              <div className="loader col-4">
                  <div className="wrapper">
                      <div className="circle"></div>
                      <div className="line-1"></div>
                      <div className="line-2"></div>
                      <div className="line-3"></div>
                      <div className="line-4"></div>
                  </div>
              </div>
              <div className="loader col-4">
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
