import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Nombre from './components/Nombre';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello nombre="Alfredo" num="2" />
      </div>
    );
  }
}

export default App;
