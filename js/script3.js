// Chiedi un numero all'utente, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

// 1.Creazione di due Array,
// 2.Randomizzazione delle Array,
// 3.craezione di un'Arrey vuota, che possa ospitare per
//  tre volte la randomizzazione di falsi invitati.

var firstName = ['Camillo', 'Marco', 'Mirko', 'Eliana', 'Loris'];
var lastName = ['Bartolini', 'Andrei', 'Faggiano', 'Ferrari', 'Colombo'];
var fakeList = [];

// Generare il random

while (fakeList.length < 3) {
    var randNumer1 = Math.floor(Math.random() * firstName.length);
    var randNumer2 = Math.floor(Math.random() * lastName.length);
    var randomFirstName = firstName[randNumer1];
    var randomLastName = lastName[randNumer2];
    var fullName = randomFirstName + '' + randomLastName;
    console.log('no randomizzato:', fullName);

    if (!fakeList.includes(fullName)) {
        console.log();
        fakeList.push(fullName);
    }
};

console.table(fakeList);