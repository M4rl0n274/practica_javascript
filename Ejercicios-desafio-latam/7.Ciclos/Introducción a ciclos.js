// Ejercicio
// Crea una función llamada contarHasta que reciba un número como parámetro y que muestre en consola los números del 1 al número ingresado.

// Ejemplo
// contarHasta(5)
// 1
// 2
// 3
// 4
// 5
// ContarHasta(10)
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// La función no debe retornar valor alguno, utiliza console log para mostrar los números. Nosotros llamaremos a la función con valores predeterminados.


function contarHasta (numero){
    let i = 1
    while (i <= numero){
        console.log(i);
        
       i +=1
    }
}


contarHasta(10)