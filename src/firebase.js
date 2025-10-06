// Importamos la configuración de Firebase desde config.js
import { firebaseConfig } from './config';
console.log(firebaseConfig);
// Función para inicializar la app de Firebase
import { initializeApp } from 'firebase/app';

// Importamos métodos de autenticación de Firebase
import {
  createUserWithEmailAndPassword, // Crear un nuevo usuario con email y password
  getAuth, // Obtener la instancia de autenticación
  signInWithEmailAndPassword, // Iniciar sesión con email y password
  signOut, // Cerrar sesión
} from 'firebase/auth';

// Importamos métodos de Firestore
import { addDoc, collection, getFirestore } from 'firebase/firestore';

// Librería para mostrar notificaciones
import { toast } from 'react-toastify';

// Inicializamos la app de Firebase con nuestra configuración
const app = initializeApp(firebaseConfig);

// Obtenemos la instancia de autenticación
const auth = getAuth(app);

// Obtenemos la instancia de Firestore
const db = getFirestore(app);

// Función para registrar un nuevo usuario
const signup = async (name, email, password) => {
  try {
    // Crear usuario con correo y contraseña
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Guardar datos adicionales del usuario en Firestore
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (error) {
    // Mostrar error en consola y con notificación
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

// Función para iniciar sesión
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // Mostrar error en consola y con notificación
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

// Función para cerrar sesión
const logout = () => {
  signOut(auth);
};

// Exportamos auth, db y las funciones personalizadas
export { auth, db, login, signup, logout };
