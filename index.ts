#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// display the welcome message to the user
console.log(chalk.bold.rgb(255, 147, 28)("\n \t Welcome to 'Code With Owais' - Table Generator\n"));


// Prompt a user to Enter a Table No.
let answer = await inquirer.prompt([
    {
        name: "table",
        type: "number",
        message: "Enter the Table No. You want to Generate :"
    
    }
]);

// Using a for loop to display the table until * 10
for(let i = 1; i <= 10; i++) {
    let number = answer.table;
    console.log(chalk.bold.yellow(`${answer.table} x ${i} = ${answer.table * i}`)); 
}