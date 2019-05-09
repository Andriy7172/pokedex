import React, { Component } from 'react';
import { getPokemon } from '../../services/api-service';
import TypeList from '../type';
import './pokemon-item.css';

class PokemonItem extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    const{ pokemon } = this.props;
    getPokemon(pokemon.url)
      .then(data => this.setState({ ...data}))
      .catch(error => console.log(error));
  }

  handleClick = () => {
    this.props.showDetails(this.props.pokemon.url);
  }

  render() {
    const{ name, sprite, types } = this.state;
    return(
      <div className = 'pokemon-item'>
        <div onClick = {this.handleClick}>
          <img src = {sprite} alt = {name} />
          <p>{name}</p>          
        </div>
        <TypeList typeFilter = {this.props.typeFilter} list = {types} />
      </div>
    );
  }

}

export default PokemonItem;