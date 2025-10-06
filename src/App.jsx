// Importamos React y el hook useEffect para manejar efectos secundarios
import React, { useEffect } from 'react';

// Importamos las páginas principales
import Home from './pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';

// Importamos la función de Firebase que detecta cambios en el estado de autenticación
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

// Importamos el contenedor de notificaciones y estilos de react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Hook para navegar entre rutas programáticamente
  const navigate = useNavigate();

  // useEffect que se ejecuta al cargar la aplicación
  useEffect(() => {
    // Observa los cambios en la sesión de Firebase (usuario logueado o no)
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Si hay usuario logueado, lo lleva a la página principal
        console.log('Logged In');
        navigate('/');
      } else {
        // Si no hay usuario, lo redirige a la pantalla de Login
        console.log('Logged Out');
        navigate('/login');
      }
    });
  }, []); // El array vacío significa que solo corre una vez cuando el componente se monta

  return (
    <div>
      {/* Contenedor de notificaciones global, configurado en tema oscuro */}
      <ToastContainer theme="dark" />

      {/* Definición de rutas con React Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
