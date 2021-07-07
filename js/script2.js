// Chiedi un numero all'utente, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

// 1.Chiede all'utente di inserire un numero,
// 2.Stabilire una condizione, se il numero è pari stamparlo,
// 3.Se il numero è dispari stampare il numero successivo. 

// ask number 

var num = 0;
do {
    num = parseInt('Inserisci un numero', '2');
} while (isNaN(num) || num <= 0);

// Condition

if (num % 2 === 0) {
    conosle.log(num);
} else {
    console.log(num += 1);
};