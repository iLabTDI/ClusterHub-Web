import React from "react";
import "./Negocio.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

function Negocio() {
  const items = [
    {
      title: "Propuesta de Valor",
      points: [
        "Seguridad proactiva que previene emergencias",
        "Eficiencia energética que reduce costos",
        "Tranquilidad mediante IA predictiva",
        "Sostenibilidad ambiental para hogares conscientes",
      ],
    },
    {
      title: "Segmento de Clientes",
      points: [
        "Propietarios de viviendas modernas",
        "Familias conscientes de la seguridad",
        "Empresas de seguros",
        "Entusiastas de la tecnología",
        "Edificios inteligentes",
      ],
    },
    {
      title: "Ventaja Competitiva",
      points: [
        "IA propietaria con algoritmos únicos",
        "Toma de decisiones autónoma",
        "Plataforma todo en uno",
        "Actualizaciones de software continuas",
      ],
    },
    {
      title: "Modelo de Ingresos",
      points: [
        "Venta de hardware base",
        "Suscripciones mensuales de software",
        "Servicios premium de monitoreo",
        "Alianzas con empresas de seguros",
      ],
    },
  ];

  return (
    <section id="negocio">
      <div className="negocio-container">
        <div className="titulo-negocio">
          <h2>Modelo de Negocio</h2>
          <p>
            Una propuesta de valor única que beneficia a nuestros clientes y
            socios.
          </p>
        </div>
        <div className="business-model-container">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="business-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Negocio;
