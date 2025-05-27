// Ejercicio
// El siguiente es un ejercicio de intuición y lógica. Sí necesitaramos ahora crear un función que partiera desde un número distinto a 1, ¿Qué cambio harías en el codígo?

// Crea una función llamada desdeHasta que reciba 2 parámetros, desde y hasta. Muestra en consola todos los números entre medio. Por ejemplo:

// desdeHasta(5, 10)
// 5
// 6
// 7
// 8
// 9
// 10

function desdeHasta(desde, hasta) {

  while (desde <= hasta) {
    console.log(desde);
    desde += 1;
  }
}

desdeHasta(5, 10);
