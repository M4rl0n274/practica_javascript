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
