// Ejercicio
// Crea una función llamada agregarSi que reciba un arreglo y un parámetro llamado nombre. La función debe agregar el nombre al arreglo si el largo del arreglo es menor a 5. La función debe retornar el arreglo.

// Ejemplo:

// agregarSi(["Juan", "Pedro", "Ana", "Luis"], "Maria") // ["Juan", "Pedro", "Ana", "Luis", "Maria"]
// agregarSi(["Juan", "Pedro", "Ana", "Luis", "Carlos", "Maria"], "Jose") // ["Juan", "Pedro", "Ana", "Luis", "Carlos", "Maria"]
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	{ "stdin1": ["perro", "gato", "delfin", "tortuga"], "stdin2":"caballo" }
// Test 2	{ "stdin1": ["Francisco", "Rene", "Gonzalo", "Consuelo"], "stdin2": "Javier" }
// Test 3	{ "stdin1": ["ruby", "javascript", "python", "c", "c#", "java"], "stdin2": "php" }


function agregarSi (arreglo,nombre){
    if( arreglo.length <5){
        arreglo.push(nombre)
    }
    return arreglo
}



console.log(agregarSi(["perro", "gato", "delfin", "tortuga"] , "caballo"));
