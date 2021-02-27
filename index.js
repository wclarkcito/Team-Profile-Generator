//const generateHTML = require('./html-creator');
//const util = require('util');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// classes files
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

const output = require = path.resolve(__dirname, "output", "myTeam.html");

//const render = require('./lib/html-render');

const team = [];

const arrayID = [];



function teamView() {

    function createManager() {
        console.log("Go ahead and build the team!");

        inquirer.prompt([
            {
                type: "Input",
                name: "managerName",
                message: "What is your managaer name?"
            },
            {
                type: "Input",
                name: "managerId",
                message: "What is your managaer id?"
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId);
            team.push(manager);
            arrayID.push(managerId);
            buildTeam();
        })
    }

    function buildTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "members",
                message: "Add another member to your team?",
                choices: [
                    "Engineer",
                    "Intern",
                    "No need to add a member"
                ].then(selectedMember => {
                    switch (selectedMember.members) {
                        case "Engineer":
                            createEngineer();
                            break;
                        case "Intern":
                            createIntern();
                            break;
                        default:
                            createHtml();
                    }
                })
            }
        ])
    }

    createManager();
}



teamView();














//array of prompts for user input

/*
inquirer.prompt([

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


*/








