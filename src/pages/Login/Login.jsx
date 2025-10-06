// Importamos React y el hook useState para manejar el estado
import React, { useState } from 'react';
// Importamos los estilos de este componente
import './Login.css';
// Importamos el logo de Netflix
import logo from '../../assets/logo.png';
// Importamos las funciones de autenticación desde firebase.js
import { login, signup } from '../../firebase';
// Importamos el gif que muestra el spinner de carga
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  // Estado para controlar si estamos en "Sign In" o "Sign Up"
  const [signState, setSignState] = useState('Sign In');
  // Estado para el campo nombre (solo en "Sign Up")
  const [name, setName] = useState('');
  // Estado para el email
  const [email, setEmail] = useState('');
  // Estado para la contraseña
  const [password, setPassword] = useState('');
  // Estado para mostrar el spinner mientras carga
  const [loading, setLoading] = useState(false);

  // Función para manejar la autenticación
  const user_auth = async (event) => {
    event.preventDefault(); // evitamos que el formulario recargue la página
    setLoading(true); // activamos el spinner
    if (signState === 'Sign In') {
      // Si está en modo "Sign In", llama a login
      await login(email, password);
    } else {
      // Si está en modo "Sign Up", llama a signup con name, email y password
      await signup(name, email, password);
    }
    setLoading(false); // ocultamos el spinner al terminar
  };

  return (
    // Si está cargando, muestra solo el spinner
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="" />
      </div>
    ) : (
      // Si no está cargando, renderiza el formulario de login/signup
      <div className="login">
        {/* Logo de Netflix */}
        <img src={logo} className="login-logo" alt="" />
        <div className="login-form">
          {/* Título dinámico (Sign In o Sign Up) */}
          <h1>{signState}</h1>
          <form>
            {/* Input para nombre solo si está en modo Sign Up */}
            {signState === 'Sign Up' ? (
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Your name"
              />
            ) : (
              <></>
            )}
            {/* Campo de email */}
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
            />
            {/* Campo de contraseña */}
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
            />
            {/* Botón de enviar que ejecuta la autenticación */}
            <button onClick={user_auth} type="submit">
              {signState}
            </button>
            {/* Sección de ayuda: recordarme y link de ayuda */}
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          {/* Switch para alternar entre Sign In y Sign Up */}
          <div className="form-switch">
            {signState === 'Sign In' ? (
              <p>
                New to Netflix?
                <span
                  onClick={() => {
                    setSignState('Sign Up');
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have account?
                <span
                  onClick={() => {
                    setSignState('Sign In');
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

// Exportamos el componente para poder usarlo en otras partes
export default Login;
