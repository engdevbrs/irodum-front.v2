import Axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../utils/Pagination";
import ManageSpeciality from "../my-profile/ManageSpeciality";
import ProposalModal from "../../../utils/modal/ProposalModal";
import DeleteModal from "../../../utils/modal/DeleteModal";
import Loading from "../../../utils/Loading";
import { DeniedAccess } from "../../../utils/deniedAccess";

export default function UploadAttachment() {

  const token = sessionStorage.getItem('accessToken');
  const [ response, setResponse ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [especialitiesWorker, setEspecialitiesWorker] = useState([])
  const [hiddenInputs, setHiddenInputs] = useState(true);

  // upload handler
  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);

    const isFileDuplicate = (file, fileList) => {
      return fileList.some((existingFile) => existingFile.name === file.name);
    };

    const uniqueNewFiles = newFiles.filter(
      (file) => !isFileDuplicate(file, uploadedFiles),
    );

    setUploadedFiles((prevFiles) => [...prevFiles, ...uniqueNewFiles]);
  };

  // delete handler
  const handleFileDelete = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName),
    );
  };

  // content
  let content = uploadedFiles.map((item, i) => (
    <div key={i} className="specialities-atachments col-xl-6 col-lg-8 col-md-6 col-sm-12 mb20 position-relative">
      <div className="project-attach mt15">
        <h6 className="title">{item.name.split(".")[0].substring(0, 15)}</h6>
        <p className="text-uppercase">{item.name.split(".").pop()}</p>
        <span className="icon flaticon-page" />
      </div>
      <button
        className="position-absolute ui-delete-btn"
        onClick={() => handleFileDelete(item.name)}
      >
        x
      </button>
      <div className="form-style1">
          <label className="form-label fw500 fz16 dark-color">Descripción de la certificación</label>
          <textarea
          id="descripcion-extra"
          name="text"
          cols={30}
          rows={3}
          placeholder="Agregue una breve descripción de su detalle extra.."
        />
      </div>
    </div>
  ));


  const uploadSpeciality = (e) =>{

    e.preventDefault();
    const specialityFormFile = new FormData();

    specialityFormFile.append('specialityFormFile',document.getElementById('specialityFormFile').files[0]);
    specialityFormFile.append('params',document.getElementById("descripcion-extra").value)

    Axios({ method: 'post', url: 'https://www.services.irodum.com/api/upload/speciality',data: specialityFormFile,headers: { "authorization": token } })
    .then((result) => {
        if(result.status === 200){
            
        }
    }).catch(error => {
        
    });
}

  useEffect(() => {
    Axios.post("https://www.services.irodum.com/api/view/speciality",{
      'authorization' : `${token}`
      }).then((res)=>{
            if(res.status === 200 && res.data !== null && res.data !== undefined){
              setEspecialitiesWorker(res.data)
              setResponse(res.status)
              setLoading(false);
            }
          }).catch(error => {
            setResponse(error.response.status)
            setEspecialitiesWorker([])
            setLoading(false);
          });
  }, []);

  return (
    <>
    <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
        <div className="d-sm-flex justify-content-between">
          <h5 className="list-title">Subir Certificaciones</h5>
          <a className="add-more-btn text-thm " onClick={() => setHiddenInputs(!hiddenInputs)}>
            <i className="icon far fa-plus mr10" />
            Agregar Certificación
          </a>
        </div>
        <div className="bdrt1 mt15" hidden={hiddenInputs}>
          <div className="row mb30 mt30">
            <div className="row">
              {content}
            </div>
            <div className="col-6">
              <label>
                <a className="upload-img">
                  Agregar Archivo
                  <input
                    id="specialityFormFile"
                    type="file"
                    accept="application/pdf"
                    className="d-none"
                    onChange={handleFileUpload}
                  />
                </a>
              </label>
            </div>
            <p className="text">Tamaño máximo del archivo: 10 MB</p>
            <div className="text-start">
              <Link className="ud-btn btn-thm" onClick={(e)=> uploadSpeciality(e)}>
                Guardar Archivo
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
        {
          <>
            {
            loading === true ? <><Loading /></> : 
            response === 200 ? 
              <>
                {
                  especialitiesWorker.length > 0 ?
                  <>
                  <hr className="mb60" />
                      <div className="row">
                        <div className="col-xl-12 ">
                          <div className="ps-widget bgc-white overflow-hidden position-relative">
                            <div className="packages_table table-responsive">
                              <h4 >Estudios</h4>
                              <table className="table-style3 table at-savesearch">
                                <thead className="t-head">
                                  <tr>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Archivo</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Acción</th>
                                  </tr>
                                </thead>
                                <tbody className="t-body">
                                <ManageSpeciality data={especialitiesWorker} />   
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ProposalModal />
                      <DeleteModal />
                    </>
                    : <></>
                }
              </>
                  : <DeniedAccess response={response}/>
            }
          </>
        }
      </div>
    </>
  );
}
