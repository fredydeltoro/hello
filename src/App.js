import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';


const Nombres = [
  {
    nombre: 'Gerardo',
    estado: 'MTY',
    edad: 28
  },
  {
    nombre: 'Ernesto',
    estado: 'Campeche',
    edad: 26
  },
  {
    nombre: 'Francisco',
    estado: 'Hidalgo',
    edad: 38
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        {Nombres.map((person) => (
          <Person person={person} num="2" />
        ))}
      </div>
    );
  }
}

export default App;
