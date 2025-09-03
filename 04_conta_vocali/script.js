/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

function contaVocali(parola) {
  const vocali = "aeiou";
  let contatore = []; // qui mettiamo le vocali trovate

  for (let i = 0; i < parola.length; i++) {
    const carattere = parola[i].toLowerCase();
    if (vocali.includes(carattere)) {
      contatore.push(parola[i]); // aggiungiamo il carattere originale
    }
  }

  return contatore; // restituiamo l'array di vocali trovate
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = contaVocali(word);

console.log("Vocali trovate:", risultato); 

//Risultato atteso se si passa 'javascript': 3 (a, a, i)