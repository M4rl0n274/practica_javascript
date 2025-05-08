// FizzBuzz es un problema clásico de programación que consiste en mostrar una lista de números cuando cumplen ciertas condiciones.

// En este ejercicio deberás crear la función fizzBuzz que depende de un parámetro numero. La función debe retornar:

// "Fizz" si el número es divisible por 3.
// "Buzz" si el número es divisible por 5
// FizzBuzz" si el número es divisible por 3 y 5.
// En caso de que el número no sea divisible por 3 o 5, debe devolver el mismo número.

// Test 1	9
// Test 2	25
// Test 3	15
// Test 4	4


function fizzBuzz(numero){
    if (numero %3 == 0 && numero %5 == 0){
        return "FizzBuzz"
    }else if (numero % 3 == 0){
        return "Fizz"
    }else if ( numero % 5 == 0){
        return "Buzz"
    }else{
        return numero
    }
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(25));
console.log(fizzBuzz(15));
console.log(fizzBuzz(4));
