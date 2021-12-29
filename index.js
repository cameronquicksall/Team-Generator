const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const questions = [];

function initApp() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please provide the Managers name: (Required)",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "Please enter at least one character."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the office number?"
        },
    ]).then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        questions.push(manager);
        //calls addTeamMember() prompt
        addTeamMember();
    })
}

function addTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "empType",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I do not want to add any more team members."
            ]
        }
    ]).then(function (answer) {
        // calls createEngineer() if chosen
        if(answer.empType === "Engineer") {
            createEngineer();
            
            // calls createIntern() if chosen
        } else if(answer.empType === "Intern") {
            createIntern();
        } else {
            console.log("Success! Your team has been generated.")
        }
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name? (Required)",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "You must enter at least one character."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is their GitHub username? (Required)",
            validate: answer => {
                const pass = answer.match("");
                if(pass) {
                    return true;
                }
                return "Please enter at least one character."
            }
        },
    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        questions.push(engineer);
        addTeamMember();
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Interns name? (Required)",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "You must enter at least one character."
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the Interns id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Interns email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend? (Required)",
            validate: answer => {
                if(answer !== "") {
                    return true;
                } 
                return "You must enter at least one character."
            }
        },
    ]).then(function (answers) {
        const engineer = new Intern(answers.name, answers.id, answers.email, answers.school);
        questions.push(engineer);
        addTeamMember();
    })
}

initApp();