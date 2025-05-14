// Ejercicio
// Crea una función llamada largoTexto que reciba dos parámetros, texto y texto2. La función debe retornar la suma de los largos de texto y texto2.

// Ejemplo:

// largotexto("Hola", "Mundo") // 9
// largotexto("Passport", "1234567890") // 18
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	hola,mundo
// Test 2	dia,noche
// Test 3	javascript,sqlite


function largoTexto(texto, texto2){
    return texto.length + texto2.length
}

console.log(largoTexto("Hola", "Mundo"));





