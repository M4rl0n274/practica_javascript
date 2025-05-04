import {
  saludo,
  nombre,
  persona,
  Computador,
  Cliente,
} from "./31-modules-exercises.js";

//* 1.exporta una función
console.log(saludo("Marlon"));

//* 2. Exporta una constante

console.log(nombre);

//* 3. Exporta una clase

let persona1 = new persona("Marlon", 20, "Don Marlon");
console.log(persona1);

//* 4. Importa una función

console.log(Computador("Marlon"));

//* 5. Importa una constante

console.log(Cliente);
