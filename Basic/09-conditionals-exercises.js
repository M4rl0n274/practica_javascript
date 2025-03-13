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
switch(mesSwitch){
    case 0:
    nameMonth = "Enero"
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
    case 1:
    nameMonth = "Febrero"
    console.log(`El mes ${nameMonth} tiene 28 dias`);
    break;
    case 2:
    nameMonth = "Marzo"
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
    case 3:
    nameMonth = "Abril"
    console.log(`El mes ${nameMonth} tiene 30 dias`);
    break;
    case 4:
    nameMonth = "Mayo"
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
    case 5:
    nameMonth = "Junio"
    console.log(`El mes ${nameMonth} tiene 30 dias`);
    break;
    case 6:
    nameMonth = "Julio"
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
    case 7:
    nameMonth = "Agosto"
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
    case 8:
    nameMonth = "Septiembre"
    console.log(`El mes ${nameMonth} tiene 30 dias`);
    break;
    case 8:
    nameMonth = "Octubre"
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
    case 8:
    nameMonth = "Noviembre"
    console.log(`El mes ${nameMonth} tiene 30 dias`);
    break;
    case 8:
    nameMonth = "Diciembre"
    console.log(`El mes ${nameMonth} tiene 31 dias`);
    break;
    default:
        console.log("Dato no valido"); 
}





