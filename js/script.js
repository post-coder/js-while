/**

Stampare tutti gli elementi di un array, 
sia con il ciclo for che con il ciclo while

 */


const array = [
    'Alice', 'Bob', 'Charlie', 'David', 'Emily',
    'Frank', 'Grace', 'Henry', 'Ivy', 'Jack',
    'Kate', 'Liam', 'Mia', 'Noah', 'Olivia',
    'Patrick', 'Quinn', 'Rachel', 'Samuel', 'Tracy',
    'Ursula', 'Victor', 'Wendy', 'Xander', 'Yvonne',
    'Zane', 'Ava', 'Benjamin', 'Chloe', 'Daniel',
    'Ella', 'Finn', 'Gabriella', 'Harrison', 'Isabella',
    'Jackson', 'Kylie', 'Landon', 'Mila', 'Nathan',
    'Oliver', 'Penelope', 'Quentin', 'Rebecca', 'Sophia',
    'Tyler', 'Uma', 'Vincent', 'Willow', 'Xavier',
    'Yasmine', 'Zachary', 'Abigail', 'Bryan', 'Catherine',
    'Dylan', 'Eva', 'Freddie', 'Georgia', 'Hayden',
    'Isaac', 'Jasmine', 'Kevin', 'Lila', 'Mason',
    'Natalie', 'Oscar', 'Peyton', 'Quincy', 'Riley',
    'Samantha', 'Toby', 'Ulysses', 'Violet', 'Walter',
    'Xena', 'Yara', 'Zara', 'Adam', 'Bella',
    'Caleb', 'Diana', 'Ethan', 'Fiona', 'George',
    'Hannah', 'Ian', 'Jade', 'Kyle', 'Luna'
];

// let trovato = false;

// // stampiamolo con il ciclo for
// for(let i = 0; i < array.length; i++) {

//     if(array[i] == "Alice") {
//         trovato = true;
//     }

//     console.log("operazioni eseguite");

// }



// _________________________________



let trovato = false;

// inizializziamo il contatore
let contatore = 0;

// sinchè il nome non è stato trovato
while(trovato == false && contatore < array.length) {

    // controlliamo che il nome della lista sia uguale a quello che cerchiamo
    if(array[contatore] == "Frank") {
        trovato = true;
    }

    // modificare la condizione di ciclo
    contatore++;

    console.log("operazioni eseguite");

}




if(trovato) {
    console.log("Trovato!");
} else {
    console.log("Alunno non presente");
}