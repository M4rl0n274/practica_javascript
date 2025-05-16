// Ejercicio
// Crea una función que reciba 3 valores arr1, valor y arr2, donde arr1 y arr2 serán arreglos y valor un número, la función debe retornar un nuevo arreglo juntando los elementos de arr1, el valor y los elementos de arr2.

// Ejemplo:

// juntarElementos([1, 2, 3], 4, [5, 6, 7]) // [1, 2, 3, 4, 5, 6, 7]
// Tip: Puedes utilizar el método concat para juntar los arreglos.





function juntarElementos (arr1, valor , arr2){
    arr3 = [valor]
    arr4 = arr1.concat(arr3,arr2)
    return arr4
}

console.log(juntarElementos([1, 2, 3], 4, [5, 6, 7]));


