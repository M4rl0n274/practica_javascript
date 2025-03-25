// Objects

// Sintaxis

let person = {
  name: "Marlon",
  age: 20,
  alis: "Don Marlon",
};

// Acceso a propiedades

// Notación punto
console.log(person.name);

// Notación corchetes
console.log(person["name"]);

// Modificación de propiedades

person.name = "Marlon Quintero";
console.log(person.name);

console.log(typeof person.age);
person.age = "37";
console.log(person.age);
console.log(typeof person.age);

// Eliminación de propiedades

delete person.age;
console.log(person);

person.email = "marlon@gamil,com";
console.log(person);

person["age"] = 20;
console.log(person);

// Métodos (funciones)

let person2 = {
  name: "Marlon",
  age: 20,
  alis: "Don Marlon",
  walk: function () {
    console.log("La persona camina");
  },
};

person2.walk();

// Anidación de objetos

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

console.log(person3);

console.log(person3.name);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work();

// Igualdad de Objects

let person4 = {
  name: "Marlon Quintero",
  alis: "Don Marlon",
  email: "marlon@gmail.com",
  age: 20,
};

console.log(person == person4);
console.log(person === person4);

console.log(person.name == person4.name);

// Iteración

for (let key in person4) {
  console.log(key + ": " + person4[key]);
}


// Funciones como objects

function Person (name, age){ // Deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Marlon", 20)
console.log(person5);
console.log(person5.name);

console.log(typeof person5);
console.log(typeof person4);




