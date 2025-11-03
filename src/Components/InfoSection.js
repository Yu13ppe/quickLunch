import React from "react";

const InfoSection = () => {
  return (
    <div className="container info">
      <h2 className="section__eyebrow">"Empieza hoy a cocinar sin estrés y disfrutar de cada bocado"</h2>
      <p className="section__text">
        Entre el trabajo, las rutinas y el cansancio, cocinar puede parecer un
        reto. Este libro será tu guía para comer mejor sin complicaciones ni
        estrés, y para reconectar con el placer de preparar comidas simples,
        saludables y llenas de sabor.
      </p>
      <div>
        <a href="#contacto" className="btn btn-primary">
          Pide tu eBook Aquí
        </a>
      </div>
    </div>
  );
};

export default InfoSection;
