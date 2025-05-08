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
