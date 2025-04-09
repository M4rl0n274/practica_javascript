//* 1. Captura una excepción utilizando try-catch

// let computer = {
//   ssd: "1tb",
//   ram: "32gb",
//   fuentePoder: "500W",
// };

try {
  console.log(computer.hdd);
} catch {
  console.log("se produjo un error");
}

//* 2. Captura una excepción utilizando try-catch y finally
console.log("===Ejercicio 2===");

try {
  console.log(computer.cpu);
} catch (error) {
  console.log("Error en impresion", error.message);
} finally {
  console.log("El computador siempre tiene una cpu");
}

//* 3. Lanza una excepción genérica
console.log("===Ejercicio 3===");

function comprobacion(precio1, precio2) {
  if (precio1 > precio2) {
    throw new TypeError("No aplica el descuento ");
  }

  return precio1 + precio2;
}

console.log(comprobacion(100, 200));

//* 4. Crea una excepción personalizada
class soloTexto extends Error {
  constructor(message, nombre, apellido) {
    super(message);
    this.nombre = nombre;
    this.apellido = apellido;
  }
  mostrarError() {
    console.log(
      `Tipo de dato recibido: ${typeof this.nombre} y ${typeof this
        .apellido}. No es un texto válido.`
    );
  }
}

//* 5. Lanza una excepción personalizada
console.log("===Ejercicio 5===");

function usuario(nombre, apellido) {
  if (typeof nombre !== "string" || typeof apellido !== "string") {
    throw new soloTexto(
      "se estan ingresando datos diferentes a los solicitados",
      nombre,
      apellido
    );
  }

  if (nombre.length < 4 || apellido.length < 4) {
    throw new Error("nombre o apellido demasiado cortos ");
  }
  console.log("Nombre y apellido válidos:", nombre, apellido);
}

try {
  usuario(10, true);
} catch (error) {
  console.log("Se ha producido un error", error.message);
  if (error instanceof soloTexto) {
    error.mostrarError();
  }
}

//* 6. Lanza varias excepciones según una lógica definida
console.log("===Ejercicio 6===");

try {
  usuario("mar", "qui");
} catch (error) {
  console.log("se produjo un error", error.message);
}

try{
    usuario(100, 1.0)
}catch(error){
    console.log("se ha producido un error", error.message);
    error.mostrarError()
}

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
