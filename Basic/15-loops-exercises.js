// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

//* 1. Crea un bucle que imprima los números del 1 al 20
// console.log("bucle numeros del 1 al 20 while");
// let x = 1
// while(x <=20){
//     console.log(`numero: ${x}`);
//     x++
// }
// console.log("bucle numeros del 1 al 20 For");

// for ( let x = 1; x <=20; x++ ){
//     console.log(`Numero: ${x}`);
// }

//* 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// let suma = 0;

// for (i = 1; i <= 100; i++) {
//   suma += i;

// }
// console.log("la suma de los numeros es: " + suma);

//* 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// for (let y = 0 ; y <=50; y++){
//     if( y %2 == 0 ){
//         console.log(y);
//     } else{
//         continue
//     }
// }

//* 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// let nombres = ["Marlon", "Jenaro", "Kaizer", "Rick"];

// for (let i = 0; i <= nombres.length; i++) {
//   console.log(` ${nombres[i]} `);
// }

//* 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// let palabra = "marlona";
// let vocales = "aeiouAEIOU";
// let contador = 0;

// for (let i = 0; i < palabra.length; i++) {
//   if (vocales.includes(palabra[i])) {
//     contador++;
//   }
// }
// console.log(`el numero de vocales de la palabra es: ${contador}`);

//* 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// let numeros = [1,5,10]
// let multiplicar = 1

// for (i = 0 ; i < numeros.length ; i++){
// multiplicar *= numeros[i]
// }

// console.log(` el resultado de la multiplicación es: ${multiplicar}`);

//* 7. Escribe un bucle que imprima la tabla de multiplicar del 5
// console.log("Tabla de multiplicar del 5:");

// for ( i = 0 ; i<=10; i++){
//     console.log(`5 X ${i} = ${5*i}`);
// }

// 8. Usa un bucle para invertir una cadena de texto

// let invertir = "murcielago"

// for ( let x = invertir.length ; x >= 0; x --){
//     console.log(invertir[x]);
// }

// let texto = "hola"
// let inver = ""

// for (let i = texto.length -1 ; i >=0 ; i--){
//   inver += texto[i]
// }
// console.log(inver);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// ! La secuencia de Fibonacci es una sucesión de números en la que cada número se obtiene sumando los dos anteriores, comenzando con 0 y 1.
//! 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

let a = 1;
let b = 0;
let temp;
// primeros 15 valores
for (let y = 0; y <= 14; y++) {
  //console.log(a);
  temp = a + b;
  a = b;
  b = temp;
  //console.log( "temp"+temp);
  console.log("calculo:  " + temp + " + " + a + " = " + a);
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numerosArray = [5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70];
let newArray = [];

for (let i = 0; i < numerosArray.length; i++) {
  if (numerosArray[i] <= 10) {
    continue;
  }
  newArray.push(numerosArray[i]);
}
console.log(newArray);
