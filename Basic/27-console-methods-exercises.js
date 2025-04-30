// 1. Crea un función que utilice error correctamente

function error() {
  if (10 > 55) {
    console.log("correcto");
  } else {
    console.error(
      "Ha habido un error con los numeros",
      new Error("Error en comparación")
    );
  }
}
error();

// 2. Crea una función que utilice warn correctamente

function warning() {
  console.warn("Advertencia con uso de función");
}
warning();

// 3. Crea una función que utilice info correctamente

function information() {
  console.info("Información desde una funcion");
}
information();
// 4. Utiliza table
let productos = [
  { nombre: "Manzana", precio: 15, categoria: "Comida" },
  { nombre: "Jugo", precio: 20, categoria: "Bebida" },
  { nombre: "Camisa", precio: 70, categoria: "Ropa" },
  { nombre: "Televisor", precio: 7000, categoria: "Electrodomesticos" },
  { nombre: "Portatil", precio: 9000, categoria: "frutas" },
];
console.table(productos);

// 5. Utiliza group
console.group("Titulo");
console.log("It");
console.log("El Resplandor");
console.log("Cementerio de animales");
console.groupEnd("Titulo");
console.log("Fuera del grupo");

// 6. Utiliza time

console.time("Tiempo");

for (let x = 0; x < 1000000; x++) {}

console.timeEnd("Tiempo");

// 7. Valida con assert si un número es positivo
let positivo = 0;
console.assert(positivo > 0, "No es positivo");

// 8. Utiliza count
console.count("llamar");
console.count("llamar");
console.count("llamar");
console.countReset("llamar");

console.count("llamar");
console.count("llamar");

console.count("llamar");


// 9. Utiliza trace


function llamar(){
    contestar
}

function contestar(){
    console.trace("Seguimiento llamada")
}

contestar()
// 10. Utiliza clear

//console.clear()