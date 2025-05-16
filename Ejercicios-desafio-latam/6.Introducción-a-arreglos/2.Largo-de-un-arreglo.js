// Ejercicio
// Crea una función llamada largoArreglo que reciba un parámetro llamado nombres. La función debe retornar el texto "muchos" si hay más de 5 elementos en el arreglo, en caso contrario debe retornar "pocos".

// Ejemplo:

// largoArreglo(["Juan", "Pedro", "Ana", "Luis"]) // pocos
// largoArreglo(["Juan", "Pedro", "Ana", "Luis", "Carlos", "Maria"]) // muchos
// Casos de prueba
// Puedes revisar los argumentos que ejecutaremos para evaluar tu función:
// Test 1	[3,4,1,5]
// Test 2	["e","t","r"]
// Test 3	["ruby", "javascript", "python", "c", "c#", "java"]



function largoArreglo (nombres){
    if (nombres.length > 5){
        return "muchos"
    }else{
        return "pocos"
    }
}


