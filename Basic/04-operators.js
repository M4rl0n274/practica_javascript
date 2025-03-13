// operadores

//operadores aritméticos
let a = 5
let b = 10

console.log(a + b ); //suma
console.log(a - b ); //resta
console.log(a * b ); //multiplicación
console.log(a / b ); //División

console.log(a % b ); //Modulo
console.log(a ** b ); // Exponente

a++ //incremento
console.log(a);

b-- // Decremento
console.log(b);

// Operadores de asignación

let myVariable = 2;
console.log(myVariable);
myVariable +=2
console.log(myVariable);

myVariable -=2
myVariable *=2
myVariable /=2
myVariable %=2
myVariable **=2

// Operadores de comparación 


console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 6); //igualdad por valor
console.log(a == "6"); // igualdad por valor 
console.log(a == a);
console.log(a === a); // Igualdad por identidad (por tipo y valor)
console.log(a === 6);
console.log(a === "6");

console.log(a != 6); // Distinto
console.log(a !== "6"); 

console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == '');
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null);
console.log(undefined === null);

// Truthy values (Valores verdaderos)
// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolena true

// Falsy values (valores falsos)

// 0
// 0n
// null 
// undefined
// Nan
// El boolean false
// cadenas de texto vacias


// Operadores lógicos
console.log("Operadores Lógicos");

// and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40);

// or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 || 15 > 20 || 30 > 40);


console.log(5 > 10 && 15 > 20 || 30 < 40);


// not (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));


// Operadores ternarios

const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo");


