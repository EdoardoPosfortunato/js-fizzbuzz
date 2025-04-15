
let finish = parseInt(prompt("Inserisci il numero di righe"));

for (let i = 1; i <= finish; i++) {
    let riga = "";
  
    // Aggiungo spazi
    for (let s = 1; s <= finish - i; s++) {
      riga = riga + " ";
    }
  
    // Aggiungo asterischi (2 * i - 1 per avere numeri dispari)
    for (let a = 1; a <= i * 2 - 1 ; a++) {
      riga = riga + "x";
    }


    console.log(riga);
  }