// Ejercicio
// Crea una función llamada borrarAlFinal que reciba un arreglo y retorne el arreglo sin el último elemento.

// borrarAlFinal(["Juan", "Pedro", "Ana", "Luis"]) // ["Juan", "Pedro", "Ana"]
// borrarAlFinal([1, 2, 3, 4, 5]) // [1, 2, 3, 4]
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	[1, 2, 3, 4, 5]
// Test 2	["tortuga", "conejo", "perro", "gato"]

function borrarAlFinal(arreglo) {
  arreglo.splice(arreglo.length - 1, 1);
  return arreglo;
}

console.log(borrarAlFinal([1, 2, 3, 4, 5]));
console.log(borrarAlFinal(["tortuga", "conejo", "perro", "gato"]));
