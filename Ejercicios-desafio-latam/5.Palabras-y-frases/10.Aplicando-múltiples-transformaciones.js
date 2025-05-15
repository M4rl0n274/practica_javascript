// Ejercicio
// Crea una función llamada limpiarYMayusculas que reciba dos parámetros, texto y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto y texto2 donde ambos textos estén en mayúsculas y limpios de espacios innecesarios al inicio y al final.

// Ejemplo:

// limpiarYMayusculas("   hola", "mundo   ") // HOLAMUNDO
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	hola, mundo
// Test 2	vaso ,agua
// Test 3	sal , pimienta



function limpiarYMayusculas(texto,texto2){
    return texto.trim().toUpperCase() + texto2.trim().toUpperCase() 
}




