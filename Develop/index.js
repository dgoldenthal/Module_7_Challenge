// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateMarkdown from './utils/generateMarkdown.js';

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is your project used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Describe the test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Create a function to write README file
async function writeToFile(fileName, data) {
  try {
    await fs.writeFile(fileName, data);
    console.log('README.md successfully generated!');
  } catch (err) {
    console.error(err);
  }
}

// Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    await writeToFile('README.md', markdown);
  } catch (err) {
    console.error(err);
  }
}

// Function call to initialize app
init();