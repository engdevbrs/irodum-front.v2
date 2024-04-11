import { useState } from "react";
import g1 from "../../../images/gallery/g-1.jpg"
import g2 from "../../../images/gallery/g-2.jpg"
import g3 from "../../../images/gallery/g-3.jpg"
import g4 from "../../../images/gallery/g-4.jpg"


export default function ServiceGallery(props) {

  const token = sessionStorage.getItem('accessToken');
  const [uploadedFiles, setUploadedFiles] = useState([]);

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

    props.addImages(uniqueNewFiles)

  };

  // delete handler
  const handleFileDelete = (fileName) => {
    const deletedImages = uploadedFiles.filter((file) => file.name !== fileName)
    setUploadedFiles(deletedImages);
    props.addImages(deletedImages)
  };

  return (
    <>
      <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
        <div className="bdrb1 pb15 mb30">
          <h5 className="list-title">Galería</h5>
        </div>
        <div className="col-xl-9">
          <div className="d-flex mb30 flex-wrap gap-3">
            {uploadedFiles.map((item, i) => (
              <div
                key={i}
                className="gallery-item bdrs4 overflow-hidden position-relative"
              >
                <img
                  height={119}
                  width={136}
                  className="object-fit-cover"
                  src={URL.createObjectURL(item)}
                  style={{ height: "166px", width: " 190px" }}
                  alt="gallery"
                />
                <div className="del-edit">
                  <div className="d-flex justify-content-center">
                    <a
                      className="icon"
                      onClick={() => handleFileDelete(item.name)}
                    >
                      <span className="flaticon-delete" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="gallery-item bdrs4 overflow-hidden">
              <label>
                <a>
                  <img
                    height={119}
                    width={136}
                    className="w-100 h-auto"
                    src={g1}
                    alt="gallery"
                  />
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="d-none"
                    onChange={(e)=>handleFileUpload(e)}
                    multiple
                  />
                </a>
              </label>
            </div>
          </div>
          <p className="text">
          El archivo debe pesar menos de 1 Mb o 1.000 Kb y debe ser: .JPG, .JPEG o .PNG
          </p>
          <a className="ud-btn btn-thm mt-2">
            Agregar Imágenes
            <i className="fal fa-arrow-right-long" />
          </a>
        </div>
      </div>
    </>
  );
}
