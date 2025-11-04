import React from "react";
import "./Assets/Css/styles.css";

import Hero from "./Components/Hero";
import InfoSection from "./Components/InfoSection";
import MenuSection from "./Components/MenuSection";
import GallerySection from "./Components/GallerySection";
import AboutSection from "./Components/AboutSection";

function App() {
  return (
    <div className="App">
      <main>
        <section id="inicio" className="section section-hero">
          <Hero />
        </section>

        <section id="info" className="section section-info">
          <InfoSection />
        </section>

        <section id="menu" className="section section-menu">
          <MenuSection />
        </section>

        <section id="galeria" className="section section-gallery">
          <GallerySection />
        </section>

        <section id="sobre-mi" className="section section-about">
          <AboutSection />
        </section>
      </main>
    </div>
  );
}

export default App;
