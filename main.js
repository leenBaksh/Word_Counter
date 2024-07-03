// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";
// Declear a constant 'answers' and assign it to the result of inquirer.prompt function
// const answers: {
//     Sentence: string
// }
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(/\s+/); // Using regex to split by one or more spaces
// pRINT THE ARRAY OF WORDS TO THE CONSOLE
console.log(chalk.magentaBright("words in your sentence:"), words);
//print the word count of the sentence to the console
console.log(chalk.magenta(`Your sentence word count is ${words.length}`));
