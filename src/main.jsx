// Importamos React
import React from 'react';

// Importamos ReactDOM para renderizar nuestra aplicación en el DOM
import ReactDOM from 'react-dom/client';

// Importamos el componente principal de la aplicación
import App from './App.jsx';

// Importamos los estilos globales definidos en index.css
import './index.css';

// Importamos BrowserRouter para manejar las rutas de la aplicación
import { BrowserRouter } from 'react-router-dom';

// Renderizamos la aplicación dentro del elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {' '}
    {/* StrictMode ayuda a identificar problemas en el desarrollo */}
    <BrowserRouter>
      {' '}
      {/* Proveedor de rutas que permite la navegación SPA */}
      <App /> {/* Montamos el componente principal */}
    </BrowserRouter>
  </React.StrictMode> // Cerramos StrictMode y pasamos la coma final que React requiere en JSX
);
