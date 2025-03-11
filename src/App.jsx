import React from "react";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Problematica from "./components/problematica/Problematica";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Problematica />
      <section id="about" style={{ height: "100vh", padding: "20px" }}>
        <h1>Acerca de</h1>
        <p>Esta es la sección acerca de nosotros.</p>
      </section>
      <section id="services" style={{ height: "100vh", padding: "20px" }}>
        <h1>Servicios</h1>
        <p>Esta es la sección de servicios.</p>
      </section>
      <section id="contact" style={{ height: "100vh", padding: "20px" }}>
        <h1>Contacto</h1>
        <p>Esta es la sección de contacto.</p>
      </section>
    </div>
  );
};

export default App;
