// Ejercicio
// Crea una función llamada reemplazar que reciba un arreglo y dos números. La función debe remplazar el primer elemento del arreglo por el primer número y el último elemento del arreglo por el segundo número.

// Ejemplo:

// reemplazar([1, 2, 3, 4, 5], 6, 7) // [6, 2, 3, 4, 7]
// reemplazar([8, 9, 10, 11, 12], 13, 14) // [13, 9, 10, 11, 14]
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	{ "stdin1":[4,2,7,9,8], "stdin2":1, "stdin3":2 }
// Test 2	{ "stdin1":[32,65,43,22,99], "stdin2":5, "stdin3":6 }




function reemplazar(arreglo, numeroUno, numeroDos){
    arreglo[0] = numeroUno
    arreglo[arreglo.length -1] = numeroDos
    return arreglo
}

console.log(reemplazar([4,2,7,9,8], 1, 2));
