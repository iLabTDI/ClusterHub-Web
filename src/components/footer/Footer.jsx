import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../assets/images/NewLogo.png";

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-content">
        {/* Sección de Información de Contacto */}
        <div className="footer-section">
          <h3>ClusterHub</h3>
          <div className="contact-info">
            <div className="contact-item">
              <p>
                Transformando hogares en ecosistemas inteligentes, seguros y
                sostenibles con tecnología de vanguardia e inteligencia
                artificial.
              </p>
            </div>
          </div>
        </div>
        {/* Sección de Enlaces Rápidos */}
        <div className="footer-section">
          <h3>Producto</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Características</a>
            </li>
            <li>
              <a href="/">Caso de uso</a>
            </li>
            <li>
              <a href="/">Modelo de negocio</a>
            </li>
            <li>
              <a href="/">Demo</a>
            </li>
          </ul>
        </div>
        {/* Sección de Redes Sociales */}
        <div className="footer-section">
          <h3>Empresa</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/ILabTDI?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook iLabTDI"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span>iLabTDI</span>
            </a>
            <a
              href="https://www.instagram.com/ilab_tdi?igsh=aDJ5YTFubHFhYnE4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram iLabTDI"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>iLabTDI</span>
            </a>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              <p>lmcg2910@gmail.com</p>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhoneAlt} aria-hidden="true" />
              <p>+52 33 1328 6565</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Derechos de Autor y Términos */}
      <div className="footer-bottom">
        <div className="footer-logos">
          <img src={Logo} alt="Logo iLabTDI" className="logo logo-tdi" />
        </div>
        <p>&copy; 2025 iLabTDI. Todos los derechos reservados.</p>
        <div className="legal-links">
          <a href="/terminos">Términos y Condiciones</a>
          <a href="/privacidad">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
