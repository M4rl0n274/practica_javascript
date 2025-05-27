// Ejercicio
// Crea una función llamada sumarDeDosEnDos que reciba dos parámetros, desde y hasta. La función debe retornar la suma de los números.

// Ejemplo
// sumarDeDosEnDos(5, 10) // 5 + 7 + 9 = 21
// sumarDeDosEnDos(10, 20) // 10 + 12 + 14 + 16 + 18 + 20 = 90
// sumarDeDosEnDos(3, 7) // 3 + 5 + 7 = 15
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	{"stdin1": 4, "stdin2": 9}
// Test 2	{"stdin1": 2, "stdin2": 5}
// Test 3	{"stdin1": 25, "stdin2": 67}

function sumarDeDosEnDos(desde, hasta) {
  let suma = 0;

  while (desde <= hasta) {
    suma = suma + desde;
    desde += 2;
  }
  return suma;
}
console.log(sumarDeDosEnDos(5,10));



