// Ejercicio
// Crea una función llamada atencionAlCliente que reciba un número como parámetro:

// Si el número es 1, la función debe retornar el mensaje "Contactar a un vendedor".
// Si el número es 2, debe retornar "Esperar a ser atendido".
// Si el número es 3, debe retornar "Contactar a soporte".
// Para cualquier otro número, debe retornar "Opción inválida".
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	1
// Test 2	2
// Test 3	4
// Test 4	3

function atencionAlCliente(numero) {
  switch (numero) {
    case 1:
      return "Contactar a un vendedor";
      break;
    case 2:
      return "Esperar a ser atendido";
      break;
    case 3:
      return "Contactar a soporte";
      break;
    default:
      return "Opción inválida";
      break;
  }
}

console.log(atencionAlCliente(1));
console.log(atencionAlCliente(2));
console.log(atencionAlCliente(3));
console.log(atencionAlCliente(4));

//* switch-fechas

// Ejercicio
// Crea una función llamada diaDeHoy que permita obtener el nombre correspondiente al día de hoy. El día de la semana es un número del 0 al 6, donde 0 es Domingo, 1 es Lunes, 2 es Martes, 3 es Miércoles, 4 es Jueves, 5 es Viernes y 6 es Sábado.

// La función recibe un parámentro llamado día.
// Crea un bloque de switch para determinar a que nombre corresponde cada valor, por ejemplo, si dia = 0, entonces nombreDia = 'Domingo'
// Retorna la variable nombreDia
// Si valor es mayor a los entregados por la función fecha, devuelve "Valor inválido"
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	2
// Test 2	10
// Test 3	5

function diaDeHoy(día) {
  switch (día) {
    case 0:
      nombreDia = "Domingo";
      break;
    case 1:
      return (nombreDia = "Lunes");
      break;
    case 2:
      return (nombreDia = "Martes");
      break;
    case 3:
      return (nombreDia = "Jueves");
      break;
    case 5:
      return (nombreDia = "Viernes");
      break;
    case 6:
      return (nombreDia = "Sabado");
      break;
    default:
      return (nombreDia = "Valor inválido");
      break;
  }
}

console.log(diaDeHoy(2));
console.log(diaDeHoy(10));
console.log(diaDeHoy(5));
