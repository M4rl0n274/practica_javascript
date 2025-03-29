// Clases

class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// Sintaxis

let person = new Person("Marlon", 20, "Don Marlon");
let person2 = new Person("Marlon2", 20, "Don Marlon2");

console.log(person);
console.log(person2);

console.log(typeof person);

// Valores por defecto 


class DefaultPerson {
    constructor(name = "sin nombre", age = 0, alias = "Sin alias") {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person3 = new DefaultPerson("Marlon", 20);

console.log(person3);

// Acceso a preopiedades

console.log(person3.alias);
console.log(person3["alias"]);

person3.alias = "Don Marlon 3"
console.log(person3.alias);

// Funciones (metodos) en clases


class PersonWithMethod {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    }

    walk(){
        console.log("La persona camina");
        
    }
}

let person4 = new PersonWithMethod("MArlon", 20, "Don Marlon4")
person4.walk()


// Propiedades privadas

class PrivatePerson {
    #bank
    constructor(name, age, alias, bank) {
        this.name = name;
        this.age = age;
        this.alias = alias;
        this.#bank = bank
    }
    pay(){
        this.bank
    }
}


let person5 = new PersonWithMethod("MArlon", 20, "Don Marlon5", "IMAR451235")

//! No podemos acceder
// console.log(person5.bank); // bank no es #bank 
// person5.bank = "New IMAR451235" 

console.log(person5);

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank
    
    constructor (name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias 
        this.#bank = bank
    }

    get name(){
        return this.#name
    }
    
    // get bank(){
    //     return this.#bank
    // }
    set bank(newBank){
        this.#bank = newBank
    }

}




person6 = new GetSetPerson ("Marlon", 20, "don Marlon", "12343543545")

console.log(person6);
console.log(person6.name);

person6.bank = "new 12343543545"
console.log(person6.bank);








