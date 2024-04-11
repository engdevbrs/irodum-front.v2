import priceStore from "./store/priceStore";
import PriceRange from "./PriceRange"

export default function BudgetOption() {
  const getPriceRange = priceStore((state) => state.priceRange);
  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        <div className="range-slider-style2">
          <div className="range-wrapper">
            <PriceRange />
            <div className="d-flex align-items-center justify-content-center pt-3">
              <span id="slider-range-value1">${getPriceRange.min}</span>
              <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
              <span id="slider-range-value2">${getPriceRange.max}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
