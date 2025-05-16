// Ejercicio
// Crea una función llamada izqDerecha que reciba un parámetro llamado arreglo y otro llamado num.

// Si num es menor que 100, el valor se ingresará por la derecha del arreglo, como normalmente se ingresan todos los valores.
// Si el valor es mayor o igual a 100, el valor se ingresará por la izquierda del arreglo.
// La función debe retornar el arreglo modificado.

// Ejemplo:

// izqDerecha([1,2,3,4], 5) // [1,2,3,4,5]
// izqDerecha([1,2,3,4], 100) // [100,1,2,3,4]
// izqDerecha([1,2,3,4], 101) // [101,1,2,3,4]
// Tip:

// La idea del ejercicio es utilizar el método rotaALaIzquierda que creaste previamente. En JavaScript, existe un método para agregar un elemento al inicio de un arreglo, el cual se llama unshift. Sin embargo, la idea de este ejericicio es utilizar distintas funciones que vayamos creando para lograr resultados.

// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	{ "stdin1":[4,2,7,9,8], "stdin2":1 }
// Test 2	{ "stdin1":[32,65,43,22,99], "stdin2":100 }
// Test 3	{ "stdin1":[32,65,43,22,99], "stdin2":200 }

function izqDerecha(arreglo, num) {
  if (num < 100) {
    arreglo.push(num);
  } else if (num >= 100) {
    dato = [num];
    arr = dato.concat(arreglo);
    return arr;
  }
  return arreglo;
}

console.log(izqDerecha([4, 2, 7, 9, 8], 1));
console.log(izqDerecha([32, 65, 43, 22, 99], 100));
console.log(izqDerecha([1, 2, 3, 4], 101));
