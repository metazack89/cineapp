// Importaciones de React y hooks
import React, { useEffect, useRef } from 'react';
// Importación de estilos CSS específicos para este componente
import './Navbar.css';
// Importación de imágenes y íconos usados en la barra de navegación
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
// Importa la función de logout definida en firebase.js para cerrar sesión
import { logout } from '../../firebase';

const Navbar = () => {
  // Referencia al elemento DOM de la navbar
  const navRef = useRef();

  // useEffect para escuchar el evento de scroll de la ventana
  useEffect(() => {
    // Añadimos un listener al hacer scroll
    window.addEventListener('scroll', () => {
      // Si el scroll vertical es mayor o igual a 80px
      if (window.scrollY >= 80) {
        // Agrega la clase 'nav-dark' (fondo oscuro)
        navRef.current.classList.add('nav-dark');
      } else {
        // Si volvemos arriba, quitamos la clase
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, []); // [] significa que se ejecuta solo al montar el componente

  return (
    // Contenedor principal de la navbar
    <div ref={navRef} className="navbar">
      {/* Sección izquierda: logo y enlaces de navegación */}
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      {/* Sección derecha: íconos, perfil y menú desplegable */}
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" /> {/* Icono de búsqueda */}
        <p>Children</p> {/* Texto adicional */}
        <img src={bell_icon} alt="" className="icons" /> {/* Icono de notificaciones */}
        {/* Contenedor del perfil del usuario */}
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" /> {/* Imagen de perfil */}
          <img src={caret_icon} alt="" /> {/* Flecha hacia abajo (caret) */}
          {/* Menú desplegable al pasar por el perfil */}
          <div className="dropdown">
            <p
              onClick={() => {
                // Llama a la función logout de Firebase al hacer clic
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; // Exporta el componente para usarlo en otros archivos
