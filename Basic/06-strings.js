// Strings

// COncatenacionde cadenas

let myName = "Marlon"
let greeting = "Hola, " + myName + "!"

console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[1]);

// metodos comunes
console.log("MEtodos comunes");

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("Marlon"));
console.log(greeting.indexOf("Quintero"));
console.log(greeting.includes("Hola"));
console.log(greeting.includes("Marlon"));
console.log(greeting.includes("Quintero"));
console.log(greeting.slice(0 , 10));
console.log(greeting.replace("Marlon", "Kaizer"));
console.log(greeting.split(""));
console.log(greeting.split("").reverse("").join(""));


 

// Template literals (Plantillas literales)
console.log("PLANTILLAS LITERALES");

let message = `Hola, este es mi 
curso de javascript` 

console.log(message);

let email = "marlonquintero@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}.`);

let cadena = "Marlon Quintero"

console.log(cadena.split(""));
console.log(cadena.split("")[0]);

