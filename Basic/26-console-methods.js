// Console

// log

console.log("Hola, Javascript!");

// error

console.error("Este es un error")
console.error("Error en la base de datos" , new Error("Conexion fallida"))

// warn
console.warn("este es un mensaje de advertencia")

// info
console.info("Este es un mensaje de informacion adicional ")

// table

let data= [
    ["Marlon", 20,],
    ["Marlon 2", 20]
    
]

console.table(data)

data= [
    {name: "Marlon",age: 20,},
    {name: "Marlon 2",age: 20}
    
]
console.table(data)

// group 

console.group("Usuario")
console.log("Nombre: Marlon");
console.log("Edad: 20");
console.groupEnd()

console.log("adasds");

// time 
console.time("Tiempo de ejecución 1")

for (let i =0; i < 10000; i ++){
} 
console.time("Tiempo de ejecución 2")

for (let i =0; i < 10000; i ++){
} 

console.timeEnd("Tiempo de ejecución 2")

for (let i =0; i < 10000; i ++){
} 
console.timeEnd("Tiempo de ejecución 1")

// assert
let age = 17;
console.assert(age >=18, "El usuario debe ser mayor de edad");

//  count

console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click")
console.count("Click");

// trace
function funA(){
    funB()
}

function funB(){
    console.trace ("Seguimiento de la ejecución")

}
funA()

// clear

//console.clear()