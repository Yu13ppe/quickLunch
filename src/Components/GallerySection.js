import React, { useEffect, useRef, useState } from "react";
import Gallery1 from "../Assets/Images/Gallery1.png";
import Gallery2 from "../Assets/Images/Gallery2.png";
import Gallery3 from "../Assets/Images/Gallery3.png";
import Gallery4 from "../Assets/Images/Gallery4.png";
import Gallery5 from "../Assets/Images/Gallery5.png";
import Gallery6 from "../Assets/Images/Gallery6.png";


const GallerySection = () => {
  const baseImages = [
    { src: Gallery1, title: "Fideos integrales con pavo", ingredients: "Fideos integrales, pavo, espinaca, aceite de oliva" },
    { src: Gallery2, title: "Arroz frito saludable", ingredients: "Arroz integral, huevos, arvejas" },
    { src: Gallery3, title: "Pollo a la plancha mediterráneo", ingredients: "Pollo, tomate, pepino, limón, aceite de oliva" },
    { src: Gallery4, title: "Hamburguesas de frijoles negros", ingredients: "Frijoles negros, avena, especias" },
    { src: Gallery5, title: "Wrap de huevo y aguacate", ingredients: "Huevos, aguacate, lechuga" },
    { src: Gallery6, title: "Fideos de arroz con tofu", ingredients: "Fideos de arroz, tofu, brócoli" },
  ];
  const loopImages = [...baseImages, ...baseImages];
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // no auto-scroll for reduced motion

    let rafId;
    let last = performance.now();
    let x = 0; // current translateX in px
    const SPEED = 70; // px per second (un poco más rápido)

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      const track = trackRef.current;
      if (track && !paused) {
        x -= SPEED * dt;
        const total = track.scrollWidth; // ancho de todos los ítems (duplicados)
        const half = total / 2; // punto de reinicio
        if (-x >= half) {
          x += half; // vuelve al inicio sin salto visual
        }
        track.style.transform = `translateX(${x}px)`;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  return (
    <div className="container gallery">
      <h3 className="section__eyebrow">Nuestra galería</h3>

      <div className="carousel" role="region" aria-label="Carrusel de galería (desliza para ver más)" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="carousel__track" ref={trackRef} style={{ transform: 'translateX(0)' }}>
          {loopImages.map((item, i) => (
            <div key={i} className="carousel__item image-placeholder has-image" aria-label={`Imagen de galería ${(i % baseImages.length) + 1}`}>
              <img src={item.src} alt={`Galería ${(i % baseImages.length) + 1}`} loading="lazy" decoding="async" />
              <div className="carousel__overlay" aria-hidden="true">
                <div className="carousel__caption">
                  <h5 className="carousel__title">{item.title}</h5>
                  <p className="carousel__ingredients">{item.ingredients}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery__cta">
        <a href="https://pay.hotmart.com/A102738978A" className="btn btn-primary">Pide tu eBook Aquí</a>
      </div>
    </div>
  );
};

export default GallerySection;
