// Ejercicio
// Crea una función llamada juntarArreglos que reciba dos parámetros, arreglo1 y arreglo2, y retorne un nuevo arreglo con los elementos de ambos arreglos exlcuyendo el primer elemento de cada arreglo.

// juntarArreglos([1, 2, 3], [4, 5, 6]) // [2, 3, 5, 6]
// juntarArreglos(["hola", "mundo"], ["desde", "javascript"]) // ["mundo", "javascript"]
// Los arreglos siempre tendrán al menos 2 elementos.



function juntarArreglos (arreglo1,arreglo2){
    arreglo1.splice(0,1)
    arreglo2.splice(0,1)
    let arreglo3= arreglo1.concat(arreglo2)
    return arreglo3
}

console.log( juntarArreglos([1, 2, 3], [4, 5, 6]));




