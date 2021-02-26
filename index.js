const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./html-creator');
const util = require('util');

class Employee {
    constructor() {
        this.name
        this.id
        this.email
        this.getName()
        this.getid
        this.getEmail
        this.getRole()
    }
}
class Manager {
    constructor() {
        this.officeNumber
        this.getRole()
    }
}

class Engineer {
    constructor() {
        this.gitHubName
        this.getGitHub()
        this.getRole()
    }
}

class Intern {
    constructor() {
        this.school
        this.getSchool()
        this.getRole()
    }
}


//array of prompts for user input


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




    .then((response) => {
        if (inquirer.choices === "yes") {
            return "Engineer" || "Intern";
        }




    });








