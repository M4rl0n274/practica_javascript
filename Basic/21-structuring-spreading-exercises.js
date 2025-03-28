// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myRoom = [ "Computer", "Phone", "Bed", "Poster", "Byke"];

let [ stuff0, stuff1, stuff2, stuff3, stuff4] = myRoom;

console.log(`I have ${stuff0}`);
console.log(`I have ${stuff1}`);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("Ejercicio 2");
let food = ["Apple" , "Chikcen", "Potato", "Water"]

let [myFood0, myFood1="What?", myFood2, myFood3, myFood4 , myFood5 = "Nothing" ] = food

console.log(myFood1);
console.log(myFood5);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("Ejercicio 3");
let zombie = {
    name: "Larry",
    speed: "10Kmh",
    apparience: "Weird",
}

let { name , speed, apparience} = zombie
console.log(name);
console.log(speed);



// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log("Ejercicio 4");

let zombie2 = {
    name: "Amanda",
    speed: "25Kmh",
    apparience: "Beautiful",
}

let { name:nameZombie2 , speed:speedZombie2, apparience:apparienceZombie2} = zombie2

console.log(nameZombie2);
console.log(speedZombie2);
console.log(apparienceZombie2);



// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("Ejercicio 5");
let zombie3 = {
    name: "Richard",
    speed: "50Kmh",
    apparience: "Dont have head",

    dieting: {
        brains: "Bigs and pink",
        water: "blue and clean"
    }
}
let {dieting: {brains: favorite }, dieting: {water: drink}, name:nameZombie3 } = zombie3
console.log(` Zombie ${nameZombie3} like brains ${favorite} and drink water ${drink} `);


// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("Ejercicio 6");

let games = ["GTA San Andreas", "Devil May Cry 3", "Project Zomboid"];
let play = ["Play Station", "Computer", "Xbox"];

let favoriteGames = [...games, ...play]
console.log(favoriteGames);


// 7. Usa propagación para crear una copia de un array

console.log("Ejercicio 7");

let copyGames = [ ...games];
console.log(copyGames);

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("EJercicio 8");

let zombieCombination = {...zombie3, ...zombie2}
console.log(zombieCombination);

// 9. Usa propagación para crear una copia de un objeto
console.log("Ejercicio 9");
let copyZombie = {...zombie};
console.log(copyZombie);


// 10. Combina desestructuración y propagación
console.log("Ejercicio 10");

let moreGames = [" Call Of Duty", "Ghost Recon", "Burnout Paradise", "NEed For Speed Most Wanted"];

let selectGames = [];

let [game0, game1, game2, game3] = moreGames;

selectGames.push(game0, game3)
console.log(selectGames);

let player ={
    name: "playerOne",
    favoriteGame: selectGames[0],
    favoriteGame2:selectGames[1],
    topGames: moreGames
}

console.log(player);


let playerLiked = {...player};

console.log(playerLiked);
