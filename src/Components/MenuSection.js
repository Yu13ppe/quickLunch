import React from "react";

const dishesA = [
  { title: "Ensalada de Quinoa", ingredients: "Quinoa, tomate, pepino, limón, aceite de oliva" },
  { title: "Pollo a la Plancha", ingredients: "Pechuga, especias, ensalada verde" },
  { title: "Tacos de Pescado", ingredients: "Pescado, col morada, salsa de yogur" },
  { title: "Bowl Mediterráneo", ingredients: "Garbanzos, aceitunas, tomate, feta" },
  { title: "Sopa de Lentejas", ingredients: "Lentejas, zanahoria, apio, especias" },
];

const dishesB = [
  { title: "Wrap de Vegetales", ingredients: "Espinaca, pimiento, hummus" },
  { title: "Salmón al Horno", ingredients: "Salmón, limón, eneldo, brócoli" },
  { title: "Pasta Integral", ingredients: "Pasta, albahaca, tomate, parmesano" },
  { title: "Omelette Proteico", ingredients: "Huevos, champiñones, espinaca" },
  { title: "Arroz con Verduras", ingredients: "Arroz integral, calabacín, elote" },
];

const dishesC = [
  { title: "Chili de Pavo", ingredients: "Pavo molido, frijoles, tomate" },
  { title: "Poke Bowl", ingredients: "Atún, arroz, aguacate, sésamo" },
  { title: "Curry Suave", ingredients: "Pollo, leche de coco, verduras" },
  { title: "Ensalada César Light", ingredients: "Lechuga, pollo, aderezo ligero" },
  { title: "Crema de Calabaza", ingredients: "Calabaza, cebolla, caldo vegetal" },
];

const dishesD = [
  { title: "Tofu Teriyaki", ingredients: "Tofu, teriyaki casera, arroz" },
  { title: "Pechuga Rellena", ingredients: "Pollo, espinaca, queso ligero" },
  { title: "Buddha Bowl", ingredients: "Camote, kale, garbanzos, tahini" },
  { title: "Sándwich Integral", ingredients: "Pan integral, pavo, aguacate" },
  { title: "Yogur con Fruta", ingredients: "Yogur griego, frutos rojos, granola" },
];

const MenuBlock = ({ items, imageLeft = false }) => (
  <div className={`menu-block ${imageLeft ? "menu-block--reverse" : ""}`}>
    <div className="menu-block__image">
      <div className="image-placeholder" aria-label="Espacio para imagen de platillo" />
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

      <MenuBlock items={dishesA} imageLeft={false} />
      <MenuBlock items={dishesB} imageLeft={true} />
      <MenuBlock items={dishesC} imageLeft={false} />
      <MenuBlock items={dishesD} imageLeft={true} />
    </div>
  );
};

export default MenuSection;
