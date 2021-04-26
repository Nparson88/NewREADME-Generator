const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
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
        message: "Please choose the corresponding licence",
        name: "license",
        choices: ["[ISC](ISC.txt)", "[MIT](MIT.txt)", "[Unlicensed](Unlicensed.txt)"]
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

]).then((res) => {
    const newREADME = writeREADME(res)
    fs.writeFile("README.md", newREADME, (err) => err ? console.log(err): 
    console.log("Generating your new README file..."));
});
  
const writeREADME = result => {
    return ` # ${result.title}
    # License: 
    ![license](https://img.shields.io/badge/License-${result.license}-blue?style=for-the-badge&logo=appveyor.svg)
    # Table of Contents 
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contributors](#contributors)
    5. [License](#license)
    6. [Questions](#questions)
    
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

