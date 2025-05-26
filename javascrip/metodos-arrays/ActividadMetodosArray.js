//Crear 4 productos como objetos (con nombre, precio, categoria)
// y agregarlos al array con .push().

const inventario = [];

inventario.push({ nombre: "Espada", oro: 150, categoria: "Epica" });
inventario.push({ nombre: "Escudo", oro: 50, categoria: "Normal" });
inventario.push({ nombre: "Casco", oro: 200, categoria: "Especial" });
inventario.push({ nombre: "Lanza", oro: 250, categoria: "Legendario" });

console.log(inventario);

//Mostrar en consola todos los productos con forEach.

inventario.forEach((item, index) => console.log(item, index));

//Filtrar los productos que pertenezcan a la categoría "Legendario" y mostrarlos.

const cat = inventario.filter((n) => n.categoria === "Legendario");

console.log("Producto con categoria Legendaria", cat);

//Crear un nuevo array con solo los nombres de los productos, y mostrarlo en consola.

const num = inventario.map((item) => item.nombre);

console.log("nombres de los productos", num);

//Agregá 3 películas al array. Cada película debe tener: título, director, año y género.

const películas = [];

películas.push({
  titulo: "Jhon Wick",
  director: "Chad Stahelski",
  año: 2014,
  genero: "Accion",
});
películas.push({
  titulo: "Guerra Mundial Z",
  director: "Marc Forster",
  año: 2013,
  genero: "Accion",
});
películas.push({
  titulo: "La Teoria Del Todo",
  director: "James Marsh",
  año: 2014,
  genero: "Drama Biografico",
});

console.log(películas);

//Agregá una película al inicio del array.

películas.unshift({
  titulo: "Blade Runner 2049",
  director: "Denis Villeneuve",
  año: 2017,
  genero: "Ciencia Ficción ",
});

console.log(películas);

//Eliminá la primera película del array y guardala en una variable.

const primero = películas.shift();
console.log("Primera Pelicula", primero);

console.log(películas);

//Mostrá cuántas películas hay actualmente en el array.

const peliculasAct = películas.map((n) => n.titulo);

console.log("Actualmente estan estas peliculas", peliculasAct);
