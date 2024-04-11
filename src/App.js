import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layouts/header/Header";
import Home from "./layouts/home/Home"
import "./css/globals.css"
import Login from "./components/Login";
import MainRegister from "./components/register/MainRegister";
import RegisterIndependent from "./components/register/RegisterIndependent";
import RegisterHiring from "./components/register/RegisterHiring";
import DashboardMain from "./components/dashboard/DashboardMain";
import ProfileMain from "./components/dashboard/my-profile/ProfileMain";
import ManageServices from "./components/dashboard/manage-services/ManageServices";
import AddServiceInfo from "./components/dashboard/manage-services/AddServiceInfo";
import Contacto from "./components/contact/Contacto";
import ServicesMain from "./components/services/ServicesMain";
import ServiceSingle from "./components/services/single/ServiceSingle";
import ProjectsMain from "./components/projects/ProjectsMain";
import FreelancerMain from "./components/freelancers/FreelancerMain";
import FreelancerProfile from "./components/freelancers/FreelancerProfile";
import ReviewsMain from "./components/dashboard/reviews/ReviewsMain";
import ManageJobsMain from "./components/dashboard/manage-jobs/ManageJobsMain";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='' element= {<Header />}>
                  <Route index element= { <Home /> } />
                  <Route path="login" element= { <Login /> } />
                  <Route path="registrarse" element= { <MainRegister /> } />
                  <Route path="registro/freelancer" element= { <RegisterIndependent /> } />
                  <Route path="registro/hiring" element= { <RegisterHiring /> } />
                  <Route path="dashboard" element= { <DashboardMain /> } />
                  <Route path="mi-perfil" element= { <ProfileMain /> } />
                  <Route path="administrar-servicios" element= { <ManageServices /> } />
                  <Route path="nuevo-servicio" element= { <AddServiceInfo /> } />
                  <Route path="contacto" element= { <Contacto /> } />
                  <Route path="servicios" element= { <ServicesMain /> } />
                  <Route path="servicio/:id" element= { <ServiceSingle /> } />
                  <Route path="proyectos" element= { <ProjectsMain /> } />
                  <Route path="freelancers" element= { <FreelancerMain /> } />
                  <Route path="freelancer-perfil/:id" element= { <FreelancerProfile /> } />
                  <Route path="comentarios" element= { <ReviewsMain /> } />
                  <Route path="propuestas-trabajos" element= { <ManageJobsMain /> } />
              </Route>
          </Routes>
      </BrowserRouter>
  )
};

export default App;
