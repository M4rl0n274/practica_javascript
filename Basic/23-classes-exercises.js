// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades

class Guitar {
  constructor(color, distortion) {
    this.color = color;
    this.distortion = distortion;
  }

  electric() {
    console.log("Rock and Roll!!");
  }

  static acoustic(){
    console.log("Flamenco!!!");
    
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función

let person = new Guitar("Red", "With distortion");
// impresion propiedades
console.log(person.color);
console.log(person.distortion);
// invocar función 
person.electric();

// 4. Añade un método estático a la primera clase
        //* se añade el metodo estatico => static()


// 5. Haz uso del método estático

Guitar.acoustic()

// 6. Crea una clase que haga uso de herencia


class Bass extends Guitar{
    numberStrings(){
        console.log("4 strings!!");
        
    }
}

let person3 = new Bass("black","bass with distortion")
// propiedades heredades de la clase principal
console.log(person3.color);
console.log(person3.distortion);
// metodo de la nueva clase bass
person3.numberStrings()

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Drumset extends Guitar{

    #colorDrumSet
    #drumSticks

    constructor(colorDrumSet, drumSticks,color, distortion ){
        super(color,distortion)
        this.#colorDrumSet = colorDrumSet
        this.#drumSticks = drumSticks
    }
    
    // 10. Sobrescribe un método de una clase que utilice herencia
    electric() {
        console.log("No, this is a Drum Set");
      }

    get colorDrumSet(){
        return this.#colorDrumSet
    }

    get drumSticks(){
        return this.#drumSticks
    }


    set drumSticks(newDrumSticks){
        this.#drumSticks = newDrumSticks
    }

}

person4 = new Drumset("Pink", "I have Them ");

// 9. Utiliza los get y set y muestra sus valores
console.log(person4.colorDrumSet);
console.log(person4.drumSticks);

person4.drumSticks = "I have"

console.log(person4.drumSticks);

person4.electric()





