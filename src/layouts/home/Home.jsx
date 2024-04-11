import React from "react";
import Hero from "../../components/Hero";
import BrowserCategory from "../../components/BrowserCategory";
import About from "../../components/About";
import NeedSomething from "../../components/NeedSomething";
import CtaBanner from "../../components/CtaBanner";
import OurCta from "../../components/OurCta";
import OurPartner from "../../components/OurPartner";

const Home = () => {

  return (
    <>
      <Hero />
      <BrowserCategory />
      <About />
      <NeedSomething />
      <CtaBanner />
      <OurPartner />
      <OurCta />
      {/* 
      <CounterInfo1 />
      <Testimonial1 />
      <OurPartner1 /> */}
      </>
  );
};

export default Home