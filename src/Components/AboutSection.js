import React from "react";
import Cheo from "../Assets/Images/Cheo.png";
// Sección "Sobre mí" con texto a la izquierda e imagen a la derecha
const AboutSection = () => {
  return (
    <div className="container about">
      <div className="about__content">
        <h3 className="section__eyebrow">Sobre mí</h3>
        <p className="section__text">
          “Soy José (Cheo) Portillo, amante de la cocina sencilla y real. Creo
          que alimentarse bien no requiere complicaciones, solo intención y
          buenos ingredientes.”
        </p>
        <p className="section__text">
          Mi propósito es recordarte que cocinar puede ser un acto de calma y
          creatividad. No se trata de hacerlo perfecto, sino de disfrutar el
          proceso. Porque la comida real, simple y casera —hecha con tus propias
          manos— siempre será la mejor forma de cuidar de ti.
        </p>
        <p className="section__text">
          En medio del ritmo acelerado de la vida, este libro te invita a
          detenerte un momento para cuidar de ti a través de la comida real.
        </p>
      </div>
      <div className="about__media">
        <div className="image-placeholder image-placeholder--portrait has-image" aria-label="Foto de José (Cheo) Portillo">
          <img src={Cheo} alt="José (Cheo) Portillo" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
