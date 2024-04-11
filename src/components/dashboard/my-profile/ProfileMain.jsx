import DashboardLayout from "../DashboardLayout";
import MyProfileInfo from "./MyProfileInfo";

export const metadata = {
  title: "Irodum - Freelance Marketplace React/Next Js Template | My Profile",
};

export default function ProfileMain() {
  return (
    <>
      <DashboardLayout>
        <MyProfileInfo />
      </DashboardLayout>
    </>
  );
}
