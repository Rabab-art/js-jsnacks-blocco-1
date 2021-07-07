// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// 1. Crea due array di lunghezza differente,
// 2. Crea un elemento random,
// 3.Verifica quale Arrey è più corta,
// 4. Aggiungo elememto random all'arrey più corta. 

var array1 = [1, 2, 86, 11, 88, 12];
var array2 = [42, 33];
while (array1.length !== array2.length) {

    var randomNumber = Math.floor(Math.random() * 100) + 1;
    if (array1.length > array2.length) {
        array2.push(randomNumber);
    } else {
        array1.push(randomNumber);
    }
};

console.log('Gli array hanno la stessa lughezza');
console.log(array1);
console.log(array2);