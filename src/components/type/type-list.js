import React from 'react';
import Type from './type';
import './type.css';

const TypeList = ({ list, typeFilter }) => {
  if(!list) {
    list = []
  }
  const renderItems = list.map((item, index) => {
    const reg = new RegExp("([0-9]+)(/)$");
    const id = reg.exec(item.type.url);
    return (
      <li key = {id[1]}>
        <Type typeFilter = {typeFilter} type = {item.type}/>
      </li>
    );
  });

  return (
    <div>
      <ul className = 'list-unstyled types'>
        {renderItems}
      </ul>
    </div>
  );
}

export default TypeList;