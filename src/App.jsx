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
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded mt-6 mx-auto imagen-pokemon bg-cover bg-center"
          src=""
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 titulo uppercase text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>

          <p className="mb-3 experiencia font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="flex uppercase justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
