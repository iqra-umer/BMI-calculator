#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let ans = await inquirer.prompt([
    {
        name: 'weight',
        type: 'number',
        message: (chalk.bgGreen.italic('What is your weight (kg)?'))
    },
    {
        name: 'height',
        type: 'number',
        message: (chalk.bgYellow.bold('What is your height (m)?'))
    }
]);
let weight = ans.weight;
let height = ans.height;
let bmi = weight / (height * height);
let category = interpreterBMI();
function interpreterBMI() {
    if (bmi < 18.5)
        return "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.9)
        return "Normal weight";
    else if (bmi >= 25 && bmi <= 29.9)
        return "Overweight";
    else {
        return "obested weight";
    }
}
console.log(chalk.blue(`your BMI is ${bmi}`));
console.log(chalk.blue(`your BMI is '${category}' category..`));
