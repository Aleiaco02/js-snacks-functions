/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.
function helloUser(name) {
    if (name === userName) {
        return "ciao " + userName
    }
}

// Invoca la funzione qui e stampa il risultato in console

helloUser(userName);
console.log(helloUser(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
