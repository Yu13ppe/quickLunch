import React from "react";
import useTypewriter from "./useTypewriter";
import Seccion1 from "../Assets/Images/Seccion1.jpeg";

const Hero = () => {
  const dynamic = useTypewriter({
    words: ["Saludables", "Rápidas", "Creativas", "Deliciosas"],
    prefix: "Recetas ",
    typingSpeed: 90,
    deletingSpeed: 55,
    pauseBetweenWords: 900,
  });

  return (
    <div className="container hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-dynamic">{dynamic}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero__subtitle">
          Comidas caseras, balanceadas y listas en minutos.
        </p>
        <div className="hero__cta">
          <a href="#menu" className="btn btn-primary">Ver contenido</a>
          <a href="#contacto" className="btn btn-outline">Pídelo ya</a>
        </div>
      </div>
      <div className="hero__media">
        <div className="image-placeholder image-placeholder--lg has-image" aria-label="Imagen principal">
          <img src={Seccion1} alt="Receta destacada" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
