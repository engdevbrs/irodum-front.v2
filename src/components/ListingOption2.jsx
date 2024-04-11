import toggleStore from "./store/toggleStore"
import SortOption from "../utils/SortOption"
import filterimg from "../images/icon/all-filter-icon.svg"

export default function ListingOption2({ itemLength }) {
  const listingToggle = toggleStore((state) => state.listingToggleHandler);
  return (
    <>
      <div className="row align-items-center mb20">
        <div className="col-md-6">
          <div className="text-center text-md-start">
            <p className="text mb-0 mb10-sm">
              <span className="fw500">{itemLength}</span> freelancers disponibles
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="page_control_shorting d-md-flex align-items-center justify-content-center justify-content-md-end">
            <div className="dropdown-lists d-block d-lg-none me-2 mb10-sm">
              <ul className="p-0 mb-0 text-start text-md-start">
                <li>
                  <button
                    onClick={listingToggle}
                    type="button"
                    className="open-btn filter-btn-left"
                  >
                    <img
                      height={18}
                      width={18}
                      className="me-2"
                      src={filterimg}
                      alt="icon"
                    />
                    Filtros
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
