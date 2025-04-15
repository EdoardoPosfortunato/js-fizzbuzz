
// Scrivi un programma che generi una piramide di asterischi (*) in base a un numero dato dall'utente. Il numero rappresenta l'altezza della piramide. Ogni riga della piramide deve essere centrata rispetto alla base.


console.log(`Piramide con un carattere speciale`)

let finish = parseInt(prompt("Inserisci il numero di righe"));
let special = prompt("Inserisci 1 caratterte speciale");

for (let i = 1; i <= finish; i++) {
    let riga = "";
  
    // Aggiungo spazi
    for (let s = 1; s <= finish - i; s++) {
      riga = riga + " ";
    }
  
    // Aggiungo asterischi (2 * i - 1 per avere numeri dispari)
    for (let a = 1; a <= i * 2 - 1 ; a++) {
      riga = riga + special;
    }


    console.log(riga);
  }