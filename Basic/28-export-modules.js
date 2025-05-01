// Exportación de modulos

export function add(a, b) {
  return a + b;
}

console.log(add(5, 10));

// Propiedades

export const PI = 3.1416;
export let name = "Marlon";

// Clases

export class Circle {
    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter(){
        return 2 * Math.PI * this.radius 
    }
}


// Exportación poe defecto
    //? el default solo es para exportar una sola cosa
        //? si hay dos default da error
export default function substract(a, b) {
  return a - b;
}
//? solo se puede exportar por defecto de funxiones, clases y constantes

//* Exportación de clase
// export default class Myclass{

//     func (){
//         console.log("Mi clase");
        
//     }

// }
