console.log(`Quale tabellina vuoi conoscere?`)

let start = parseInt(prompt("Inserire Inzio"));
let finish = parseInt(prompt("Inserire Fine"));


for (let n = start; n <= finish; n++) {

    console.log(`Questa è a tabellina del ${n}`)

    for (let i = 1; i <= 10; i++) {

        console.log(`${n} x ${i} = ${n * i}`);

        }
}
