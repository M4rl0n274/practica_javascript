let oneString = "soy una cadena de texto";
let twoString = "las cadenas de texto son interesantes"

// 1. Concatena dos cadenas de texto
console.log(oneString + twoString);

// 2. Muestra la longitud de una cadena de texto
console.log(oneString.length);

// 3. Muestra el primer y último carácter de un string
console.log(oneString[0]);
console.log(oneString[22]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(oneString.toUpperCase());
console.log(twoString.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let threeString = ` cadena de 
                    texto en varias lineas`

// 6. Interpola el valor de una variable en un string
console.log(`${oneString} y ${twoString}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(oneString.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(twoString.includes("cadenas"));

// 9. Comprueba si dos strings son iguales
console.log(oneString == twoString);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(oneString.length == twoString.length);
