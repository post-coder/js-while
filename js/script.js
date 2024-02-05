/**

Stampare tutti gli elementi di un array, 
sia con il ciclo for che con il ciclo while

 */


const array = ["Gabriel", "Alessio", "Marco", "Francesco", "Roberto", "Christian"];


// stampiamolo con il ciclo for
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


// stampiamolo con il ciclo while
let contatore = 0;

while (contatore < array.length) {

    console.log(array[contatore]);

    // ricordiamoci SEMPRE di aggiornare le variabili coinvolte nella condizione iniziale
    // in modo che PRIMA O POI diventi falsa.
    contatore++;

}


console.log("Siamo usciti dal ciclo while");