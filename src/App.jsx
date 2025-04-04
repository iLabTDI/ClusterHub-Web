import React from "react";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Problematica from "./components/problematica/Problematica";
import FeaturesSection from "./components/features/Features";
import Caso from "./components/caso/Caso";
import Negocio from "./components/negocio/Negocio";
import Informacion from "./components/informacion/Informacion";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Problematica />
      <FeaturesSection />
      <Caso />
      <Negocio />
      <Informacion />
      <Footer />
    </div>
  );
};

export default App;
