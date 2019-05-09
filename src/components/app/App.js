import React, { Component } from 'react';
import PokemonList from '../pokemon-list';
import { getChunkOfPokemon, getNext, getPokemon } from '../../services/api-service';
import PokemonDetails from '../pokemon-details';
import Loader from '../loader';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      next: '',
      details: null,
      loading: true,
      type: ''
    }
  }

  typeFilter = (type) => {
    this.setState({type: type});
  }

  componentDidMount() {
    getChunkOfPokemon()
      .then(res => this.setState({...res, loading: false}))
      .catch(error => console.log(error));
  }

  loadMore = () => {
    if(this.state.next) {
      getNext(this.state.next)
      .then(res => this.setState(({results, next}) => {
        const arr = [
          ...results,
          ...res.results
        ]
        return { results: arr, next: res.next, type: '' }
      }));
    }
  }

  showDetails = (url) => {
    getPokemon(url)
      .then(data => this.setState({details: data}))
      .catch(error => console.log(error));
  }

  render() {
    const { results, details, loading, type } = this.state;
    return(
      <div className = 'container app'>
        <h1>POKEDEX</h1>
        <div className = 'row'>
          { loading ? (
            <Loader/>
          ) : (
            <PokemonList type = {type} typeFilter = {this.typeFilter} list = {results} showDetails = {this.showDetails} loadMore = {this.loadMore}/>
          )}
          { details ? (
            <PokemonDetails details = {details} />
          ) : (
            null
          ) }
        </div>
      </div>
    );
  }
}

export default App;
