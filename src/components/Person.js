import React from 'react';

const Person = (props) =>{
  const person = props.person;
  return (
  <div>
    <h1>{person.nombre}</h1>
    <h2> {person.estado} </h2>
    <h3> {person.edad} </h3>
  </div>
  )
}

export default Person;
