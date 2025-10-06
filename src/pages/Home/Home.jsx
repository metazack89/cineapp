// Importación de React (librería principal)
import React from 'react';
// Importación de los estilos CSS para este componente
import './Home.css';
// Importación de la barra de navegación
import Navbar from '../../components/Navbar/Navbar';
// Importación de imágenes usadas en el banner principal
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
// Importación de íconos para botones
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
// Importación del componente de tarjetas dinámicas
import TitleCards from '../../components/TitleCard/TitleCards';
// Importación del pie de página
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      {/* Barra de navegación fija en la parte superior */}
      <Navbar />

      {/* Sección principal del "hero" (banner con imagen destacada) */}
      <div className="hero">
        {/* Imagen de fondo (banner principal) */}
        <img src={hero_banner} alt="" className="banner-img" />

        {/* Contenido sobre el banner */}
        <div className="hero-caption">
          {/* Imagen con el título del contenido principal */}
          <img src={hero_title} alt="" className="caption-img" />
          {/* Descripción de la serie/película principal */}
          <p>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul
            embarks on a quest to save the city from an immortal enemy.
          </p>

          {/* Botones de acción (Reproducir y Más información) */}
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>

          {/* Tarjetas dinámicas dentro del hero (ejemplo: populares) */}
          <TitleCards />
        </div>
      </div>

      {/* Más secciones de tarjetas (con diferentes categorías) */}
      <div className="more-cards">
        <TitleCards title={'Blockbuster Movies'} category={'top_rated'} />
        <TitleCards title={'Only on Netflix'} category={'popular'} />
        <TitleCards title={'Upcoming'} category={'upcoming'} />
        <TitleCards title={'Top Pics for You'} category={'now_playing'} />
      </div>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Home;
