//import logo from './logo.svg';
//import React from 'react';

import './App.css';
import Route from "./components/Route";
import Header from "./components/Header";
import Accueil from './components/Accueil';
import Animaux from './components/AnimalCrossing';
import Animalia from './components/Animalia';
import Api from './components/Api';

function App() {
  return(
    <div className="App">
      <header className="App-header">
      <div class="container">
        <Header />
      </div>
        <Route path="/">
          <Accueil />
        </Route>
        <Route path="/AnimalCrossing">
          <Animaux />
        </Route>
        <Route path="/Animalia">
          <Animalia />
        </Route>
        <Route path="/Api">
          <Api />
        </Route>
        <Route path="/All">
          <Accueil />
          <Api />
        </Route>
      </header>
    </div>
  )
}

export default App;
