import React from "react";
import Content1 from "../Assets/Images/Content1.png";
import Content2 from "../Assets/Images/Content2.jpg";
import Content3 from "../Assets/Images/Content3.png";
import Content4 from "../Assets/Images/Content4.png";
import Content5 from "../Assets/Images/Content5.png";
import Content6 from "../Assets/Images/Content6.png";

const sections = [
  {
    title: "🐔 Con pollo",
    text: "Recetas llenas de sabor, ligereza y proteínas magras para el día a día..",
    image: Content1,
  },
  {
    title: "🐟 Con pescado o mariscos",
    text: "Platos con la frescura del mar en platos simples y saludables.",
    image: Content2,
  },
  {
    title: "🥦 Vegetarianos / veganos",
    text: "Opciones con vegetales, comida viva, colorida y llena de energía.",
    image: Content3,
  },
  {
    title: "🍳 Con huevos o proteínas rápidas",
    text: "Preparaciones exprés, soluciones nutritivas para días con muy poco tiempo.",
    image: Content4,
  },
  {
    title: "🍝 Con pastas o granos",
    text: "Texturas suaves, energía lenta y combinaciones saciantes con un toque casero..",
    image: Content5,
  },
  {
    title: "🥗 Para llevar / meal prep",
    text: "Comidas prácticas para preparar y disfrutar en cualquier lugar.",
    image: Content6,
  },
];

const MenuSection = () => {
  return (
    <div className="container">
      <h2 className="section__eyebrow">Nuestro contenido</h2>
      <p className="section__text">
        Entre el trabajo, las rutinas y el cansancio, cocinar puede parecer un reto. Este ebook te demuestra que con pocos ingredientes y un poco de intención, puedes crear comidas reales, rápidas y reconfortantes en minutos. Son seis capítulos, cada uno con diez recetas fáciles y nutritivas.
      </p>

      <div className="menu-simple">
        {sections.map((s, i) => (
          <div className="menu-card" key={i}>
            <h4 className="menu-card__title">{s.title}</h4>
            <p className="menu-card__text">{s.text}</p>
            <div className="menu-card__image image-placeholder has-image" aria-label={s.title}>
              <img src={s.image} alt={s.title} loading="lazy" decoding="async" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
