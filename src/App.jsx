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

  return (
    <>
      <div className="max-w-sm w-96 bg-white border border-gray-200 rounded-lg shadow-sm shadow-slate-400 dark:bg-gray-800 dark:border-gray-700">
        <div className="imagen-pokemon">
        </div>
        <div className="p-5">
          <p className="mb-2 titulo text-center uppercase text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </p>
          
          <div className="pokeInfo">
            <div className="mb-6 experiencia font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </div>
          </div>
          <a
            href="#"
            className="flex uppercase justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            onClick={handleClick}
          >
            Generar Pokemon
            <img className="ms-2 w-5" src="../public/poke.svg" alt="pokebola" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
