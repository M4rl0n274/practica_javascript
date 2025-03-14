// set

// Declaracion 

let mySet = new Set()


console.log(mySet);



// Inicialización 
mySet = new Set(["Marlon" ,  "Quintero","hola", 20, true, "marlon@gmail.com"])

console.log(mySet);

// Métodos comunes

// add y delete

mySet.add("https://marlon.com")  // añade al final 
console.log(mySet);


mySet.delete("https://marlon.com") // escribir el elemento que quiero borrar 

console.log(mySet);

console.log(mySet.delete("Marlon"));

console.log(mySet);

// has  
// comprobar si existe
console.log(mySet.has("Quintero"));
console.log(mySet.has("Marlon"));

// size
// tamaño
console.log(mySet.size);

// convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray);

// convertir un Array a Set

mySet = new Set(myArray)
console.log(mySet);

// Los Set No admite duplicados


mySet.add("marlon@gmail.com")
mySet.add("Marlon@gmail.com")
console.log(mySet);

