import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';


const Nombres = [
  {
    nombre: 'Alfredo',
    estado: 'Querétaro',
    edad: 26
  },
  {
    nombre: 'Alfredo',
    estado: 'Querétaro',
    edad: 26
  },
  {
    nombre: 'Alfredo',
    estado: 'Querétaro',
    edad: 26
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
