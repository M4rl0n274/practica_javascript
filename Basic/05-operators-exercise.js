// 1. Crea una variable para cada operación aritmética

let x = 10;
let y = 20;
console.log("operacion aritmetica");
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log("Operadores de asignacion");
let variableAsignacion = 10;

variableAsignacion +=5;
console.log(variableAsignacion);

variableAsignacion -=5;
console.log(variableAsignacion);

variableAsignacion *=5;
console.log(variableAsignacion);

variableAsignacion /=5;
console.log(variableAsignacion);

variableAsignacion **=5;
console.log(variableAsignacion);


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Comparaciones verdaderas");

console.log(x < y);
console.log(x <= y);
console.log(21 > y);
console.log(21 != y);
console.log(y === y);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Comparaciones falsas");
console.log(y < x);
console.log(y <= x);
console.log(y > 21);
console.log(y != 20);
console.log(y === x);


// 5. Utiliza el operador lógico and

console.log("operador logico and");
console.log(1000 * 2 == 2000 && 2000 - 10 == 1990);
console.log("Hola" == "Hola2" && 40 == 40 );
console.log( 1 > 0 && 2 > 1);
console.log(50 / 5 == 10 && 1 + 1 == 2);
console.log(800 !== 801 && 20 > 10 && 20 / 2 == 10 );

// 6. Utiliza el operador lógico or
console.log("operador logico Or");
console.log("hola" == "hola" || 20 > 10);
console.log(1000 === "1000");
console.log(1000 !== "1000" || 2 ** 2 == 4);
console.log( 5**2 > 100 || 9000/9 > 1200 );
console.log(10 > 20 || 20 > 10 || 100 > 50);

// 7. Combina ambos operadores lógicos
console.log("operador logico And y Or combinados");
console.log(10 > 50 && 1000 < 200 || 50 > 10);
console.log(10 > 50 || 1000 < 200 && 50 > 10);

// 8. Añade alguna negación
console.log("Aladir negacion a la combinacion ");
console.log(!(10 > 50 && 1000 < 200 || 50 > 10));

// 9. Utiliza el operador ternario
console.log("Operador terniario");

const number = true;
number ? console.log("numero positivo"): console.log("Numero negativo");

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("Combinacion de operadores aritméticos, de comparáción y lógicas");

const a = 1;
const b = 2;

let operacion = a + b

operacion == 3 ? console.log("resultado correcto") : console.log("Resultado incorrecto");

operacion += 10;
console.log(operacion);


console.log(operacion > 12 && operacion < 14 +"" );

operacion ? console.log("Operacion validada"): console.log("Operacion incorrecta");






