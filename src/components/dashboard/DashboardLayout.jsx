import { useContext } from "react";
import { DashboardContext } from "./DashboardMain"
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import DashboardFooter from "./DashboardFooter";

export default function DashboardLayout({children}) {

  const data = useContext(DashboardContext)

  return (
    <>
        <DashboardHeader />
        <div className="dashboard_content_wrapper">
          <div
            className={`dashboard dashboard_wrapper pr30 pr0-xl`}
          >
            <DashboardSidebar />
              <div className="dashboard__main pl0-md">
                  {children}
              <DashboardFooter />
            </div>
          </div>
        </div>
    </>
  );
}
