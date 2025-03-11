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
      title: "Problema 2",
      description: "Descripción breve del problema 2.",
      backgroundImage:
        "url('https://via.placeholder.com/800x600/C70039/FFFFFF')",
    },
    {
      title: "Problema 3",
      description: "Descripción breve del problema 3.",
      backgroundImage:
        "url('https://via.placeholder.com/800x600/900C3F/FFFFFF')",
    },
    {
      title: "Problema 4",
      description: "Descripción breve del problema 4.",
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
    </section>
  );
};

export default Problematica;
