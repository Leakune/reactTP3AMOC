//import logo from './logo.svg';
//import React from 'react';
import './App.css';
import Accueil from './components/Accueil';
import Api from './components/Api';

function App() {
  return(
    <div className="App">
        <header className="App-header">
            <Accueil/>
            <Api/>
        </header>
    </div>
  )
}

export default App;
