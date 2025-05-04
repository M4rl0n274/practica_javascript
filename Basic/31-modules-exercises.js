// 1. Exporta una función

export function saludo(nombre) {
  return `Hola ${nombre} desde el archivo modules exercises`;
}

// 2. Exporta una constante

export const nombre = "Marlon Constante";

// 3. Exporta una clase

export class persona {
  constructor(nombre, edad, apodo) {
    this.nombre = nombre;
    this.edad = edad;
    this.apodo = apodo;
  }
}

// 4. Importa una función
export function Computador(cliente) {
  return `El cliente ${cliente} compro una computadora`;
}

// 5. Importa una constante

export const Cliente = "constante importada";
// 6. Importa una clase

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
