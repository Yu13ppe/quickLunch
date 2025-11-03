import React from "react";
import Gallery1 from "../Assets/Images/Gallery1.png";
import Gallery2 from "../Assets/Images/Gallery2.png";
import Gallery3 from "../Assets/Images/Gallery3.png";
import Gallery4 from "../Assets/Images/Gallery4.png";
import Gallery5 from "../Assets/Images/Gallery5.png";
import Gallery6 from "../Assets/Images/Gallery6.png";


const GallerySection = () => {
  const images = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];

  return (
    <div className="container gallery">
      <h3 className="section__eyebrow">Nuestra galería</h3>
      <div className="gallery__grid">
        {images.map((src, i) => (
          <div key={i} className="image-placeholder has-image" aria-label={`Imagen de galería ${i + 1}`}>
            <img src={src} alt={`Galería ${i + 1}`} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      <div className="gallery__cta">
        <a href="#contacto" className="btn btn-primary">Pídelo ya</a>
      </div>
    </div>
  );
};

export default GallerySection;
