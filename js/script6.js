// Scrivi un programma che simuli un conto alla rovescia da 10 a 1, ma per rendere il countdown più drammatico, le ultime tre cifre (1, 2 e 3) devono essere ripetute due volte ciascuna.

console.log("Countdown")

let start = parseInt(prompt("Inserire fine Countdown"));


for (let n = start; n >= 0; n--) {

    if (n === 0) {

        console.log("Decollo!!")

    } else if (n <= 3) {

        console.log(n)
        console.log(n)

    } else {

        console.log(n)
    }
}


