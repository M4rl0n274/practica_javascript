// Ejercicio
// Crea una función llamada primerosCaracteresMayusculas que reciba un párametro texto y devuelva los 5 primeros caracteres del texto en mayúsculas. Para simplificar, asumiremos que el texto siempre tiene al menos 5 caracteres.

// Ejemplo

// primerosCaracteresMayusculas("Hola Mundo") // HOL
// primerosCaracteresMayusculas("JavaScript") // JAV
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	Bye bye
// Test 2	Tutoriales
// Test 3	Hola Mundo


function primerosCaracteresMayusculas (texto){
    return texto.substring(0,5).toUpperCase()
}


console.log(primerosCaracteresMayusculas("Bye bye"));
console.log(primerosCaracteresMayusculas("Tutoriales"));
console.log(primerosCaracteresMayusculas("Hola Mundo"));
