// Dati due numeri interi A e B, scrivi un programma che calcoli la somma di tutti i numeri compresi tra A e B (inclusi). Il programma deve stampare il risultato finale.
// Esempio: se A = 3 e B = 8, i numeri da sommare sono: 3, 4, 5, 6, 7, 8, per cui la somma è: 3 + 4 + 5 + 6 + 7 + 8 = 33

console.log("Dati due numeri fa la somma di tutti i numeri nell'intervallo")

let start = parseInt(prompt("Inserire Inzio"));
let finish = parseInt(prompt("Inserire Fine"));


if (isNaN(start) || isNaN(finish)) {

    console.log(`Hai sbagliato a scrivere uno dei due valori)
        > ${start} 
        > ${finish} `)

} else {

    let sum = 0;
    output = "";

    for (let i = start; i <= finish; i++) {

        sum = sum + i;

        if (i < finish) {

            output = output + i + " + ";
        } else if (i = finish) {
            output = output + i + " = ";
        }

    }

    console.log(`${output}${sum}`)
    console.log(`La somma totale è ${sum}`)
}