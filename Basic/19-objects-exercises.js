// 1. Crea un objeto con 3 propiedades

let computer = {
  cpu: "Ryzen 7 5700G",
  ram: 32,
  ssd: "512gb",
};

// 2. Accede y muestra su valor

console.log(computer);

// 3. Agrega una nueva propiedad

computer["hdd"] = "1tb";
console.log(computer);

// 4. Elimina una de las 3 primeras propiedades
delete computer.ssd && delete computer.hdd;
console.log(computer);

// 5. Agrega una función e invócala

computer["powerOn"] = function () {
  console.log("Esta encendida");
};

computer.powerOn();

// 6. Itera las propiedades del objeto

for (let key in computer) {
  console.log(key + ": " + computer[key]);
}

// 7. Crea un objeto anidado
console.log("7. Crea un objeto anidado");

let phone = {
  resolution: "1024x",
  storage: "256gb",
  ram: "8gb",
  camera: "50Mpx",
  batery: "8000mAh",
  user: {
    name: "Marlon",
    country: "Colombia",
    age: 20,
    usage: "8 hours",
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(phone.user);

// 9. Comprueba si los dos objetos creados son iguales

console.log(computer == phone);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(computer.cpu == phone.camera);

// Una plataforma educativa desea verificar si un usuario tiene acceso a cierto contenido según su edad y rol.
// Cada usuario está representado como un objeto con las siguientes propiedades:
// nombre: el nombre del usuario
// edad: edad en número
// rol: puede ser "estudiante", "docente" o "administrador"
// Tu tarea es:
// Crear un objeto con la información de un usuario.
// Usar condicionales (if, else if, else) para determinar el tipo de acceso:
// Si es estudiante y tiene menos de 18 años, solo puede acceder a contenido básico.
// Si es docente y tiene más de 21 años, puede acceder a contenido avanzado.
// Si es administrador, tiene acceso total sin importar su edad.
// En cualquier otro caso, mostrar un mensaje de acceso restringido.
// 🖨️ Resultado esperado: Mostrar en consola un mensaje como:
// "Hola, Juan. Tienes acceso a contenido básico."
// o
// "Hola, Laura. Tienes acceso total como administradora."
console.log("====Ejercicio de repaso objetos====");

let usuarios = [
  {
    nombre: "Marlon",
    edad: 15,
    rol: "estudiante",
  },
  {
    nombre: "Pedro",
    edad: 28,
    rol: "docente",
  },
  {
    nombre: "admin",
    edad: 30,
    rol: "administrador",
  },
];

for (let i = 0; i < usuarios.length; i++) {
  // console.log(estudiante[i]);
  if (usuarios[i].edad < 18 && usuarios[i].rol == "estudiante") {
    console.log(
      `el usuario: ${usuarios[i].nombre} tiene acceso a contenido basico`
    );
  } else if (usuarios[i].edad > 21 && usuarios[i].rol == "docente") {
    console.log(
      `el usuario: ${usuarios[i].nombre} tiene acceso a contenido avanzado`
    );
  } else if (usuarios[i].rol == "administrador") {
    console.log(`el usuario: ${usuarios[i].nombre} tiene acceso total`);
  } else {
    console.log(`el usuario: ${usuarios[i].nombre} tiene acceso restringido`);
  }
}

//* Una empresa tiene un listado de empleados. Cada empleado es representado con un objeto que contiene:
//? nombre
//? edad
//? departamento (por ejemplo: "ventas", "soporte", "administración")
//? activo (booleano que indica si el empleado está actualmente trabajando)
//! Tu tarea:
//! Recorre el arreglo de empleados usando un bucle (for o for...of).
//! Utiliza condicionales (if, else if, else) para:
//! Mostrar un mensaje diferente si el empleado es mayor de 40 años.
//! Mostrar si el empleado está activo o no.
//! Usa un switch para dar un mensaje según el departamento:
//? "ventas" → "Empleado del área comercial"
//? "soporte" → "Empleado de soporte técnico"
//? "administración" → "Empleado administrativo"
//? cualquier otro → "Departamento no registrado"
//* Ejemplo de salida:
//* Carlos (45 años): Empleado del área comercial - Activo
//* Lucía (38 años): Empleado de soporte técnico - Inactivo
//* Juan (41 años): Empleado administrativo - Activo - Tiene más de 40 años

console.log("====Ejercicio de repaso objetos 2====");

let empleados = [
  { nombre: "Marlon", edad: 20, departamento: "soporte", activo: true },
  { nombre: "Jose", edad: 50, departamento: "ventas", activo: true },
  { nombre: "Rick", edad: 30, departamento: "administracion", activo: true },
  { nombre: "Max", edad: 70, departamento: "contabilidad", activo: false },
];
let cargo;
let mensajeEdad;
let activo;
for (let i = 0; i < empleados.length; i++) {
  //console.log(empleados[i]);
  if (empleados[i].edad > 40) {
    mensajeEdad = `| tiene mas de 40 años`;
  } else {
    mensajeEdad = ` `;
  }
  if (empleados[i].activo == true) {
    activo = `esta activo`;
  } else {
    activo = ` no esta activo`;
  }

  switch (empleados[i].departamento) {
    case "soporte":
      cargo = "soporte";
      break;
    case "ventas":
      cargo = "ventas";
      break;
    case "administracion":
      cargo = "administración";
      break;
    default:
      cargo = "Departamento no registrado";
      break;
  }

  console.log(
    `El empleado: ${empleados[i].nombre} ${activo}| tiene el cargo de: ${cargo} ${mensajeEdad}`
  );
}

console.log("====Ejercicio de repaso objetos 3====");

// Crea un arreglo de objetos donde cada objeto represente un producto con nombre y precio.
// Usa un bucle para recorrer los productos y suma los precios.
// Luego, con un condicional, muestra un mensaje que diga si el total supera los $100.

let objetos = [
  { nombre: "Papas", precio: 40 },
  { nombre: "Jugo", precio: 20 },
  { nombre: "Soda", precio: 35 },
  { nombre: "manzana", precio: 10 },
];
let total = 0;

for (let i = 0; i < objetos.length; i++) {
  total += objetos[i].precio;
}
if (total > 100) {
  console.log(`El precio total de los productos es de: ${total}`);
}

// Crea un programa que maneje una lista de productos de una tienda. Cada producto debe tener nombre, precio y categoría.
// Haz lo siguiente:
// Recorre el arreglo de productos con un bucle.
// Usa un if para mostrar solo los productos cuyo precio sea menor o igual a 50.
// Dentro del bucle, utiliza un switch que, según la categoría del producto ("comida", "bebida", "ropa") imprima un mensaje diferente:
// Para comida: "Producto comestible"
// Para bebida: "Producto líquido"
// Para ropa: "Producto de vestir"
// Para cualquier otra categoría: "Categoría desconocida"
// Al final, muestra el total de todos los productos sumados.

console.log("====Ejercicio de repaso objetos 4====");

let productos = [
  { nombre: "Manzana", precio: 15, categoria: "Comida" },
  { nombre: "Jugo", precio: 20, categoria: "Bebida" },
  { nombre: "Camisa", precio: 70, categoria: "Ropa" },
  { nombre: "Televisor", precio: 7000, categoria: "Electrodomesticos" },
  { nombre: "Portatil", precio: 9000, categoria: "frutas" },
];

for (let i = 0; i < productos.length; i++) {
  if (productos[i].precio < 50) {
    console.log(`El producto ${productos[i].nombre} cuesta menos de $50`);
  }

  switch (productos[i].categoria) {
    case "Comida":
      mensaje = "| Producto comestible";
      break;
    case "Bebida":
      mensaje = "| Producto líquido";
      break;
    case "Ropa":
      mensaje = "| Producto de vestir";
      break;
    default:
      mensaje = "| Categoría desconocida";
      break;
  }

  total += productos[i].precio;
  console.log(
    `El producto ${productos[i].nombre} pertenece a la cateforia ${productos[i].categoria} ${mensaje}`
  );
}
