// Importa React (necesario para componentes funcionales)
import React from 'react';

// Importa el archivo CSS específico para dar estilos al footer
import './Footer.css';

// Importa las imágenes de íconos desde la carpeta de assets
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

// Componente funcional Footer
const Footer = () => {
  return (
    <div className="footer">
      {/* Contenedor principal del footer */}

      {/* Sección de íconos de redes sociales */}
      <div className="footer-icons">
        <img src={facebook_icon} alt="" /> {/* Ícono de Facebook */}
        <img src={instagram_icon} alt="" /> {/* Ícono de Instagram */}
        <img src={twitter_icon} alt="" /> {/* Ícono de Twitter */}
        <img src={youtube_icon} alt="" /> {/* Ícono de YouTube */}
      </div>

      {/* Lista de enlaces informativos */}
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      {/* Texto de derechos de autor */}
      <p className="copyright-text">© 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

// Exporta el componente para poder usarlo en otras partes del proyecto
export default Footer;
