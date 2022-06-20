import React from "react";
import Navbar from "./HomePageInnerComponents/Navbar";
import Banner from "./HomePageInnerComponents/Banner";
import Services from "./HomePageInnerComponents/Services";
import ChoseUs from "./HomePageInnerComponents/ChoseUs";
import Testimonials from "./HomePageInnerComponents/Testimonials";
import Contactus from "./HomePageInnerComponents/Contactus";
import Footer from "../../Common/Footer/Footer";

export default function HomePage() {
  const UserCheck = localStorage.getItem("data");
  return (
    <>
      <Navbar />
      <Banner />
      {UserCheck && <Services />}
      <ChoseUs />
      <Testimonials />
      <Contactus />
      <Footer />
    </>
  );
}
