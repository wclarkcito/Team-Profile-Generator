const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./html-creator')


//array of prompts for user input

inquirer
    .prompt([

        {
            type: "input",
            name: "name",
            message: "What is the Team Managers name?"
        },
        {
            type: "input",
            name: "name",
            message: "What is your employee ID?"
        },

        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "name",
            message: "What is your office number?"
        },
        {
            type: "list",
            name: "addPerson",
            message: "Would you like to add an Engineer or an Intern to finish building team?",
            choices: ["yes", "no"]
        },
        {
            type: "input",
            name: "Github",
            message: "What is your GitHub username?"
        },

        {
            type: "input",
            name: "name",
            message: "What school do you go to?"
        },

    ])