/**

Stampare tutti gli elementi di un array, 
sia con il ciclo for che con il ciclo while

 */


// inserisci un numero
let number;

// il ciclo do-while PRIMA esegue le operazioni dentro le graffe
// solo DOPO controlla se la condizione è vera, in quel caso continua a ripeterle
// con questo tipo di ciclo abbiamo la sicurezza che le 
// istruzioni dentro le graffe vengano eseguite ALMENO UNA VOLTA.
do {

    number = prompt("Inserisci un numero");

    if(isNaN(number)) {
        alert("Il numero inserito non è valido");
    }

} while (isNaN(number));



const numberElevated = number ** 3;

console.log(numberElevated);

