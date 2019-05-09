const getData = async (url) => {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await response.json();
  return data;
}

const getPokemon = async (url) => {
  const pokemon = await getData(url);
  const data = {
    id: pokemon.id,
    sprite: pokemon.sprites.front_default,
    name: pokemon.name,
    types: pokemon.types,
    stats: pokemon.stats,
    weight: pokemon.weight,
    moves: pokemon.moves.length
  }
  return data;
}

const getType = async (name) => {
  const type = await getData(`http://pokeapi.co/api/v2/type/${name}`);
  return type;
}

const addTypeToResults = async (results) => {
  for(let i = 0; i < results.length; i++) {
    const data = await getData(results[i].url);
    results[i].types = data.types;
  }
}

const getChunkOfPokemon = async () => {
  const data = await getData('http://pokeapi.co/api/v2/pokemon/?limit=12');

  await addTypeToResults(data.results);

  const res = {
    results: data.results,
    next: data.next
  }
  return res;
}

const getNext = async (url) => {
  const data = await getData(url);

  await addTypeToResults(data.results);

  const res = {
    results: data.results,
    next: data.next
  }
  return res;
}

export { getChunkOfPokemon, getPokemon, getNext, getType }