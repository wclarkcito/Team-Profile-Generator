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
const team = [];
const arrayID = [];




//initialization function for Manager to create team

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
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
        },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.email, answers.officeNumber);
        team.push(manager);
        // arrayID.push(managerId);
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
                "Team Finished"
            ]
        }
    ]).then(selectedMember => {
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

//creates prompts for Engineer information

function createEngineer() {
    console.log("Go ahead and build the team!");

    inquirer.prompt([
        {
            type: "Input",
            name: "Name",
            message: "What is the Engineer's name?"
        },
        {
            type: "Input",
            name: "engineerId",
            message: "What is the Engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "GitHub",
            message: "What is your GitHub?"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.Name, answers.engineerId, answers.email, answers.GitHub);
        team.push(engineer);
        // arrayID.push(managerId);
        buildTeam();
    })
}

//creates prompts for Intern information

function createIntern() {
    console.log("Go ahead and build the team!");

    inquirer.prompt([
        {
            type: "Input",
            name: "Name",
            message: "What is the Intern's name?"
        },
        {
            type: "Input",
            name: "internId",
            message: "What is the Intern id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school do you go to?"
        },
    ]).then(answers => {
        const intern = new Intern(answers.Name, answers.internId, answers.email, answers.school);
        team.push(intern);
        buildTeam();
    })
}
function createHtml() {
    console.log(team)
    let html = "<!DOCTYPE html><head><title>Employee Roster</title><link rel='stylesheet' href='style.css'></head><body><h1>Employee Roster</h1><div class = 'container'>"

    team.forEach((member, index) => {
        if (member instanceof Manager) {
            html += buildManagerCard(member)

        } else if (member instanceof Engineer) {
            html += buildEngineerCard(member)
        } else if (member instanceof Intern) {
            html += buildInternCard(member)
        }
    })
    fs.writeFile("index.html", html, (err) => {
        console.log(err)
    })

    //functions to create cards for Manager Engineer and Intern respectively
}
createManager();
function buildManagerCard(member) {
    return `<div class = "card"><div class = "header"><h2>${member.name}</h2><h3>&#x2615; Manager</h3></div><div class = "body"><div class = "row">id: ${member.id}</div><div class = "row">email: ${member.email}</div><div class = "row">office number: ${member.officeNumber}</div></div></div>`
}

function buildEngineerCard(member) {
    return `<div class = "card"><div class = "header"><h2>${member.name}</h2><h3>&#x1F576; Engineer</h3></div><div class = "body"><div class = "row">id: ${member.id}</div><div class = "row">email: ${member.email}</div><div class = "row">GitHub: ${member.github}</div></div></div>`
}

function buildInternCard(member) {
    return `<div class = "card"><div class = "header"><h2>${member.name}</h2><h3>&#x1F393; Intern</h3></div><div class = "body"><div class = "row">id: ${member.id}</div><div class = "row">email: ${member.email}</div><div class = "row">School: ${member.school}</div></div></div>`




}






























