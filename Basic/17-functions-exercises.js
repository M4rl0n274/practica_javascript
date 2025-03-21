// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

//* 1. Crea una función que reciba dos números y devuelva su suma

// function suma(a, b) {
//   return a + b;
// }
// console.log(suma(10, 20));

//* 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
// console.log("Ejercicio 2");

// let numeros = [10, 20, 30, 100, 200, 1000];

// let mayor;

// function mayorArray(numeros) {
//   for (let i = 0; i < numeros.length; i++) {
//     //console.log(numeros[i]);
//     for (let x = 1; x < numeros.length; x++) {
//       //console.log(numeros[x]);

//       if (numeros[i] > numeros[x]) {
//         console.log(`El numero ${numeros[i]} es mayor que ${numeros[x]}`);
//       }
//     }
//   }
// }
// console.log(mayorArray(numeros));

//* 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// let vocales = "aeiouAEIOU";
// let contador = 0;

// function countVocals(string) {
//   for (let i = 0; i < string.length; i++) {
//     if (vocales.includes(string[i])) {
//       contador++;
//     }
//   }
//   console.log(
//     `El numero de vocales para la palabra ${string} es de ${contador}`
//   );
// }
// countVocals("Marlon");

//* 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// let palabras = ["marlon", "desarrollador"];

// function arrayMayusculas(Array) {
//   let arregloEnMayusculas = [];
//   for (let i = 0; i < Array.length; i++) {
//     //arreglo.push(Array[i].tolowerCase()); // devuelve en mayusculas
//     arregloEnMayusculas.push(Array[i].toUpperCase()); // devuelve en mayusculas
//   }

//   console.log(arregloEnMayusculas);
// }

// arrayMayusculas(palabras);

//* 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// function primo(n) {
//   if (n < 2) return false

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false; // Si tiene un divisor, no es primo
//     }
//   }
//   return true; // Si no tuvo divisores, es primo

// }
// console.log(primo(3))

//* 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// let numerosOne = [1, 2, 3, 4, 5, 10];
// let numerosTwo = [10, 2, 4, 10, 5, 1];

// function dosArrays(arr1, arr2) {
//   let numerosNuevos = [];
//   for (let i = 0; i < arr1.length; i++) {
//     //console.log(`arreglo one ${numerosOne[i]} arreglo two ${numerosTwo[i]}`);
//     if (arr2.includes(arr1[i])) {
//       numerosNuevos.push(arr1[i]);
//     }
//   }
//   return numerosNuevos;
// }

// console.log(dosArrays(numerosOne, numerosTwo));

//* 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// let numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function pares(arrpar) {
//   let sumaPar = 0;
//   for (let i = 0; i < arrpar.length; i++) {
//     if (arrpar[i] % 2 == 0) {
//       sumaPar += arrpar[i];
//     }
//   }
//   return sumaPar;
// }

// console.log(pares(numerosPares));

// let num = 2;
// let num2 = 3;

// if ( num  % 2 ==0 ){
//   console.log("par ");

// }

//* 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// let elevados = [2, 10, 200, 100];

// function numerosElevados(arrElevado) {
//   potencia = [];
//   resultado = 0;
//   for (let i = 0; i < arrElevado.length; i++) {
//     resultado = arrElevado[i] **2;
//     potencia.push(resultado);
//   }
//   return potencia;
// }
// console.log(numerosElevados(elevados));

//* 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// let texto = "Que dice la banda"

// function invertir (textoInvertir){
//   let inverso = "";
//   for ( let x = textoInvertir.length ; x >= 0  ; x --){
//     inverso += textoInvertir[x]
//   }
//   return inverso
// }

// console.log(invertir(texto));



//* 10. Crea una función que calcule el factorial de un número dado

let resultadoFactorial = 1; 

function factorial (numero){

  for ( let i = numero ; i >1; i --){
    resultadoFactorial *= i

  }

return resultadoFactorial
}

console.log(factorial(5));

