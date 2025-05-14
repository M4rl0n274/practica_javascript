// Crea una función llamada obtenerTLD que reciba un parámetro url. La función debe retornar los últimos 4 caracteres de la url.

// TLD (Top Level Domain) es la última parte de una url, por ejemplo en la url "https://www.google.com" el TLD es ".com". En algunos casos el TLD puede tener una cantidad de caracteres diferente a 4, pero para este ejercicio asumiremos que siempre tiene 4 caracteres y que la url siempre tiene al menos 4 caracteres.

// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	www.desafiolatam.com
// Test 2	https://es.wikipedia.org/wiki/.org
// Test 3	https://bethesda.net


function obtenerTLD (url){
    largo = url.length
    return url.substring(largo -4)
}

console.log(obtenerTLD("www.desafiolatam.com"));
console.log(obtenerTLD("https://es.wikipedia.org/wiki/.org"));
console.log(obtenerTLD("https://bethesda.net"));
