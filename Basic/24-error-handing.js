// Excepción

//Produce excepción
// let myObject
// console.log(myObject.email);

// try-catch

try {
  //Código que intenta ejecutar
  console.log(myObject.email);
  console.log("Finaliza la ejecucion sin errores");
} catch {
  // Bloque de error
  console.log("se ha producico un error");
}

// caotura de error

try {
  console.log(myObject.email);
} catch (error) {
  console.log("se ha producico un error", error.message);
}

// finally

try {
  console.log(myObject.email);
} catch (error) {
  console.log("se ha producico un error", error.message);
} finally {
  console.log("Este codigo se ejecuta siemrpre");
}

// no esta soportado

// try{
//     console.log(myObject.email);
// }catch (error){
//     console.log("se ha producico un error", error.message);
// } finally{
//     console.log("Este codigo se ejecuta siemrpre");
// }

// Lanzar errores

// throw

//throw new Error("se ha producido un error");

// Crear excepciones personalizadas
class sumZeroIntegerError extends Error{
    constructor (message,a,b){
        super(message)
        this.a = a
        this.b = b
    }
    printNumbers(){
        console.log(this.a, " + ", this.b );
        
    }
}



function sumIntegers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operación solo acepta números enteros");
  }

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operación solo suma números enteros");
  }
  if (a ==0 || b == 0){
    throw new sumZeroIntegerError ("se esta intentando sumar cero", a , b)
  }
  return a + b;
}

try {
  console.log(sumIntegers(5, 10));
  //   console.log(sumIntegers(5.5, 10));
  console.log(sumIntegers("5", 10));
  //   console.log(sumIntegers(5, "10"));
  //   console.log(sumIntegers("5", "10"));
} catch (error) {
  console.log("Se ha producido un error", error.message);
}

// capturar varios tipos de errores
try {
    //   console.log(sumIntegers(5, 10));
    console.log(sumIntegers(0, 10));
} catch (error) {
    
    console.log("Se ha producido un error", error.message);
    error.printNumbers()
    

}




