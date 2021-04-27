// global declerations of required node modules
const inquirer = require('inquirer')
const fs = require('fs')
// begins prompting the user for info needed to generate the new readme file
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your new project?",
        name: "title",
        validate: (value) => {if(value){return true} else {return "cannot be blank"}},
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
        validate: (value) => {if(value){return true} else {return "cannot be blank"}},
    },
    {
        type: "input",
        message: "What email would you like to attach this to?",
        name: "email",
        validate: (value) => {if(value){return true} else {return "cannot be blank"}},
    },
    {
        type: "input",
        message: "Write a brief description of your new project",
        name: "description",
        validate: (value) => {if(value){return true} else {return "cannot be blank"}},
    },

    {
        type: "input",
        message: "What is the usecase of your project",
        name: "usecase",
        validate: (value) => {if(value){return true} else {return "cannot be blank"}},
    },

    {
        type: "input",
        message: "is there any installation guidlines?",
        name: "installation",
    },
    {
        type: "checkbox",
        message: "Please choose the corresponding licence",
        name: "license",
        choices: ["[ISC](ISC.txt)", "[MIT](MIT.txt)", "[Unlicensed](Unlicensed.txt)"],
        validate: (value) => {if(value){return true} else {return "cannot be blank"}},
    },

    {
        type: "input",
        message: "Names of contributors on this project",
        name: "contributors",
    },

    {
        type: "input",
        message: "Are there any tests included in the project?",
        name: "test",
    },
    // after prompts are answered, the result is then written into a new readme file

]).then((res) => {
    // const to store readme data into a new function
    const newREADME = writeREADME(res)
    // function that writes the file and catches any errors 
    fs.writeFile("README.md", newREADME, 
        (err) => err ? console.log(err) :
        console.log("Generating your new README file..."));
});
// function that takes in all the inputed data and places it appropriatly
const writeREADME = result => {
    return ` # ${result.title}
# License: 
![license](https://img.shields.io/badge/License-${result.license}-blue?style=for-the-badge&logo=appveyor.svg)
# Table of Contents 
* [Description](#description)
* [Usecase](#Usecase)
* [Installation](#installation)
* [Contributors](#contributors)
* [License](#license)
* [Questions](#questions)
    
## Description: 
${result.description}
## Installation: 
${result.installation}
## Usecase: 
${result.usecase}
## License: 
${result.license}
## Contribution: 
${result.contributors}
## Testing: 
${result.test}
## Questions: 
Contact me by the following for any questions:
* Github:(https://github.com/${result.github})
* Email: ${result.email} `;
}

