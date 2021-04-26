const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: "input",
        message: "What is the title of your new project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What email would you like to attach this to?",
        name: "email",
    },
    {
        type: "input",
        message: "Write a brief description of your new project",
        name: "description",
    },
    
    {
        type: "input",
        message: "What is the purpose of your project",
        name: "usecase",
    },
    
    {
        type: "input",
        message: "Add any instillation info",
        name: "installation",
    },
    {
        type: "checkbox",
        message: "Please choose the corresponding licence?",
        name: "licence",
        choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"]
    },
    
    {
        type: "input",
        message: "Names of people working on this project",
        name: "contributors",
    },
    
    {
        type: "input",
        message: "Are there any tests included in the project?",
        name: "test",
    },
];  

function writeToFile(fileName, data) {}

function init() {}
init();