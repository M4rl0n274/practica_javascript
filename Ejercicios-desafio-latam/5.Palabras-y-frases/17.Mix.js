// Ejercicio
// Crea una función llamada mix que tome 2 parámetros, mix  y palabra2, y que retorne una mezcla de ambas palabras en donde la mitad de la primera palabra se concatena con la segunda mitad de la segunda palabra.

// Para simplificar, asume que ambas palabras tienen una longitud par. El resultado de la mezcla debe ser una sola palabra en minúsculas.

// Ejemplo
// mezclaPalabras("soya", "aceite") // soite
// mezclaPalabras("hola", "granolas") // hololas
// mezclaPalabras("AGUA", "FUEGOS") // aggos
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	loro,gato
// Test 2	flor,VELA
// Test 3	TIERRA,cerros

function mix (mix, palabra2){
    let texto1 = mix.substring(0, mix.length /2);
    let largo = palabra2.length
    let texto2 = palabra2.substring(largo - largo /2) 
    return texto1.toLowerCase() + texto2.toLowerCase()
}


console.log(mix("loro","gato"));
console.log(mix("flor","VELA"));
console.log(mix("TIERRA","cerros"));

