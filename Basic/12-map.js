// Map
// una coleccion de elementos, cada elemento es formado por una clave y un valor

// Declaración

let myMap = new Map()
console.log(myMap);

// Inicialización

myMap = new Map ([
    ["name", "Marlon"],
    ["email", "marlon@gamil.com"],
    ["age", 20]
])

console.log(myMap);

// Métodos y propiedades 

// set
// actualizar o agregar
    // si la clave existe lo actualiza
myMap.set("alias", "Don_Marlon")
myMap.set("name", "Marliton") 
console.log(myMap);

// get
// recuperar el valor 
console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// has
// verifica si una clave existe 
console.log(myMap.has("surname"));
console.log(myMap.has("age"));

// delete

myMap.delete("email")
console.log(myMap);


// keys , values y entries
 // listado con las claves
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries()); // retorna todo


// size 
console.log(myMap.size);

// clear 

myMap.clear()
console.log(myMap);



