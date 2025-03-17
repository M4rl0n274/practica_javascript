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

let suma = 0;

for (i = 1; i <= 100; i++) {
  suma += i;

  
}
console.log("la suma de los numeros es: " + suma);

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

let numeros = [1,5,10]
let multiplicar = 1

for (i = 0 ; i < numeros.length ; i++){
multiplicar *= numeros[i]
}

console.log(` el resultado de la multiplicación es: ${multiplicar}`);

//* 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("Tabla de multiplicar del 5:");

for ( i = 0 ; i<=10; i++){
    console.log(`5 X ${i} = ${5*i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let invertir = "murcielago"

for ( let i = 0 ; i <= invertir.length; i ++){
    console.log(i);
    
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
