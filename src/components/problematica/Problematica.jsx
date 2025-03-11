import React from "react";
import "./Problematica.css"; // Archivo de estilos

const Problematica = () => {
  const problematicas = [
    {
      title: "Riesgos de seguridad complejos",
      description:
        "Los sistemas de seguridad tradicionales son reactivos y no previenen efectivamente amenazas como incendios, inundaciones o intrusiones.",
      backgroundImage:
        "url('https://via.placeholder.com/800x600/FF5733/FFFFFF')",
    },
    {
      title: "Ineficiencia energética",
      description:
        "El consumo excesivo de energía impacta al medio ambiente y genera costos innecesarios para las familias.",
      backgroundImage:
        "url('https://via.placeholder.com/800x600/C70039/FFFFFF')",
    },
    {
      title: "Falta de monitoreo ambiental",
      description:
        "La calidad del aire interior, temperatura y ventilación afectan directamente la salud y bienestar, pero rara vez se monitorean.",
      backgroundImage:
        "url('https://via.placeholder.com/800x600/900C3F/FFFFFF')",
    },
    {
      title: "Sistemas de alerta reactivos",
      description:
        "Los sistemas convencionales alertan después de que ocurre un problema, cuando puede ser demasiado tarde para prevenir daños.",
      backgroundImage:
        "url('https://via.placeholder.com/800x600/581845/FFFFFF')",
    },
  ];

  return (
    <section id="problematica">
      <div className="problematicas-container">
        <div className="titulo-problem">
          <h2>Problematicas</h2>
          <p>
            Los hogares modernos enfrentan desafíos cada vez más complejos que
            requieren soluciones inteligentes.
          </p>
        </div>
        <div className="problematicas-area">
          {problematicas.map((problema, index) => (
            <div
              key={index}
              className="problematica-card"
              style={{ backgroundImage: problema.backgroundImage }}
            >
              <div className="card-content">
                <h3>{problema.title}</h3>
                <p>{problema.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="suelo"></div>
    </section>
  );
};

export default Problematica;
