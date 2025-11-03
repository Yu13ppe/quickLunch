import React from "react";
import Content1 from "../Assets/Images/Content1.png";
import Content2 from "../Assets/Images/Content2.png";
import Content3 from "../Assets/Images/Content3.png";
import Content4 from "../Assets/Images/Content4.png";

const dishesA = [
  { title: "Pollo a la plancha con ensalada mediterránea", ingredients: "Pollo, tomate, pepino, limón, aceite de oliva" },
  { title: "Wraps de pollo", ingredients: "Pollo, palta, rúcula o lechuga" },
  { title: "Ensalada de Quinoa", ingredients: "Pechuga, zanahoria, quinoa" },
  { title: "Desmenuzado con puré", ingredients: "Pechuga, batata, mantequilla" },
  { title: "Ensalada tibia", ingredients: "Lentejas, zanahoria, pollo,  aceite de oliva" },
];

const dishesB = [
  { title: "Tacos de pollo", ingredients: "Pollo, maíz, limón" },
  { title: "Salmón al vapor", ingredients: "Salmón, miel, zanahoria, brócoli" },
  { title: "Ensalada fría", ingredients: "Atún, pepino, garbanzos" },
  { title: "Wraps de atún", ingredients: "Atún, palta, Lechuga" },
  { title: "Pasta integral con atún", ingredients: "Pasta integral, Atún, aceite de oliva" },
];

const dishesC = [
  { title: "quinoa con atún", ingredients: "Quinoa, atún, maíz, pepino" },
  { title: "Ceviche express", ingredients: "Pescado, limón, cebolla" },
  { title: "Curry de garbanzos", ingredients: "Garbanzos, cebolla, leche" },
  { title: "Hamburguesas de frijoles", ingredients: "Frijoles, ajo" },
  { title: "Wok de tofu", ingredients: "Tofu, zanahoria, brócoli" },
];

const dishesD = [
  { title: "Huevos al horno", ingredients: "Huevos, tomate, espinaca" },
  { title: "Shakshuka express", ingredients: "Huevos, tomate, cebolla" },
  { title: "Wrap de huevo", ingredients: "Huevos, aguacate, lechuga" },
  { title: "Arroz frito", ingredients: "Arroz integral, huevos, arvejas" },
  { title: "papas al horno", ingredients: "Papas, huevos, rúcula o lechuga" },
];

const MenuBlock = ({ items, imageLeft = false, imageSrc, imageAlt = "Platillo destacado" }) => (
  <div className={`menu-block ${imageLeft ? "menu-block--reverse" : ""}`}>
    <div className="menu-block__image">
      <div className="image-placeholder has-image" aria-label={imageAlt}>
        {imageSrc && (
          <img src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" />
        )}
      </div>
    </div>
    <div className="menu-block__list">
      {items.map((item, idx) => (
        <div className="menu-item" key={idx}>
          <h4 className="menu-item__title">{item.title}</h4>
          <p className="menu-item__ingredients">{item.ingredients}</p>
        </div>
      ))}
    </div>
  </div>
);

const MenuSection = () => {
  return (
    <div className="container">
      <h3 className="section__eyebrow">Nuestro contenido</h3>

      <MenuBlock items={dishesA} imageLeft={false} imageSrc={Content1} imageAlt="Platillo 1" />
      <MenuBlock items={dishesB} imageLeft={true} imageSrc={Content2} imageAlt="Platillo 2" />
      <MenuBlock items={dishesC} imageLeft={false} imageSrc={Content3} imageAlt="Platillo 3" />
      <MenuBlock items={dishesD} imageLeft={true} imageSrc={Content4} imageAlt="Platillo 4" />
    </div>
  );
};

export default MenuSection;
