// Loops o bucles 


// for 

for (let i = 0 ; i < 5 ; i ++) {
    console.log(`Hola ${i}`);
}

const numbers = [ 1,2,3,4,5,6,7,8]

for (let i = 0 ; i < numbers.length ; i ++) {
    console.log(`Elemento:  ${numbers[i]}`);
}

// while 
let i = 0
while ( i < 5 ) {
    console.log(`Hola desde while ${i}`);
    i++
}

// Bucle infinito
// while (true){

// do while
i = 0
do {
    console.log(`Hola ${i}`);
    i++
}while (i<5){

}

// for of
myArray = [1,2,3,4]

mySet = new Set(["Marlon" ,  "Quintero","hola", 20, true, "marlon@gmail.com"])

myMap = new Map ([
    ["name", "Marlon"],
    ["email", "marlon@gamil.com"],
    ["age", 20]
])

myString =" !Hola Javascript"

for (let valor of myArray){
    console.log(valor);
}

for (let valor of mySet){
    console.log(valor);
}

for (let valor of myMap){
    console.log(valor);
}
for (let valor of myString){
    console.log(valor);
}


// Buenas prácticas

// break continue

for (let i = 0 ; i < 10 ; i ++) {
    if (i == 5) {
        continue
    } else if (i == 6){
        break
    }
    console.log(`Hola ${i}`);
}



