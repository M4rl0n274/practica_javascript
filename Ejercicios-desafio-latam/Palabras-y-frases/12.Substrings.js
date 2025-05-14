// Crea una función llamada primerosCaracteres que reciba un párametro texto y devuelva los primeros 3 caracteres del texto. Para simplificar, asumiremos que el texto siempre tiene al menos 3 caracteres.

// Ejemplo:

// primerosCaracteres("Hola Mundo") // Hol
// primerosCaracteres("JavaScript") // Jav
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	Hello
// Test 2	Lenguaje
// Test 3	Tutoriales


function primerosCaracteres (texto){
    return texto.substring(0,3)
}
console.log(primerosCaracteres("Hello"));
console.log(primerosCaracteres("Lenguaje"));
console.log(primerosCaracteres("Tutoriales"));









