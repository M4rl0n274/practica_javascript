// Ejercicio
// Crea una función llamada transformacionCondicional que reciba el parámetro frase. 
//* La función debe retornar el texto en mayúscula si comienza con la letra a y todo mínuscula si comienza con cualquier otra letra.

// Para simplificar el ejercicio, asumiremos que el texto siempre tiene al menos 1 caracter y solo debe ser transformado a mayúsculas si empieza con la letra a minúscula.

// Ejemplo:

// transformacionCondicional("amo") // AMO
// transformacionCondicional("Amo") // amo
// transformacionCondicional("Programar") // programar
// transformacionCondicional("PROGRAMAR") // programar
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	Gato
// Test 2	arbol
// Test 3	Ana


function transformacionCondicional (frase){
    if (  frase.substring(0,1) == "a"){
        return frase.toUpperCase() 
    }else{
        return frase.toLowerCase()
    }
}
console.log(transformacionCondicional("Gato"));
console.log(transformacionCondicional("arbol"));
console.log(transformacionCondicional("Ana"));


