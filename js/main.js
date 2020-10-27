// A continuación proponemos una pequeña batería de ejercicios para repasar durante el fin de semana, 
// cualquier duda comentad por Slack públicamente, estamos para ayudaros ante las dificultades que se 
// puedan presentar al realizar los ejercicios.

// EJERCICIOS DE REPASO ES6.

// 1 - Haz una función capaz de revertir el orden de los caracteres de un string dado por un usuario.

let invers = ["supercalifragilisticoespialidoso", 1234567890]
function uno(invers){
    return [...String(invers)].reverse().join('');
}

console.log(uno(invers));

// 2 - Construye una función que sea capaz de comprobar si una variable es un array o no lo es.

// let booleanValue = true;
// let numericalValue = 354;
// let stringValue = "Here the String";
// let stringObject = new String ("This is a String Object")
// alert(typeof booleanValue)   // mostrará "boolean"
// alert(typeof numericalValue) // mostrará "number"
// alert(typeof stringValue)    // mostrará "string"
// alert(typeof stringObject)   // mostrará "object"

var aString = "Good news everyone";
var notaString = 70021234;

if (typeof aString === 'string') {
    console.log("It is a string")// there there! We have a string
} else {
    console.log("No, it is not a String")
}
if (typeof notaString === 'string') {
    console.log("It is a string")// there there! We have a string
} else {
    console.log("No, it is not a String")
}

// 3 - Construye una función capaz de clonar un array.

// declaramos la función
const tonos = ['Verde', 'Amarillo', 'Negro'];

// Old way
const cloneTonos = tonos.slice();
console.log(cloneTonos);

// "Spread" way / ES6
const cloneTonosES6 = [...tonos];
console.log(cloneTonosES6);

// 4 - Escribe una función capaz de borrar elementos duplicados del siguiente array.
//let array1 = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];

let semana = ["Lunes","Martes","Miércoles","Lunes","Jueves","Viernes","Viernes","Sabado","Domingo"];

// // "Reduce" way
const oldWayOne = semana.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  [],
);
console.log(oldWayOne);

// // "Filter" way
const oldWayTwo = semana.filter((item, index) => semana.indexOf(item) === index);
console.log(oldWayTwo);

// "Set" way / ES6
const borraDobles = new Set(semana);
console.log(borraDobles);

// 5 - Escribe una función capaz de concatenar dos arrays.
// let array2 = [1,2,3,4,5,6,7,8,9]; let array3 = [10,11,2,3,4,12,13,14,15];

let sieteNotas = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
let sieteColores = ["Rojo", "Verde", "Azul", "Blanco", "Negro", "Cian", "Magenta"];

const all = sieteNotas.concat(sieteColores);
console.log(all);

// 6 - Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.
let array2 = [1,2,3,4,5,6,7,8,9]; 
let array3 = [10,11,2,3,4,12,13,14,15];
const suma = array2.concat(array3);
const sumaCriba = new Set(suma);
console.log(sumaCriba); 


// 7 - Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número
// es primo o no.

const primo =()=> {
    const res = new Promise(()=>{
        let num = parseInt(prompt('Escribe un numero: ')); 
        
        if(num % 2 === 0){
            console.log('Number '+ num +' is even');
        } else {
            console.log('Number '+ num +' is NOT even')
        }
    })
    return res;
};
primo();


// 8 - Diseña una función en Javascript de tipo promesa que genere un array con 5 números aleatorios, una vez hecho esto, pedirá un número al usuario 
// mediante prompt y comprobará si el número introducido coincide con uno de los 5 generados aleatoriamente por el array. en caso de coincidir devolverá un 
// resolve, caso contrario reject. El espectro de los números tanto aleatorios como el introducido por el usuario será del 1 al 10. 

let game = Math.floor(Math.random()*10);
const guess = new Promise(()=>{
    let ask = parseInt(prompt('Adivina que numero estoy pensando, del uno al diez'));

    if(ask === game){
        console.log('El número que estaba pensando era el ' + game + ' enhorabuena!')
    } else {
        console.log('El número que estaba pensando era el ' + game + ', lo siento. Tu número era el ' + ask );
    }
})