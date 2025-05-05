//Crear una variable con un número
//Usar if para mostrar un mensaje si el número es mayor a 10.

const test = 73

if (test > 10){
    console.log("el numero es mayor a 10")
}
else {
    console.log("el numero es igual o menor a 10")
}

//Crear dos variables con números. Usar if para mostrar cuál número es mayor.

const test2 = 2
const test3 = 3

if (test3 > test2){
    console.log(`el numero ${test3} es mayor que ${test2}`)
}
else {
    console.log(`el numero ${test2} es mayor que ${test3}`)
}

//Usar while para mostrar en consola los numeros del 1 al 5.

let number = 5
let counter = 0

while(counter < number) {
    counter++;
    console.log(`el contador ${counter}`)
}

//Usar un while para sumar los números del 1 al 4. Mostrar la suma al final.

let num = 1+2+3+4
let sum = 0

while (num !== sum){
    sum++;
}

if (num == sum) {
   console.log(`la suma de los numeros del 1 al 4 es ${sum}`)
}

//Usar un for para imprimir en consola los números del 0 al 4.

for (let nume = 0; nume <= 4; nume++) {
    console.log(`Número: ${nume}`)
}

//Usar un for para sumar los números del 0 al 4. Mostrar el resultado al final.

let suma = 0

for (let nume = 0; nume <= 4; nume++) {
    suma+=nume
    console.log(`Número: ${suma}`)
}

