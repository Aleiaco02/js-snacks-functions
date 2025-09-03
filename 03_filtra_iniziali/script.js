/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraPerLettera(parole, lettera) {
  return parole.filter(parola => parola[0].toLowerCase() === lettera.toLowerCase());
}

// Invoca la funzione qui e stampa il risultato in console
const letteraA = filtraPerLettera(names, "A");
console.log("I nomi che iniziano con la A sono:", letteraA);

const letteraM = filtraPerLettera(names, "M");
console.log("I nomi che iniziano con la M sono:", letteraM);

const letteraL = filtraPerLettera(names, "L");
console.log("I nomi che iniziano con la L sono:", letteraL);
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]