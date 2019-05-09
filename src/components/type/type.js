import React from 'react';
import './type.css';

const Type = ({type, typeFilter}) => {

  const handleClick = () => {
    typeFilter(type.name);
  }

  const typeClass = `btn type type-${type.name}`;
  return (
    <div onClick = {handleClick} className = {typeClass}>
      <p>{type.name}</p>
    </div>
  );
}

export default Type;