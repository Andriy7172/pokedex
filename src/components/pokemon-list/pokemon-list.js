import React, { Component } from 'react';
import PokemonItem from '../pokemon-item';

class PokemonList extends Component {

  render() {

    let arr = this.props.list;

    const filteredByType = this.props.list.filter((item, index) => {
      if(this.props.type) {
        for(let i = 0; i < item.types.length; i++) {
          if(item.types[i].type.name === this.props.type) {
            return true;
          }
        }
      }
      return false;
    });

    if(filteredByType.length) {
      arr = filteredByType;
    }

    const renderItems = arr.map((item, index) => {
      const reg = new RegExp("([0-9]+)(/)$");
      const id = reg.exec(item.url);
      return (
        <li className = 'col-xl-4 col-lg-6' key = {id[1]}>
          <PokemonItem typeFilter = {this.props.typeFilter} showDetails = {(url) => this.props.showDetails(url)} pokemon = {item}/>
        </li>
      );
    });
  
    return (
      <div className = 'col-xl-8 col-lg-6 col-sm-4 col-6'>
        <ul className = 'row list-unstyled'>
          {renderItems}
        </ul>
  
        <button 
          className = 'btn btn-primary col-xl-12'
          onClick = {this.props.loadMore}>Load more</button>
      </div>
    );
  }

}

export default PokemonList;