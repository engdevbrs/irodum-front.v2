import { useNavigate } from "react-router-dom";

export default function SearchModal() {

  const navigate = useNavigate()

  return (
    <>
      <div className="search-modal">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel" />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-xmark" />
                </button>
              </div>
              <div className="modal-body">
                <div className="popup-search-field search_area">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Cuál servicio estás buscando hoy?"
                  />
                  <label>
                    <span className="far fa-magnifying-glass" />
                  </label>
                  <button
                    onClick={() => navigate("/service-1")}
                    className="ud-btn btn-thm"
                    type="submit"
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
