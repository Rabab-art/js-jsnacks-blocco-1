// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

var sum = 0;
var isValid = true;
var listElemt = document.getElementById('')

// Ask number with for

for (var i = 0; i <= 5; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero (' + i + '/5)'));
    console.log('numero inserito', userNumber);

    if (!isNaN(userNumber)) {
        sum += userNumber;
    };
};


console.log('sum prima:', sum);

// ask number with while 
// add a validatio for invalid letter character

var i = 1;
while (i <= 5) {
    var userNumber = parseInt(prompt('Inserisci un numero (' + i + '/5)'));
    console.log('numero inserito', userNumber);

    while (isNaN(userNumber)) {
        userNumber = parseInt(prompt('Inserisci un numero (' + i + '/5)'));
    }

    sum += userNumber;
    i++;
};