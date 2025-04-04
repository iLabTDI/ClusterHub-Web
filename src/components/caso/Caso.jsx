import { section } from "framer-motion/client";
import React from "react";
import "./Caso.css";
import Foto from "../../assets/images/Incendio.jpg";

function Caso() {
  return (
    <section id="caso">
      <div className="caso-container">
        <div className="titulo-caso">
          <h2>Caso de Uso: Prevención de Incendios</h2>
          <p>Descubre cómo ClusterHub puede salvar vidas y propiedades.</p>
        </div>
        <div className="caso-content">
          <div className="caso-content-text">
            <h3>Detección y Respuesta Automática a Incendios</h3>
            <p>
              ClusterHub no solo detecta incendios, sino que actúa de inmediato
              para minimizar daños, incluso cuando no estás en casa.
            </p>
            <div className="step">
              <div className="step-number">1</div>
              <div class="step-content">
                <h4>Detección Temprana</h4>
                <p>
                  Los sensores detectan un aumento súbito de temperatura o
                  presencia de humo.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div class="step-content">
                <h4>Análisis Inteligente</h4>
                <p>
                  La IA analiza los datos en tiempo real y evalúa la
                  probabilidad de incendio.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div class="step-content">
                <h4>Acción Autónoma</h4>
                <p>
                  Si no hay respuesta del usuario en 30 segundos, el sistema:
                </p>
                <ul className="lista">
                  <li>• Activa aspersores de agua en la zona afectada</li>
                  <li>
                    • Corta el suministro eléctrico para prevenir cortocircuitos
                  </li>
                  <li>
                    • Envía alertas a servicios de emergencia con ubicación
                    exacta
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img className="caso-content-image" src={Foto} alt="Foto" />
        </div>
      </div>
    </section>
  );
}

export default Caso;
