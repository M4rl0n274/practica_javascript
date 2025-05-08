// Ejercicio
// Crea una función llamada verificarPuntaje que dependa de un parámetro puntaje. La función debe retornar "Califica para bono" si el puntaje es mayor que 90 o menor que 10. En caso contrario, la función debe retornar "No califica para bono".

// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	91
// Test 2	6
// Test 3	40

function verificarPuntaje(puntaje) {
  if (puntaje > 90 || puntaje < 10) {
    return "Califica para bono";
  } else {
    return "No califica para bono";
  }
}

console.log(verificarPuntaje(91));
console.log(verificarPuntaje(6));
console.log(verificarPuntaje(40));
