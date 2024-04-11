import { useEffect, useState } from "react";
import priceStore from "../store/priceStore"
import toggleStore from "../store/toggleStore"
import listingStore from "../store/listingStore"
import { deliveryTime } from "../../data/listing"
import ClearButton from "../../utils/ClearButton"
import SortOption from "../../utils/SortOption"
import filterimg from "../../images/icon/all-filter-icon.svg"
import ReactSlider from "react-slider";
import PriceDropdown from "../dropdown/PriceDropdown";
import LevelDropdown from "../dropdown/LevelDropdown";
import LocationDropdown from "../dropdown/LocationDropdown";

export default function ListingOption() {

  const [getDelivery, SetDelivery] = useState("");

  const [getPrice, setPrice] = useState({
    min: 0,
    max: 100000,
  });
  const [getLevel, setLevel] = useState([]);
  const [getLocation, setLocation] = useState([]);

  const priceRange = priceStore((state) => state.priceRange);
  const setPriceRange = priceStore((state) => state.priceRangeHandler);
  const listingToggle = toggleStore((state) => state.listingToggleHandler);
  const setOurDeliveryTime = listingStore((state) => state.setDeliveryTime);
  const getDeliveryTime = listingStore((state) => state.getDeliveryTime);
  const setOurLevel = listingStore((state) => state.setLevel);
  const getOurLevel = listingStore((state) => state.getLevel);
  const getOurLocation = listingStore((state) => state.getLocation);
  const setOurLocation = listingStore((state) => state.setLocation);

  // filters handler
  const deliveryHandler = (data) => {
    SetDelivery(data);
  };

  useEffect(() => {
    SetDelivery(getDeliveryTime);
  }, [getDeliveryTime]);

  const priceHandler = (data) => {
    setPrice({
      min: data[0],
      max: data[1],
    });
  };

  useEffect(() => {
    setPrice(priceRange);
  }, [priceRange]);

  const levelHandler = (data) => {
    const isExist = getLevel.includes(data);
    if (!isExist) {
      return setLevel((item) => [...item, data]);
    }
    const deleted = getLevel.filter((item) => item !== data);
    setLevel(deleted);
  };

  useEffect(() => {
    setLevel(getOurLevel);
  }, [getOurLevel]);

  const locationHandler = (data) => {
    const isExist = getLocation.includes(data);
    if (!isExist) {
      return setLocation((item) => [...item, data]);
    }
    const deleted = getLocation.filter((item) => item !== data);
    setLocation(deleted);
  };

  useEffect(() => {
    setLocation(getOurLocation);
  }, [getOurLocation]);

  return (
    <>
      <div className="row align-items-center mb20">
        <div className="col-6 col-sm-6 col-lg-9 pe-0">
          <div className="text-center text-sm-start">
            <div className="dropdown-lists">
              <ul className="p-0 mb-0 text-center text-sm-start">
                <li className="list-inline-item">
                  <button
                    onClick={listingToggle}
                    type="button"
                    className="open-btn filter-btn-left mb10"
                  >
                    <img
                      height={18}
                      width={18}
                      className="me-2"
                      src={filterimg}
                      alt="icon"
                    />
                    Filtrar
                  </button>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Tiempo de entrega
                    <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu">
                    <div className="widget-wrapper pb25 mb0">
                      <div className="radio-element">
                        {deliveryTime.map((item,i) => (
                          <div
                            key={ i }
                            className="form-check d-flex align-items-center mb10"
                          >
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id={`flexRadioDefault1${item.id}`}
                              checked={getDelivery === item.value}
                              onChange={() => deliveryHandler(item.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`flexRadioDefault1${item.id}`}
                            >
                              {item.title}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setOurDeliveryTime(getDelivery)}
                      className="done-btn ud-btn btn-thm drop_btn"
                    >
                      Aplicar
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Presupuesto
                    <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu dd3">
                    <PriceDropdown />
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <button
                    className="open-btn mb10 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Ciudad
                    <i className="fa fa-angle-down ms-2" />
                  </button>
                  <div className="dropdown-menu dd4 pb20">
                    <LocationDropdown />
                  </div>
                </li>
                <li className="list-inline-item position-relative d-none d-xl-inline-block">
                  <ClearButton />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-6 col-lg-3 px-0">
          <div className="page_control_shorting mb10 d-flex align-items-center justify-content-center justify-content-sm-end">
            <SortOption />
          </div>
        </div>
      </div>
    </>
  );
}
