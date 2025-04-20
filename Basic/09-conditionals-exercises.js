// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Marlon Quintero";

if (myName == "Marlon Quintero") {
  console.log("Hola Marlon, Bienvenido");
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Marlon";
let password = "123456";

if (user == "Marlon" && password == "123456") {
  console.log("Usuario y contraseña correctos, ingresando...");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 10;

if (number > 0) {
  console.log("numero positivo");
} else if (number < 0) {
  console.log("numero negativo");
} else {
  console.log("el numero es cero");
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let person = 18;

if (person >= 18) {
  console.log("Puede votar");
} else {
  console.log(`Aun no puede votar le faltan ${18 - person} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let people = 20;
const State = people >= 18 ? "Adulto" : "Menor";
console.log("El individuo es: " + State);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1;

if (mes >= 0 == mes <= 3) {
  console.log("Estamos en invierno");
} else if (mes >= 4 && mes <= 5) {
  console.log("Estamos en primavera");
} else if (mes >= 6 && mes <= 8) {
  console.log("Estamos en Verano");
} else {
  console.log("Estamos en Otoño");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (
  mes == 0 ||
  mes == 2 ||
  mes == 4 ||
  mes == 6 ||
  mes == 7 ||
  mes == 9 ||
  mes == 11
) {
  console.log("El mes tiene 31 dias");
} else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
  console.log("Es mes tiene 30 dias");
} else {
  console.log("El mes tiene 28 dias");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let greeting = 1;

switch (greeting) {
  case 0:
    console.log("¡Hola! ¿Cómo estás?");
    break;
  case 1:
    console.log("Hello! How are you?");
    break;
  case 2:
    console.log("Bonjour ! Comment ça va ?");
    break;
  case 3:
    console.log("Ciao! Come stai?");
    break;
  default:
    console.log("Opcion no valida");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mesSwitch = 1;

switch (mesSwitch) {
  case 0:
  case 1:
  case 2:
  case 3:
    console.log("Estamos en invierno");
    break;
  case 4:
  case 5:
    console.log("Estamos en invierno");
    break;
  case 6:
  case 8:
    console.log("Estamos en invierno");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Estamos en invierno");
    break;
  default:
    console.log("opcion no valida");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let nameMonth;
switch (mesSwitch) {
  case 0:
    nameMonth = "Enero";
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
  case 1:
    nameMonth = "Febrero";
    console.log(`El mes ${nameMonth} tiene 28 dias`);
    break;
  case 2:
    nameMonth = "Marzo";
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
  case 3:
    nameMonth = "Abril";
    console.log(`El mes ${nameMonth} tiene 30 dias`);
    break;
  case 4:
    nameMonth = "Mayo";
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
  case 5:
    nameMonth = "Junio";
    console.log(`El mes ${nameMonth} tiene 30 dias`);
    break;
  case 6:
    nameMonth = "Julio";
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
  case 7:
    nameMonth = "Agosto";
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
  case 8:
    nameMonth = "Septiembre";
    console.log(`El mes ${nameMonth} tiene 30 dias`);
    break;
  case 8:
    nameMonth = "Octubre";
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
  case 8:
    nameMonth = "Noviembre";
    console.log(`El mes ${nameMonth} tiene 30 dias`);
    break;
  case 8:
    nameMonth = "Diciembre";
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
  default:
    console.log("Dato no valido");
}

const prompt = require("prompt-sync")();
//* Crea un programa que pida al usuario la cantidad de productos comprados. Dependiendo del número
//* ingresado, muestra en consola el porcentaje de descuento que se aplicará:
//* 1 a 4 productos: sin descuento
//* 5 a 9 productos: 10% de descuento
//* 10 o más productos: 20% de descuento

// let productos = Number(prompt("Ingrese la cantidad de productos comprados: "));

// if (productos >= 1 && productos <= 4) {
//   console.log("Sin descuento");
// } else if (productos >= 5 && productos <= 9) {
//   console.log("10% de descuento");
// } else if (productos >= 10) {
//   console.log("20% de descuento");
// } else {
//   console.log("Ingrese un valor númerico");
// }

//* Solicita al usuario su salario mensual. El programa debe determinar el porcentaje de impuesto a pagar según estos rangos:
//* Menos de $1,000,000: 0%
//* Entre $1,000,000 y $2,000,000: 10%
//* Más de $2,000,000: 20%
//* Muestra en consola el porcentaje de impuesto que debe pagar.

// let salarioMensual = Number(prompt("Ingrese su salario mensual: "));

// if (salarioMensual == 0) {
//   console.log("su salario no puede ser cero pesos");
// } else if (salarioMensual <= 1000000) {
//   console.log("No debe pagar impuestos");
// } else if (salarioMensual > 1000000 && salarioMensual <= 2000000) {
//   console.log("debe pagar 10% de impuestos");
// } else if (salarioMensual > 2000000) {
//   console.log("debe pagar 20% de impuestos");
// } else {
//   console.log("Ingreso un caracter invalido");
// }

//* Crea un programa que pida al usuario la hora de ingreso (en formato 24 horas, solo la hora,
//* por ejemplo: 14 para las 2 p.m.). Según la hora, muestra un mensaje que diga:
//* Antes de las 8:00 → “Llegaste temprano”
//* De 8:00 a 9:00 → “Llegaste a tiempo”
//* Después de las 9:00 → “Llegaste tarde”

// let horaIngreso = Number(prompt("¿Cual fue la hora de ingreso?: "));

// if (horaIngreso > 24 || horaIngreso < 1) {
//   console.log("ingrese una hora correcta en formato de 24 horas");
// } else if (horaIngreso < 8) {
//   console.log("Llegaste temprano");
// } else if (horaIngreso >= 8 && horaIngreso <= 9) {
//   console.log("Llegaste a tiempo");
// } else if (horaIngreso > 9) {
//   console.log("Llegaste tarde");
// } else {
//   console.log("Ingresa un caracter valido");
// }

//* Crea un programa en JavaScript que solicite al usuario (puedes simularlo con una variable) una calificación numérica entre 0 y 100 y que:
//* Use if-else if-else para determinar la siguiente evaluación:
//* 90 a 100 → "Excelente"
//* 80 a 89 → "Muy bien"
//* 70 a 79 → "Bien"
//* 60 a 69 → "Suficiente"
//* Menos de 60 → "Insuficiente"
//* Luego, usando un switch, dependiendo del texto de la evaluación, muestre una recomendación personalizada:
//* "Excelente" → "¡Sigue así, vas por excelente camino!"
//* "Muy bien" → "Muy buen trabajo, aún puedes mejorar un poco más."
//* "Bien" → "Vas bien, pero ponle un poco más de empeño."
//* "Suficiente" → "Estás cerca, pero necesitas reforzar tus conocimientos."
//* "Insuficiente" → "Es momento de repasar y pedir ayuda si la necesitas."

// let calificacion = Number(prompt("Ingrese su calificación (0 - 100): "));
// let resultado = "";

// if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 100) {

//   if (calificacion >= 90 && calificacion <= 100) {
//     resultado += "Excelente";
//   } else if (calificacion >= 80 && calificacion <= 89) {
//     resultado += "Muy Bien";
//   } else if (calificacion >= 70 && calificacion <= 79) {
//     resultado += "Bien";
//   } else if (calificacion >= 60 && calificacion <= 69) {
//     resultado += "Suficiente";
//   } else {
//     resultado += "Insuficiente";
//   }
// } else {
//   resultado = "error";
// }
// switch (resultado) {
//   case "Excelente":
//     console.log(resultado + " ¡Sigue así, vas por excelente camino!");
//     break;
//   case "Muy Bien":
//     console.log(
//       resultado + " Muy buen trabajo, aún puedes mejorar un poco más."
//     );
//     break;
//   case "Bien":
//     console.log(resultado + " Vas bien, pero ponle un poco más de empeño.");
//     break;
//   case "Suficiente":
//     console.log(
//       resultado + " Estás cerca, pero necesitas reforzar tus conocimientos."
//     );
//     break;
//   case "Insuficiente":
//     console.log(
//       resultado + " Es momento de repasar y pedir ayuda si la necesitas."
//     );
//     break;
//   case "error":
//     console.log("Dato ingresado invalido");
// }



