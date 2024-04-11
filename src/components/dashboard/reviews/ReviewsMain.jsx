import { useEffect } from "react";
import DashboardLayout from "../DashboardLayout";
import ReviewsInfo from "./ReviewsInfo";

export const metadata = {
  title: "Irodum - Freelance Marketplace React/Next Js Template | Review",
};

export default function ReviewsMain() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <DashboardLayout>
        <ReviewsInfo />
      </DashboardLayout>
    </>
  );
}
