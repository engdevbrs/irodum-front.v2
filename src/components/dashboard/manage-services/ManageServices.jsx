import DashboardLayout from "../DashboardLayout";
import ManageServiceInfo from "./ManageServiceInfo";

export const metadata = {
  title:
    "Irodum - Freelance Marketplace React/Next Js Template | Manage Services",
};


export default function ManageServices() {

  
  return (
    <>
      <DashboardLayout>
        <ManageServiceInfo />
      </DashboardLayout>
    </>
  );
}
