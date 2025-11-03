import React from "react";

const GallerySection = () => {
  return (
    <div className="container gallery">
      <h3 className="section__eyebrow">Nuestra galería</h3>
      <div className="gallery__grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="image-placeholder" aria-label={`Espacio para imagen ${i + 1}`} />
        ))}
      </div>
      <div className="gallery__cta">
        <a href="#contacto" className="btn btn-primary">Pídelo ya</a>
      </div>
    </div>
  );
};

export default GallerySection;
