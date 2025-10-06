// Importamos React y los hooks useEffect y useState para manejar efectos y estado
import React, { useEffect, useState } from 'react';
// Importamos los estilos CSS específicos de este componente
import './Player.css';
// Importamos el ícono de flecha para volver atrás
import back_arrow_icon from '../../assets/back_arrow_icon.png';
// Importamos hooks de react-router-dom para navegación y parámetros de URL
import { useNavigate, useParams } from 'react-router-dom';
// Importamos la clave de acceso a TMDB desde el archivo de configuración
import { TMDB_ACCESS_TOKEN } from '../../config';

const Player = (props) => {
  // Obtenemos el estado pasado desde el componente anterior (props.location)
  const state = props.location;
  // Extraemos el id de la película desde los parámetros de la URL
  const { id } = useParams();
  // Hook para navegar entre rutas
  const navigate = useNavigate();

  // Estado para guardar los datos de la API de TMDB relacionados al video
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });

  // Opciones de configuración para la petición fetch
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    },
  };

  // useEffect se ejecuta al montar el componente
  useEffect(() => {
    // Hacemos la petición a la API de TMDB para obtener los videos de la película con id
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0])) // guardamos el primer video en el estado
      .catch((err) => console.error(err));

    // Mostramos en consola las props recibidas
    console.log(props);
  }, []);

  return (
    <div className="player">
      {/* Flecha de regreso: al hacer click navega dos pasos atrás en el historial */}
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />

      {/* Iframe que carga el video desde YouTube con la key recibida de la API */}
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe>

      {/* Información adicional del video */}
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p> {/* Fecha de publicación */}
        <p>{state}</p> {/* Estado recibido como props */}
        <p>{apiData.type}</p> {/* Tipo de video (ej: Trailer, Teaser) */}
      </div>
    </div>
  );
};

// Exportamos el componente para que pueda ser utilizado en otras partes de la app
export default Player;
