// Ejercicio
// Crea una función llamada aMayusculas que reciba dos parámetros, texto1 y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2 en mayúsculas, sin espacios adicionales entre ambos textos.

// Ejemplo:

// aMayusculas("hola", "mundo") // HOLAMUNDO
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	hola,mundo
// Test 2	cat,dog
// Test 3	King,Kong

function aMayusculas(texto1, texto2) {
  return texto1.toUpperCase() + texto2.toUpperCase();
}
console.log(aMayusculas("hola", "mundo"));
console.log(aMayusculas("cat", "dog"));
console.log(aMayusculas("king", "kong"));
