import React from "react";
import useTypewriter from "./useTypewriter";
import Seccion1 from "../Assets/Images/Seccion1.jpg";

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
          ¿Tu problema para cocinar es la falta de tiempo? ¡Aquí tienes la solución!
          {/* ¿Tienes poco tiempo, pero quieres comer bien? */}
        </p>
        <p className="hero__subtitle">
          <strong>60 recetas</strong> de almuerzos completos listos en menos de <strong>25 minutos</strong>
          {/* Con estas <strong>60 recetas</strong> descubrirás que cocinar puede ser simple, saludable y delicioso. */}
        </p>
        <p className="hero__subtitle">
          Descubre cómo cocinar puede ser <strong><em>fácil, nutritivo y delicioso</em></strong> con recetas pensadas para el ritmo de la vida moderna.
          {/* Comidas completas listas en menos de <strong>25 minutos</strong> — <strong>Porque cuidarte también puede ser fácil.</strong> */}
        </p>
        <div className="hero__cta">
          <a href="#menu" className="btn btn-primary">Ver contenido</a>
          <a href="#contacto" className="btn btn-outline">Pide tu eBook Aquí</a>
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
