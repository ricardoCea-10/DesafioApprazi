import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@ionic/react/css/core.css';
import App from './App.jsx'
// Importa Firebase desde archivo config
import app from './firebase/firebase-config.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
