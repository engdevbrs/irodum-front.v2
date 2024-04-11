import { DashboardNavigationFreelancer, DashboardNavigationHiring } from "../../data/dashboardNavigation"
import { Link, useLocation } from "react-router-dom";

export default function DashboardSidebar() {
  
  const path = useLocation();
  const pathname = path.pathname

  const userType = "independiente"

  return (
    <>
      <div className="dashboard__sidebar d-none d-lg-block">
        <div className="dashboard_sidebar_list">
          <p className="fz15 fw400 ff-heading pl30">Inicio</p>
          {(userType === "independiente" ? DashboardNavigationFreelancer : DashboardNavigationHiring).slice(0, 6).map((item,i) => (
            <div key={ i } className="sidebar_list_item mb-1">
              <Link
                to={item.path}
                as={`${item.path}`}
                className={`items-center ${
                  pathname === item.path ? "-is-active" : ""
                }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}

          <p className="fz15 fw400 ff-heading pl30 mt30">Organizar y gestionar</p>

          {(userType === "independiente" ? DashboardNavigationFreelancer : DashboardNavigationHiring).slice(6, 8).map((item,i) => (
            <div key={ i } className="sidebar_list_item mb-1">
              <Link
                to={item.path}
                className={`items-center ${
                  pathname === item.path ? "-is-active" : ""
                }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </div>
          ))}

          <p className="fz15 fw400 ff-heading pl30 mt30">Cuenta</p>
          {(userType === "independiente" ? DashboardNavigationFreelancer : DashboardNavigationHiring).slice(8, 10).map((item,i) => (
            <li key={ i } className="sidebar_list_item mb-1">
              <Link
                to={item.path}
                className={`items-center ${
                  pathname === item.path ? "-is-active" : ""
                }`}
              >
                <i className={`${item.icon} mr15`} />
                {item.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
