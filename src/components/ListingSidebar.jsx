import CategoryOption from "./CategoryOption"
import ProjectTypeOption from "./projects/ProjectTypeOption"
import BudgetOption2 from "./BudgetOption2"
import DesignToolOption from "./DesignToolOption"
import LocationOption from "./LocationOption"
import ClearButton from "../utils/ClearButton"

export default function ListingSidebar() {
  return (
    <>
      <div className="list-sidebar-style1 d-none d-lg-block">
        <div className="accordion" id="accordionExample">
          <div className="card mb20 pb10 mt-0">
            <div className="card-header" id="heading0">
              <h4>
                <button
                  className="btn btn-link ps-0 pt-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse0"
                  aria-expanded="false"
                  aria-controls="collapse0"
                >
                  Categorías
                </button>
              </h4>
            </div>
            <div
              id="collapse0"
              className="collapse show"
              aria-labelledby="heading0"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <CategoryOption />
                <a className="text-thm">+20 more</a>
              </div>
            </div>
          </div>
          <div className="card mb20 pb10">
            <div className="card-header" id="heading01">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse01"
                  aria-expanded="false"
                  aria-controls="collapse01"
                >
                  Tipo de proyecto
                </button>
              </h4>
            </div>
            <div
              id="collapse01"
              className="collapse show"
              aria-labelledby="heading01"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <ProjectTypeOption />
              </div>
            </div>
          </div>
          <div className="card mb20 pb0">
            <div className="card-header" id="heading1">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Precio
                </button>
              </h4>
            </div>
            <div
              id="collapse1"
              className="collapse show"
              aria-labelledby="heading1"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-4">
                <BudgetOption2 />
              </div>
            </div>
          </div>
          <div className="card mb20 pb5">
            <div className="card-header" id="heading2">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Ubicación
                </button>
              </h4>
            </div>
            <div
              id="collapse2"
              className="collapse show"
              aria-labelledby="heading2"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <LocationOption />
              </div>
            </div>
          </div>
        </div>
        <ClearButton />
      </div>
    </>
  );
}
