import React, { useState } from "react";
import "./NavBar.css"; // Archivo de estilos CSS
import Logo from "../../assets/images/NewLogo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Cerrar el menú después de hacer clic en un enlace (para móviles)
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img className="navbar-logo" src={Logo} alt="Logo" />
        </div>
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
