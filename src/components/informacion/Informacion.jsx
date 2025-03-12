import React from "react";
import "./Informacion.css";

function Informacion() {
  return (
    <section id="informacion">
      <div className="curva-background">
        <div className="curva"></div>
      </div>

      <div className="informacion-container">
        <div className="texto-info">
          <h2>Revoluciona la forma de proteger tu hogar</h2>
          <p>
            Únete a la vanguardia de la seguridad inteligente y sostenible.
            ClusterHub no es solo un producto, es tu aliado más confiable para
            proteger lo que más valoras.
          </p>
          <button className="btn-custom">Solicitar Demo</button>
        </div>
      </div>
    </section>
  );
}

export default Informacion;
