import { useState } from "react";

const searchResult = [
  "Carpintero",
  "Instalaciones eléctricas",
  "Soldador",
  "Gasfiter",
  "Atencion al cliente",
  "Cuidador de adultos",
  "Eventos y decoración",
  "Pintor",
  "Empleada domestica",
  "Pedicurista"
];

export default function HeroSearch() {
  const [isSearchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [getSelectedResult, setSelectedResult] = useState("");

  // search dropdown
  const focusDropdown = () => {
    setSearchDropdownOpen(true);
  };
  const blurDropdown = () => {
    setSearchDropdownOpen(false);
  };

  const selectSearch = (select) => {
    setSelectedResult(select);
  };

  return (
    <>
      <form className="form-search position-relative">
        <div className="box-search">
          <span className="icon far fa-magnifying-glass" />
          <input
            className="form-control"
            type="text"
            placeholder="Qué estás buscando?"
            onFocus={focusDropdown}
            onBlur={blurDropdown}
            value={getSelectedResult}
            onChange={(e) => setSelectedResult(e.target.value)}
          />
          <div
            className="search-suggestions"
            style={
              isSearchDropdownOpen
                ? {
                    visibility: "visible",
                    opacity: "1",
                    top: "70px",
                  }
                : {
                    visibility: "hidden",
                    opacity: "0",
                    top: "100px",
                  }
            }
          >
            <h6 className="fz14 ml30 mt25 mb-3">Búsquedas populares</h6>
            <div className="box-suggestions">
              <ul className="px-0 m-0 pb-4">
                {searchResult.map((item, index) => (
                  <li
                    key={index}
                    className={
                      getSelectedResult === item ? "ui-list-active" : ""
                    }
                  >
                    <div
                      onClick={() => selectSearch(item)}
                      className="info-product"
                    >
                      <div className="item_title" style={{cursor: 'pointer'}}>{item}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
