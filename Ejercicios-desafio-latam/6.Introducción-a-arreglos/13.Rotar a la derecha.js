// Ejercicio
// Para este ejercicio, crea una función llamada rotarALaDerecha que reciba un arreglo y retorne el arreglo rotado a la derecha.

// rotarALaDerecha([1,2,3,4]) // 4,1,2,3
// rotarALaDerecha(["Juan", "Pedro", "Ana", "Luis"]) // "Luis", "Juan", "Pedro", "Ana"



function rotarALaDerecha(arreglo){
    
    let elemento = arreglo[arreglo.length -1 ]
    arr = [elemento]
    arreglo.splice(arreglo.length -1, 1)
    let resultado= arr.concat(arreglo)
    return resultado
}


console.log(rotarALaDerecha([1,2,3,4]));





