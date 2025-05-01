// Importación modulos

import Myclass, { add, name, PI, Circle } from "./28-export-modules.js";

// el nombre d elas exportaciones por defecto puede ser cualquiera
import defaultImport from "./28-export-modules.js";

// funciones

console.log(add(5, 10));

// Propiedades

console.log(PI);
console.log(name);

// Clases

let circle = new Circle(10)
console.log(circle.radius);
console.log(circle.area().toFixed(2));
console.log(circle.perimeter().toFixed(2));

// Importación por defecto
console.log(defaultImport(5, 10));

// let myclass = new defaultImport()
// myclass.func()

// Proyecto modular
// como importar desde mis archivos
import {Myimport} from "./directory/File.js"



