const fs = require('fs')
let count = 0
const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1), i = 0, numberOfNewLine = 0, stdinBuffer = Buffer.alloc(1), inc = 0;
    buf.fill(0);
    while ((buf[0] - 10 && buf[0] - 13)) {

        s += buf, fs.readSync(0, buf, 0, 1, 0);
        if (buf[0] - 10 === 0 || buf[0] - 13 === 0) {
            i++;
            // console.log('first',i)
        }
    }
    fs.readSync(0, stdinBuffer, 0, 1, null);
    count++;
    return s.slice(1).replace(/^\n/, '');
};

let option;
let numbers;
let result;

while (true) {
    console.log('1) Addition');
    console.log('2) Subtraction');
    console.log('3) Avarage');


    option = prompt('choose any option: ');
    numbers = [];
    result = 0;

    if (option == '1'){
    while (true) {
        input = prompt("Enter number: ");
        if (input.toLowerCase() === 'done') {
            break;
        }

        let num = parseFloat(input)
        if (isNaN(num)) {
            console.log('enter valid number!');
        }
        else {
            numbers.push(num);
        }
    }

    if (numbers.length === 0) {
        console.log('');
    } else {

        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        console.log('result is :' + result);

    }
    }

     else if(option == '2'){
    while (true) {
        input = prompt("Enter number: ");
        if (input.toLowerCase() === 'done') {
            break;
        }

        let num = parseFloat(input)
        if (isNaN(num)) {
            console.log('enter valid number!');
        }
        else {
            numbers.push(num);
        }
    }

    if (numbers.length === 0) {
        console.log('');
    } else {

        result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result -= numbers[i];1

        }
        console.log('result is :' + result);

    }
     }
     else if (option == '3'){
    while (true) {
        input = prompt("Enter number: ");
        if (input.toLowerCase() === 'done') {
            break;
        }

        let num = parseFloat(input)
        if (isNaN(num)) {
            console.log('enter valid number!');
        }
        else {
            numbers.push(num);
        }
    }

    if (numbers.length === 0) {
        console.log('');
    } else {

        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        result = result / numbers.length;
        console.log('result is :' + result);

    }
     }
}