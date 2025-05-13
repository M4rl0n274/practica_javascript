// Ejercicio
// Crea una función llamada transformar que reciba dos parámetros, texto1 y texto2. El primer parámetro debe ser transformado a mayúsculas y el segundo a minúsculas. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2 sin espacios adicionales entre ambos textos.

// Ejemplo:

// transformar("hola", "MUNDO") // HOLAmundo
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	hola,mundo
// Test 2	cat,Dog
// Test 3	KING,KONG


function transformar (texto1, texto2){
    return texto1.toUpperCase() + texto2.toLowerCase()

}

