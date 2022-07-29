// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs')
var generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How can the user install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who is credited for working on this project?',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'How would you like to license your project?',
        name: 'license',
        choices: ['MIT', 'Babel', 'GNU', 'BASH', "GIMP", 'None']
    },
    {
        type: 'input',
        message: 'Questions:',
        name: 'questions'
    }

];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // TODO: Use fs.writeFile to write a file (google node filesystem)
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown(answers))
        })

}

// Function call to initialize app
init(fileName, data);
    inquirer
        .prompt(questions)
        .then((Initial.answers))

