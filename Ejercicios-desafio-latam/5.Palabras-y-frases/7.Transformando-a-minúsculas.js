// Ejercicio
// Crea una función llamada aMinusculasPrimero que reciba dos parámetros, texto1 y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2, en donde texto1 esté transformado a minúsculas y texto2 se mantenga sin transformación.

// Ejemplo:

// aMinusculasPrimero("HOLA", "MUNDO") // holaMUNDO
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	HOLA,MUNDO
// Test 2	CAT,dog
// Test 3	King,KONG

function aMinusculasPrimero(texto1, texto2) {
  return texto1.toLowerCase() + texto2;
}

console.log(aMinusculasPrimero("HOLA", "MUNDO"));
console.log(aMinusculasPrimero("CAT", "DOG"));
console.log(aMinusculasPrimero("KING", "KONG"));
