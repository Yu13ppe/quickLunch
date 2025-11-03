import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__brand">60 almuerzos saludables</div>
        <nav className="navbar__menu">
          <a href="#inicio" className="navbar__link">Inicio</a>
          <a href="#menu" className="navbar__link">Menú</a>
          <a href="#contacto" className="navbar__link">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
