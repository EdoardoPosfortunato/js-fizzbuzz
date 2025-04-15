// Input

let start = parseInt(prompt("Inserire Inzio"));
let finish = parseInt(prompt("Inserire Fine"));

let div1= parseInt(prompt("Divisore 1"));
let div2 = parseInt(prompt("Divisore 2"));

// Esecuzione Logica & Output

for (let i = start; i <= finish; i++) {

    if (i % div1 === 0 && i % div2 === 0) {
        console.log("Si divide per Entrambi")
    } else if (i % div1 === 0) {
        console.log(`È divisibile solo per ${div1}`)
    } else if (i % div2 === 0) {
        console.log(`È divisibile solo per ${div2}`)
    } else {
        console.log(i)
    }
}


