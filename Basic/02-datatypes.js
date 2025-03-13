//* Tipos de datos primitivos

// cadena de texto String
let myName = "Marlon Quintero";
let alias = 'Marlon';
let email = 'marlon@correo.com';

// Numeros (number)
let age= 20; // entero 
let height = 1.84; // decimal

// Booleanos (boolean) 
let isStudent = true;
let isTeacher = false;

// undefined
let undefinedValue;
    //Declarada pero no inicializada
console.log(undefinedValue);

// Null
    // Declarar asignando el Null
let nullValue = null;

// Symbol 
    // valores unicos e inmutable (Para identificadores unicos)
let mySymbol = Symbol("mysymbol")

// Bigint
let myBigint = BigInt(19999999999999999999999999999999999999999)
let myBigint2 = 19999999999999999999999999999999999999999n;

// Mostramos los tipos de datos 

console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);

console.log(typeof age);
console.log(typeof height);

console.log(typeof isStudent);
console.log(typeof isTeacher);

console.log(typeof undefinedValue);

console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigint);
console.log(typeof myBigint2);





