// array

// Declaracion

let myArray = []  
let myArray2 = new Array()  

console.log(myArray);
console.log(myArray2);

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray);
console.log(myArray2);


myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)

console.log(myArray);
console.log(myArray2);



myArray = ["Marlon" ,  "Quintero", 20, true]
myArray2 = new Array("Marlon" ,  "Quintero", 20, true)

console.log(myArray);
console.log(myArray2);


myArray2 = new Array(3)
myArray2[0] ="Marlon"
myArray2[1] ="Quintero"
myArray2[2] ="10 de 10"
myArray2[4] ="10 de 10"

console.log(myArray2);

myArray = []
myArray[0] ="Marlon"
myArray[1] ="Quintero"
myArray[2] ="10 de 10"

console.log(myArray);

// Métodos comunes

myArray = []

// push y pop

myArray.push("Marlon2") // añade incrementalmente
myArray.push("Quintero2")
myArray.push("XD")
myArray.push("20")

console.log(myArray);

console.log(myArray.pop());

myArray.pop() // elimina el ultimo elemento del array

console.log(myArray);

//* shift y unshift

console.log( myArray.shift()); // elimina el primer elemento del array
console.log(myArray);

myArray.unshift("Marlon Unshift") //agrega uno o mas elementos antes dle array
console.log(myArray);

//* Length

console.log(myArray.length);

//* clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray);

// Slice
myArray.push("Marlon" ,  "Quintero", 20, true)

let myNewArray = myArray.slice(1, 3)     // gera un nuevo array con el pedazo que yo quiero

console.log(myNewArray);

// splice

myArray.splice(1, 1)  // elimina un elemento de un indice en concreto
console.log(myArray);

myArray.push("Marlon" ,  "Quintero","hola", 20, true)
myArray.splice(1, 2 ,"Nueva entrada") 
console.log(myArray);

let arreglo = ["marlon", "Quintero", 20]

arreglo.push("21")
console.log(arreglo);

arreglo.pop()
console.log(arreglo);

arreglo.unshift("Unshift")
console.log(arreglo);

arreglo.shift()
console.log(arreglo);


