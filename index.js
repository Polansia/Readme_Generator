const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
      type: "input",
      name: "title",
      message: "What's the name of the project?"
  },
  {
      type: "input",
      name: "description",
      message: "Write a description."
  },
  {
      type: "input",
      name : "installation",
      message: "Write the Installation Instructions."
  },
  {
      type: "input",
      name: "usage",
      message: "Descript the usage of your project."
  },
  {
      type: "list",
      name: "license",
      message: "What's the license for the project?",
      choices: [
          "Apache",
          "GPL",
          "MIT",
          "Unlicensed" 
      ]
  },
  {
      type: "input",
      name:"contributing",
      message: "What are your rules for contributing?"
  },
  {
      type: "input",
      name: "tests",
      message: "How is the project tested?"
  },
  {
      type: "input",
      name: "username",
      message: "What's your GitHub username?"
  },
  {
      type: "input",
      name: "email",
      message: "What is your Email for contact?"
  }
];

// function writeToFile(fileName, data) {
// }

async function init() {

  const data =  await inquirer.prompt(questions);
  const readMe = generateMarkdown(data);

  await writeFileAsync("README.md", readMe);
}

init();
