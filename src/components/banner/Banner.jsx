import React from "react";
import "./Banner.css";
import Logo from "../../assets/images/NewLogo.png";

const handleSmoothScroll = (e, sectionId) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function Banner() {
  return (
    <section id="home">
      <div className="container-banner">
        <div className="TextBanner">
          <h1>
            Revolucionando la Seguridad y Sostenibilidad del Hogar Inteligente
          </h1>
          <p>
            ClusterHub transforma tu hogar en un ecosistema inteligente, seguro
            y sostenible con IA que toma decisiones autónomas para proteger lo
            que más valoras.
          </p>
          <div className="botones">
            <button className="btn-custom">Solicitar Demo</button>
            <button
              className="btn-outline"
              onClick={(e) => handleSmoothScroll(e, "about")}
            >
              Conocer Mas
            </button>
          </div>
        </div>
        <img className="imagen-principal" src={Logo} alt="Imagen" />
      </div>
    </section>
  );
}

export default Banner;
