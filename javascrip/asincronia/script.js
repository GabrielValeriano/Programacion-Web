//setimeout()
//Recibe por parametros una funcion y un valor numerico en milisegundos

const button = document.getElementById("boton");

setTimeout(() => {
  button.addEventListener("click", () => {
    alert("fui presionado despues de 3 segundos");
  });
}, 3000);

//setInterval()
let contador = 0;
setInterval(() => {
  contador++;
  console.log("Contador", contador);
}, 1000);

//asincronia
// metodos para consumir una api
// get , post, put, delete

// fetch
// lo vamos a utilizar para conectarnos/ consumir una api
// fetch (url, opciones)
// opciones es un opcional para pasar un objeto que le diga que tipo
// de metodo utiliza, encabezado, cuerpo, etc

const array = await fetch("https://rickandmortyapi.com/")
  .then((data) => data.json())
  .then((response) => console.log(response, results));

async function getCharacters() {
  try {
    const array = await fetch("https://rickandmortyapi.com/");
    const data = await responde.json();

    data.results.map((item) => {
      console.log(item);
    });
  } catch (error) {
    console.log(error);
  }
}
getCharacters();
