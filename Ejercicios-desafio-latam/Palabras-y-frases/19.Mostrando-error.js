// Ejercicio
// Crea una función llamada primerosCaracteresMayusculas que reciba un párametro texto y devuelva los primeros 3 caracteres del texto en mayúsculas. Si el texto tiene menos de 3 caracteres, debe retornar el mensaje error

// Ejemplo:

// primerosCaracteresMayusculas("Hola Mundo") // HOL
// primerosCaracteresMayusculas("JavaScript") // JAV
// primerosCaracteresMayusculas("JS") // error
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	Soy un gato
// Test 2	Ho
// Test 3	Sol

function primerosCaracteresMayusculas (texto){
    if ( texto.length < 3){
        return "error"
    }else{
        return texto.substring(0,3).toUpperCase()
    }
}   
 
console.log(primerosCaracteresMayusculas("Soy un gato"));
console.log(primerosCaracteresMayusculas("Ho"));
console.log(primerosCaracteresMayusculas("Sol"));
