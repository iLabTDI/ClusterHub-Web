import React from "react";
import { motion } from "framer-motion";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import captura1 from "../../assets/images/captura1.jpg";
import Captura2 from "../../assets/images/Analisis.png";
import Captura3 from "../../assets/images/Clima.jpg";

// Componente reutilizable para el ícono de check
const CheckIcon = () => (
  <FontAwesomeIcon
    icon={faCheck}
    style={{ color: "green", marginRight: "10px" }}
  />
);

// Componente reutilizable para cada área de características con animaciones
const FeatureArea = ({ title, description, items, color, image }) => {
  return (
    <motion.div
      className="features-area"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="Figura-Container">
        <div className="FiguresFT">
          <motion.div
            className="cuadrado1"
            style={{ backgroundColor: color }}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          ></motion.div>
          <motion.div
            className="circulo1"
            style={{ backgroundColor: color }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>
        <div className="ImageFT">
          <motion.img
            src={image}
            alt={title}
            className="feature-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>
      <motion.div
        className="features-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CheckIcon />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

// Datos de las características
const featuresData = [
  {
    title: "Monitoreo Ambiental Avanzado",
    description:
      "Sensores de alta precisión que vigilan constantemente tu entorno.",
    items: [
      "Calidad del aire",
      "Temperatura",
      "Humedad",
      "Niveles de CO2",
      "Detección de humo y fuego",
    ],
    color: "#41b658", // Verde
    image: captura1,
  },
  {
    title: "IA Predictiva y Autónoma",
    description:
      "Algoritmos inteligentes que aprenden y actúan proactivamente.",
    items: [
      "Análisis de patrones de riesgo",
      "Toma de decisiones automatizadas",
      "Alertas personalizadas",
      "Acciones preventivas",
    ],
    color: "#fcc003", // Rojo
    image: Captura2,
  },
  {
    title: "Control Inteligente del Hogar",
    description:
      "Automatización completa de los sistemas esenciales de tu hogar.",
    items: [
      "Iluminación",
      "Aire acondicionado",
      "Sistemas de seguridad",
      "Aspersores contra incendios",
    ],
    color: "#4ecdc4", // Turquesa
    image: Captura3,
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      id="caracteristicas"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="features-section"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="titulo">
          <h2>Características Principales</h2>
          <p>
            ClusterHub combina sensores avanzados con IA predictiva para una
            solución integral.
          </p>
        </div>
        {featuresData.map((feature, index) => (
          <FeatureArea
            key={index}
            title={feature.title}
            description={feature.description}
            items={feature.items}
            color={feature.color} // Pasar el color como prop
            image={feature.image} // Pasar la imagen como prop
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
