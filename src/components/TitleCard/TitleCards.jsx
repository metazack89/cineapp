// Importaciones necesarias
import React, { useEffect, useRef, useState } from 'react';
// Estilos CSS específicos para este componente
import './TitleCards.css';
// Archivo con datos estáticos de tarjetas (posiblemente de prueba o backup)
import cards_data from '../../assets/cards/Cards_data';
// Importa Link de react-router-dom para navegación interna
import { Link } from 'react-router-dom';
// Importa la clave de TheMovieDB definida en config.js o .env
import { TMDB_ACCESS_TOKEN } from '../../config';

const TitleCards = ({ title, category }) => {
  // Estado para almacenar las películas/series obtenidas de la API
  const [apiData, setApiData] = useState([]);
  // Referencia al contenedor de tarjetas (para scroll horizontal)
  const cardsRef = useRef();

  // Configuración de la petición fetch hacia la API de TMDB
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Token de autorización necesario para consumir la API
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    },
  };

  // Función que maneja el scroll horizontal con la rueda del mouse
  const handleWheel = (event) => {
    event.preventDefault(); // Evita el scroll vertical por defecto
    cardsRef.current.scrollLeft += event.deltaY; // Desplaza el contenedor horizontalmente
  };

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Llamada a la API de TMDB: obtiene películas por categoría o "now_playing"
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'now_playing'
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json()) // Convierte la respuesta en JSON
      .then((response) => setApiData(response.results)) // Guarda los resultados en el estado
      .catch((err) => console.error(err)); // Maneja errores

    // Agrega el listener para capturar el scroll del mouse en el contenedor de tarjetas
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []); // [] asegura que solo se ejecute al montar el componente

  // Ejemplo de datos que se pueden pasar al siguiente componente al hacer clic en una tarjeta
  const dataToPass = { name: 'John Doe', age: 25 };

  return (
    <div className="title-cards">
      {/* Título dinámico o por defecto */}
      <h2>{title ? title : 'Popular on Netflix'}</h2>

      {/* Contenedor de tarjetas con scroll horizontal */}
      <div className="card-list" ref={cardsRef}>
        {/* Itera sobre los datos obtenidos de la API y genera un enlace por tarjeta */}
        {apiData.map((card, index) => {
          return (
            <Link
              // Navega hacia la ruta /player con el id de la película
              to={{ pathname: `/player/${card.id}`, state: dataToPass }}
              className="card"
              key={index}
            >
              {/* Imagen de la película */}
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              {/* Título de la película */}
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards; // Exporta el componente para su uso en otros archivos
