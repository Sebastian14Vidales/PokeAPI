function getAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos);

}

export {
    getAleatorio,
    getPokemon
}

