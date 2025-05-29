// Ejercicio
// Crea una función llamada sumatoriaPares que reciba un número como parámetro y retorne la sumatoria de los números pares desde el 1 hasta el número ingresado.

// Ejemplo:

// sumatoriaPares(5) // 6
// sumatoriaPares(10) // 30
// sumatoriaPares(100) // 2550
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	9
// Test 2	12
// Test 3	25



function sumatoriaPares(numero){
    let suma = 0
    for (let x = 0; x <= numero; x +=2){
        suma += x
    }
    return suma
}

console.log(sumatoriaPares(5));
console.log(sumatoriaPares(10));
console.log(sumatoriaPares(100));
