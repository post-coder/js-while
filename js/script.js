/**

chiedi all'utente un numero, 
se il numero è dispari inseriscilo in un array.
Continua a chiedere numeri sinchè l'array non contiene 5 elementi.

*/


// memorizzo l'array, inizialmente vuoto
const numberList = [];

let tentativi = 0;

do {

    const userNumber = prompt("Inserisci un numero")

    if(userNumber % 2 != 0) {
        // è dispari
        numberList.push(userNumber)
    }

    tentativi++;

} while(numberList.length < 5);



console.log("Sono uscito dal ciclo while");
console.log(numberList);
console.log(`Sono stati eseguiti ${tentativi} tentativi`)