// build something frm scratch // calculator with good docs \import * as readline from 'readline';
import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
        const result = parseFloat(num1) + parseFloat(num2);
        console.log(`The sum is ${result}`);
        rl.close();
    });
});
// chat gpt