import { getAleatorio, getPokemon } from "./components/PokemonAleatorio";


function App() {
  
  function handleClick(e) {
    e.preventDefault();
    const id = getAleatorio(1, 152);
    getPokemon(id);
  }

  return (
    <>
      <div className="max-w-sm w-96 bg-white border border-gray-200 rounded-lg shadow-sm shadow-slate-400 dark:bg-gray-800 dark:border-gray-700">
        <div className="imagen-pokemon">
        </div>
        <div className="p-5">
          <p className="mb-2 titulo text-center uppercase text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lanza la bola y descubre el nuevo Pokemon
          </p>
          
          <div className="pokeInfo">
            <div className="mb-6 experiencia font-normal text-gray-700 dark:text-gray-400">
              Estás a punto de empezar el juego donde podrás observar las habilidades de tus Pokemon.
              ¡Lanza la bola y mira tu card!
            </div>
          </div>
          <a
            href="#"
            className="flex uppercase justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            onClick={handleClick}
          >
            Generar Pokemon
            <img className="ms-2 w-5" src="/poke.svg" alt="pokebola" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
