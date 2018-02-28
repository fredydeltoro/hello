import React from 'react';
const Nombres = ['Gerardo', 'Ernesto', 'Francisco']

function multiplicar(num, index) {
  num = parseInt(num)
  return num * index;
}

const  Hello = (props) => (
  <ul>
    {
      Nombres.map(function(nombre, index, array) {
        return <li>{nombre + ' ' + multiplicar(props.num, index) + array}</li>
      })
    }
  </ul>
);

export default Hello;
