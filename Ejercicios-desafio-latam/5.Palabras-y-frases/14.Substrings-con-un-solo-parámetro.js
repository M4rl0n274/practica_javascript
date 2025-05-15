// Ejercicio
// Crea una función llamada exceptoLosPrimeros que reciba dos parámetros: texto y cantidad. La función debe retornar el texto sin los primeros caracteres, donde la cantidad de caracteres a omitir es el segundo parámetro.

// Ejemplo:

// exceptoLosPrimeros("Hola Mundo", 5) // Mundo
// exceptoLosPrimeros("Hola Mundo", 2) // la Mundo
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	Hola Mundo,6
// Test 2	Programación en Javascript,8
// Test 3	Tutoriales,3
 
function exceptoLosPrimeros  (texto,  cantidad){
    return texto.substring(cantidad)
}

console.log(exceptoLosPrimeros("Hola Mundo",6));
console.log(exceptoLosPrimeros("Programación en Javascript",8));
console.log(exceptoLosPrimeros("Tutoriales",3));
