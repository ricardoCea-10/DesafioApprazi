import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { setupIonicReact } from '@ionic/react';
import AuthUI from './components/AuthUI.jsx';
import Home from './components/FirestoreDatabase.jsx';
import FirestoreDatabase from './components/FirestoreDatabase.jsx';

// funcion para disponibilizar componentes
setupIonicReact();

function App() {
  const [count, setCount] = useState(0);
  const around = 'around';

  return (
    <div>
      <FirestoreDatabase />
      <AuthUI />

      <div className={around}>
        <div className={around}>
          <h3>Todo App</h3>
          <form>
            <input type="text" placeholder="Add a new todo" />
            <button type="submit">Add</button>
          </form>
        </div> 
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
