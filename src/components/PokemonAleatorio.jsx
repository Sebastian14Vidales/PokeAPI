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
  const divImagen = document.querySelector(".imagen-pokemon");
  limpiarHTML(divImagen);

  const { sprites, name, base_experience, stats, id } = datos;
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

  const imagen = document.createElement("img");
  const titulo = document.querySelector(".titulo");
  
  const experiencia = document.querySelector(".experiencia"); 

  divImagen.classList.add('relative', 'bg-gray-300', 'rounded-t-lg', 'h-44', 'mx-0')
  imagen.src = `${pokemon.imgCvg}`;
  imagen.alt = `Imagen ${pokemon.nombre}`;
  imagen.classList.add('rounded-full','border','border-2', 'bg-white', 'absolute', 'top-0', 'left-16', 'mt-6', 'my-0', 'mx-auto', 'bg-cover', 'bg-center', 'w-60', 'h-60');
  titulo.classList.add('mt-24');
  titulo.innerHTML = `
    ${pokemon.nombre}
    <span class="text-gray-400 text-base">${pokemon.hp}hp</span>
    <h2 class="text-lg text-blue-700">${pokemon.experiencia} <span class="text-sm">exp</span> </h2>
    `;
  divImagen.appendChild(imagen);

  experiencia.classList.add('flex', 'justify-between', 'py-4', 'border-t', 'border-gray-200')
  experiencia.innerHTML = `
    <h2 class="uppercase font-bold text-center text-blue-700">Ataque <br><span class="text-gray-400">${pokemon.ataque}K</span></h2> 
    <h2 class="uppercase font-bold text-center text-blue-700">Defensa <br><span class="text-gray-400">${pokemon.defensa}K</span></h2> 
    <h2 class="uppercase font-bold text-center text-blue-700">Especial <br><span class="text-gray-400">${pokemon.especial}K</span></h2> 
    
  `;
 
}

function limpiarHTML(divImagen) {
  while (divImagen.firstChild) {
    divImagen.removeChild(divImagen.firstChild);
  }
}

export { getAleatorio, getPokemon };
