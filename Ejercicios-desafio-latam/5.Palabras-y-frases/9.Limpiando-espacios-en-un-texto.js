// Ejercicio
// Crea una función llamada limpiarTexto que reciba dos parámetros, texto y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto y texto2 donde ambos textos estén limpios de espacios innecesarios al inicio y al final.

// Ejemplo:

// limpiarTexto("   hola", "mundo   ") // holamundo
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	hola, mundo
// Test 2	vaso , agua
// Test 3	sal , pimienta




function limpiarTexto(texto, texto2){
    return texto.trim() + texto2.trim()
}





