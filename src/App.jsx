import { useState } from "react";
import { getAleatorio, getPokemon } from "./components/PokemonAleatorio";

function App() {

  
  const [poke, setPoke] = useState(0);

  function handleClick(e) {
    const id = getAleatorio(1, 152);
    setPoke(id);
    console.log(`Obtuvo el valor de: ${id}`);
    getPokemon(id);
  }

  // const pokemon = {
  //   img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`,
  //   imgJuego: poke.sprites.front_default,
  //   imgCvg: poke.sprites.other.dream_world.front_default,
  //   nombre: poke.name,
  //   experiencia: poke.base_experience,
  //   hp: poke.stats[0].base_stat,
  //   ataque: poke.stats[1].base_stat,
  //   defensa: poke.stats[2].base_stat,
  //   especial: poke.stats[3].base_stat,
  // };
  
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src=""
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleClick}
          >
            Generar Pokemon
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
