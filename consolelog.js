const styles = `
  background:linear-gradient(#884ced, #ec1cce);
  color:#fff;
  padding: 5px 10px;
`;

console.log("%c¡Hola Manz!", styles);


console.group("Información a mostrar");
console.log("UA: ", navigator.userAgent);
console.log("Lang: ", navigator.language);
console.groupEnd();


const users = [
    { name: "Manz", role: "streamer", status: "happy" },
    { name: "BlurSoul_", role: "mod", status: "happy" },
    { name: "felixicaza", role: "mod", status: "happy" },
    { name: "pheralb", role: "mod", status: "porosad" }
  ];
  
  console.table(users);
  
  console.assert(5 < 10, "5 es menor que 10");
// No ocurre nada

console.assert(5 < 0, "5 es menor que 0");
// Muestra el mensaje indicado con un aviso de error
