let myArray = [1, 2, 3, 4];

let person = {
  name: "Marlon",
  age: 20,
  alias: "Don Marlon",
};

let myValue = myArray[1];
console.log(myValue);

let myName = person.name;
console.log(myName);

// Desestructuración

// perimite extraer valores de arrays y objetos y asignarlo a variables

// Sintaxis en arraus

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;

console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);

// Sintaxis de arrays con valores por predeterminados

let [myValue5, myValue6, myValue7, myValue8, myValue9 = 0] = myArray;

console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);

// Ignorar elementos array

let [myValue10, , , myValue13] = myArray;

console.log(myValue10);
// console.log(myValue11);
// console.log(myValue12);
console.log(myValue13);

// Sixtaxis Objects

let { name, age, alias } = person;
console.log(name);
console.log(age);
console.log(alias);

// Sintaxis de object con valores por predeterminados

let { name2, age2, alias2, email = "marlon@gamil.com" } = person;
console.log(name2); // no existe
console.log(age2); // no existe
console.log(alias2); // no existe
console.log(email);

// Sintaxis object con nuevis nombres de variables

let { alias: alias3, name: name3, age: age3 } = person;
console.log(name3);
console.log(age3);
console.log(alias3);

// object anidados

let person3 = {
  name: "Marlon",
  age: 20,
  alis: "Don Marlon",
  walk: function () {
    console.log("La persona camina");
  },
  job: {
    name: "programador",
    exp: 0,
    work: function () {
      console.log(`La persona de ${this.exp} años de experiencia trabaja`);
    },
  },
};

let {
  name: name4,
  job: { name: jobname },
} = person3;
console.log(name4);
console.log(jobname);

//* Propagación (...)
//expande elementos d eun array u objeto a otros arrays y objetos

// sintaxis arrays

let myArray3 = [...myArray, 5, 6];
console.log(myArray3);

// Copia de arrays

let myArray2 = [...myArray]; 
console.log(myArray2);

// Combinación de arrays

let myArray4 = [...myArray,...myArray2, ...myArray3]
console.log(myArray4);


// sintaxis objects
let person4 = {...person, email: "marlon@gmail.com"}
console.log(person4);


//copia objects
let person5 = {...person}
console.log(person5);




