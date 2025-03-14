// 1. Crea un array que almacene cinco animales

let animals = ["Raton", "Elefante", "Perro" , "gato", "Gaviota"]

console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final

// al principio

animals.unshift("Perico")
// al final
animals.push("Jirafa")
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición

animals.splice(3,0,)
console.log(animals);

// 4. Crea un set que almacene cinco libros
console.log("Set de libros");

let books = new Set (["El Resplandor", "Cementerio de Animales", "El Señor de los Anillos", "Doctor Sueño", "Misery"])
console.log(books);

// 5. Añade dos más. Uno de ellos repetido

books.add( "Soy el Número 4")
books.add("El Hobbit")
books.add("El Hobbit")
console.log(books);

// 6. Elimina uno concreto a tu elección

books.delete("El Resplandor")
console.log(books);

// 7. Crea un mapa que asocie el número del mes a su nombre

month = new Map ([
    ["0", "Enero"],
    ["1", "Febrero"],
    ["2", "Marzo"],
    ["3", "Abril"],
    ["4", "Mayo"],
    ["5", "Junio"],
    ["6", "Julio"],
    ["7", "Agosto"],
    ["8", "Septiembre"],
    ["9", "Octubre"],
    ["10", "Noviembre"],
    ["11", "Diciembre"]
])
console.log(month);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(month.has("5"));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let summer = ["Junio", "Julio", "Agosto"]

month.set("summer", summer)

console.log(month);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let transformation = ["valor_1", "valor_2", "valor_3"]

traSet = new Set(transformation)

console.log(traSet);

// map con el array trnaformado a set
month.set("Transformation", traSet)
console.log(month);
