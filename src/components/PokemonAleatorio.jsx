function getAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    mostrarDatos(datos);
}

function mostrarDatos(datos) {
    const {sprites, name, base_experience, stats, id} = datos;
    const pokemon = {
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    imgJuego: sprites.front_default,
    imgCvg: sprites.other.dream_world.front_default,
    nombre: name,
    experiencia: base_experience,
    hp: stats[0].base_stat,
    ataque: stats[1].base_stat,
    defensa: stats[2].base_stat,
    especial: stats[3].base_stat,
  };

  const imagen = document.querySelector('.imagen-pokemon');
  const titulo = document.querySelector('.titulo');
//   const experiencia = document.querySelector('.experiencia');
  imagen.src = `${pokemon.img}`;
  imagen.alt = `Imagen ${name}`;
  titulo.textContent = `${name}`
//   experiencia.textContent = `${especial}`;
    console.log(imagen);
}

export {
    getAleatorio,
    getPokemon
}

