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
    console.log(
      `el usuario: ${usuarios[i].nombre} tiene acceso total`
    );
  } else {
    console.log(`el usuario: ${usuarios[i].nombre} tiene acceso restringido`);
  }
}
