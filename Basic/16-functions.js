// Funciones

//* Simple

function myFunc() {
  console.log("Hola, función! ");
}

for (let i = 0; i < 5; i++) {
  myFunc();
}

//* Con parametros

function myFuncWithParams(name) {
  console.log(`¡Hola, ${name}!`);
}
myFuncWithParams("Marlon");
myFuncWithParams("Marlon2");

//* Funciones anónimas
// hay que asignarla a una constante o variable
const myFun2 = function (name) {
  console.log(`¡Hola, ${name}!`);
};

myFun2("Marlon Quintero, funcion anonima");

//* Arrow functions
// hay que asignarlas a una constante o variable
const myFunc3 = (name) => {
  console.log(`¡Hola, ${name}!`);
};

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`);

myFunc3("MArlon Arrow functions");
myFunc4("MArlon Arrow functions");

// Parámetros

function sum(a, b) {
  console.log(a + b);
}
sum(5, 10);
sum(5);
sum();

function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}

// Por defecto
defaultSum();
defaultSum(5);
defaultSum(5, 10);
defaultSum((b = 5));

// Retorno de valores

function mult(a, b) {
  return a * b;
}

console.log(mult(5, 10));
let resul = mult(5, 10);
console.log(resul);

// Funciones anidadas

function extern() {
  console.log("Funcion Externa");
  function intern() {
    console.log("Funcion interna");
  }
  intern();
}
extern();
// intern() Fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc4, "Funcion de orden superior");

// forEach
// no se pueden detener con continue y break y no pueden retornar un nuevo array o set

myArray = [1, 2, 3, 4];

mySet = new Set(["Marlon", "Quintero", "hola", 20, true, "marlon@gmail.com"]);

myMap = new Map([
  ["name", "Marlon"],
  ["email", "marlon@gamil.com"],
  ["age", 20],
]);

myArray.forEach(function (value) {
  console.log(value);
});

myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));
