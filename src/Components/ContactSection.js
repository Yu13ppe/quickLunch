import React from "react";

const ContactSection = () => {
  return (
    <div className="container contact">
      <h3 className="section__eyebrow">Contacto</h3>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form__row">
          <div className="form__field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" placeholder="Tu nombre" />
          </div>
          <div className="form__field">
            <label htmlFor="email">Correo</label>
            <input id="email" name="email" type="email" placeholder="tucorreo@ejemplo.com" />
          </div>
        </div>
        <div className="form__row">
          <div className="form__field">
            <label htmlFor="phone">Número telefónico</label>
            <input id="phone" name="phone" type="tel" placeholder="55 1234 5678" />
          </div>
        </div>
        <div className="form__row">
          <div className="form__field form__field--full">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="4" placeholder="Escribe tu mensaje" />
          </div>
        </div>
        <div className="form__actions">
          <button className="btn btn-primary" type="submit" disabled>
            Enviar (próximamente disponible)
          </button>
        </div>
      </form>

      {/* <div className="contact__media">
        <div className="image-placeholder image-placeholder--wide" aria-label="Espacio para imagen/mapa de contacto" />
      </div> */}
    </div>
  );
};

export default ContactSection;
