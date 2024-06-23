import { useContext, useState } from "react";
import { DashboardContext } from "./DashboardMain"
import { Link, useLocation } from "react-router-dom";
import { DashboardNavigationFreelancer, DashboardNavigationHiring } from "../../data/dashboardNavigation"

export default function DashboardNavigation() {

  const [isActive, setActive] = useState(false);

  const path = useLocation();
  const pathname = path.pathname
  const dataUser = useContext(DashboardContext);
  const userType = "independiente"

  return (
    <>
      <div className="dashboard_navigationbar d-block d-lg-none">
        <div className="dropdown">
          <button onClick={() => setActive(!isActive)} className="dropbtn">
            <i className="fa fa-bars pr10" /> Panel de Administración
          </button>
          <ul className={`dropdown-content ${isActive ? "show" : ""}`}>
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">Panel de Administración</p>
            </li>
            {(userType === "independiente" ? DashboardNavigationFreelancer : DashboardNavigationHiring).slice(0, 6).map((item,i) => (
              <li className={pathname === item.path ? 'mobile-dasboard-menu-active' : ''} onClick={() => setActive(false)} key={i}>
                <Link to={item.path}>
                  <i className={`${item.icon} mr10`} />
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">
              Organizar y gestionar
              </p>
            </li>
            {(userType === "independiente" ? DashboardNavigationFreelancer : DashboardNavigationHiring).slice(6, 8).map((item,i) => (
              <li className={pathname === item.path ? 'mobile-dasboard-menu-active' : ''}  onClick={() => setActive(false)} key={i}>
                <Link to={item.path}>
                  <i className={`${item.icon} mr10`} />
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <p className="fz15 fw400 ff-heading mt30 pl30">Account</p>
            </li>
            {(userType === "independiente" ? DashboardNavigationFreelancer : DashboardNavigationHiring).slice(8, 10).map((item,i) => (
              <li className={pathname === item.path ? 'mobile-dasboard-menu-active' : ''}  onClick={() => setActive(false)} key={i}>
                <Link to={item.path}>
                  <i className={`${item.icon} mr10`} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
