import listingStore from "../components/store/listingStore";
import { bestSeller } from "../data/listing";


export default function SortOption() {
  const getBestSeller = listingStore((state) => state.getBestSeller);
  const setBestSeller = listingStore((state) => state.setBestSeller);

  // handle
  const bestSellerHandler = (data) => {
    setBestSeller(data);
  };

  const getBestSellerSelected = bestSeller.find((item) =>
    item.value === getBestSeller ? item : false,
  );

  return (
    <>
      <div className="pcs_dropdown dark-color pr10 pr0-xs text-center">
        <span>Ordenar por</span>
        <div className="dropdown bootstrap-select show-tick">
          <button
            type="button"
            className="btn dropdown-toggle btn-light"
            data-bs-toggle="dropdown"
          >
            <div className="filter-option">
              <div className="filter-option-inner">
                <div className="filter-option-inner-inner">
                  {getBestSellerSelected.title}
                </div>
              </div>
            </div>
          </button>
          <div className="dropdown-menu">
            <div className="inner show">
              <ul className="dropdown-menu inner show">
                {bestSeller.map((item,i) => (
                  <li key={ i }>
                    <a
                      onClick={() => bestSellerHandler(item.value)}
                      className={`dropdown-item ${
                        item.value === getBestSeller ? "active selected" : ""
                      }`}
                    >
                      <span className="bs-ok-default check-mark" />
                      <span className="text">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
