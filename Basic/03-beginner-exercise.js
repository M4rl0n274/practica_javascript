// 1. Escribe un conentario en una linea
// comentario en una linea

// 2. Escribe un conentario en varias lineas
/*
comentario 
en varias
lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let texto = "variable String";
let numero = 20;
let  numeroGrande = 12151312153151545121542154n;
let  booleano = true;
let  mySymbol = Symbol("symbolo")
let  nulo = null;
let  sinDefinir


// 4. Imprime por consola el valor de todas las variables

console.log(texto);
console.log(numero);
console.log(numeroGrande);
console.log(booleano);
console.log(nulo);
console.log(sinDefinir);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof(texto));
console.log(typeof(numero));
console.log(typeof(numeroGrande));
console.log(typeof(booleano));
console.log(typeof(nulo));
console.log(typeof(sinDefinir));

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
console.log("================== \n" 
    +"Variables modificadas por valores del mismo tipo \n" );
    
    texto = "Variable modificada"
    numero = 40
    numeroGrande = 98999999999999n
    booleano = false
    
    console.log(texto +"\n" 
        +numero  +"\n" 
        +numeroGrande +"\n" 
        +booleano +"\n" 
    );
    
    
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
console.log("================== \n" 
    +"Variables modificadas por valores de distinto tipo \n" );
    
texto = 90
numero = "numero a texto"
numeroGrande = 20
booleano = "hola"

console.log(texto +"\n" 
    +numero  +"\n" 
    +numeroGrande +"\n" 
    +booleano +"\n" 
);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
console.log("================== \n" 
    +"Variables constantes  \n" );


const texto3 = "variable String";
const numero3 = 20;
const numeroGrande3 = 12151312153151545121542154n;
const booleano3 = true;
const mySymbol3 = Symbol("symbolo")
const nulo3 = null;


console.log(texto3);
console.log(numero3);
console.log(numeroGrande3);
console.log(booleano3);
console.log(nulo3);


// 9. A continuación, modifica los valores de las constantes

// texto3 = "texto contante modificado"
// numero3 = 40
// numeroGrande3 = 98999999999999n
// booleano3 = false



// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse