import { useState } from "react";
import dataespecialidades from "../data/job";
import { useLocation } from "react-router-dom";


export default function TabSection() {

  const { categoriesServices } = dataespecialidades
  const [getCurrentTab, setCurrentTab] = useState("Todas");

  const path = useLocation();
  const pathname = path.pathname

  return (
    <>
      <section
        className={`categories_list_section overflow-hidden`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="listings_category_nav_list_menu">
                <ul className="mb0 d-flex ps-0">
                  {categoriesServices.map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() => setCurrentTab(item.option)}
                        className={getCurrentTab === item.option ? "active" : ""}
                      >
                        {item.option}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
