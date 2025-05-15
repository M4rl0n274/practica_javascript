// Ejercicio
// Se pide crear una función textoLargoCorto que reciba un parámetro llamado texto. La función debe retornar "Mucho texto" si el texto tiene más de 10 caracteres. En caso contrario debe retornar "Poco texto".

// Ejemplo:

// textoLargoCorto("Hola Mundo") // Poco texto
// textoLargoCorto("Hola Mundo, Hola Mundo") // Mucho texto
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	Soy un gato
// Test 2	Hola
// Test 3	Esto es una prueba

function textoLargoCorto(texto) {
  if (texto.length > 10) {
    return "Mucho texto";
  } else {
    return "Poco texto";
  }
}

console.log(textoLargoCorto("Soy un gato"));
console.log(textoLargoCorto("Hola"));
console.log(textoLargoCorto("Esto es una prueba"));
