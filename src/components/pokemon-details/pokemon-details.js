import React from 'react';
import './pokemon-details.css';

const PokemonDetails = ({details}) => {
  const types = details.types.reduce((acumulator, item) => {
    return acumulator + ' | ' + item.type.name + ' | ';
  }, '');

  const stats = details.stats.map((item) => {
    return (
      <tr key = {item.stat.name}><td>{item.stat.name}</td><td>{item.base_stat}</td></tr>
    );
  });
  return (
    <div className = 'col-xl-4 col-lg-6 col-sm-8 col-6 pokemon-details'>
      <div>
        <img src = {details.sprite} alt = {details.name} />
        <h3>{details.name}</h3>
        <table>
          <tbody>
            <tr><td>Type</td><td>{types}</td></tr>
            {stats}
            <tr><td>Weight</td><td>{details.weight}</td></tr>
            <tr><td>Total moves</td><td>{details.moves}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PokemonDetails;