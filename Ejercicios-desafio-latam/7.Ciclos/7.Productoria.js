// Ejercicio
// Crea una función llamada productoria que reciba un número como parámetro y retorne la productoria de los números del 1 al número ingresado.

// Por ejemplo, si el número ingresado es 5, la función debe retornar 120. Si el número ingresado es 10, la función debe retornar 3628800.

// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	9
// Test 2	12
// Test 3	7

function productoria(numero) {
  let i = 1;
  let productoria = 1;
  while (i <= numero) {
    productoria = productoria * i;
    i += 1;
  }
  return productoria;
}
console.log(productoria(5));
