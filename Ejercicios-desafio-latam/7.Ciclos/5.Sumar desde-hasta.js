// Ejercicio
// Crea una función llamada sumarDesdeHasta que reciba dos números como parámetros y retorne la suma de los números desde el primer número hasta el segundo número.

// Ejemplo
// sumarDesdeHasta(1, 5) // 15
// sumarDesdeHasta(10, 20) // 165
// sumarDesdeHasta(100, 200) // 15150
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	{"stdin1": 4,"stdin2":9}
// Test 2	{"stdin1": 2,"stdin2":5}
// Test 3	{"stdin1": 50,"stdin2":136}

function sumarDesdeHasta(desde, hasta) {
  let suma = 0;

  while (desde <= hasta) {
    suma = suma + desde;
    desde += 1;
  }
  return suma;
}

console.log(sumarDesdeHasta(1, 5));
console.log(sumarDesdeHasta(10, 20));
