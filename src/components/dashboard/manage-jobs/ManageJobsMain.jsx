import React from "react";
import MobileNavigation from "../../../layouts/header/MobileNavigation";
import DashboardLayout from "../DashboardLayout";
import ManageJobInfo from "./ManageJobInfo";
export const metadata = {
  title: "Irodum - Freelance Marketplace React/Next Js Template | Manage Job",
};

export default function ManageJobsMain() {
  return (
    <>
      <DashboardLayout>
        <ManageJobInfo />
      </DashboardLayout>
    </>
  );
}
