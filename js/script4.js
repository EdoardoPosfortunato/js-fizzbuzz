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
    console.log(sum)
} 