const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const render = require("./src/page-template.js");

const teamArray = [];

const addEngineer = () => {
  inquirer.prompt ([
    {
      type: "input",
      message: "Please enter the engineer's name.",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter the engineer's ID.",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter the engineer's email.",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter the engineer's GitHub page.",
      name: "github",
    }
  ])
    .then(engineerInput => {
      const { name, id, email, github } = engineerInput;
      const engineer = newEngineer (name, id, email, github);
  
      teamArray = push(engineer);
    })
};
  
const addIntern = () => {
  inquirer.prompt ([
    {
      type: "input",
      message: "Please enter the intern's name.",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter the intern's ID.",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter the intern's email.",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter the intern's school.",
      name: "school",
    }
  ])
    .then(internInput => {
      const { name, id, email, school } = internInput;
      const intern = newIntern (name, id, email, school);

      teamArray = push(intern);
    })
};

const addManager = () => {
  inquirer.prompt ([
    {
      type: "input",
      message: "Please enter the manager's name.",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter the manager's ID.",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter the manager's email.",
      name: "email",
    },
    {
      type: "input",
      message: "Please enter the manager's office number",
      name: "officeNumber",
    }
  ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = newManager (name, id, email, officeNumber);

      teamArray = push(manager);
    })
};

const addEmployee = () => {
  inquirer.prompt ([
    {
      type: "list",
      message: "What is the role of the team member whould you like to add?",
      name: "role",
      choices: [ "Engineer", "Intern", "Manager" ]
    }])
      .then(employeeData => {
        const { name, id, role, email, officeNumber, github, school } = employeeData;
        const employee;
        if (role === "Engineer") {
          employee = new Engineer (name, id, email, github);
          addEmployee();
        } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);
          addIntern();
        } else (role === "Manager") {
          employee = new Manager (name, id, email, officeNumber);
          addManager();
        }
      });
}

const confirmAddMember = () => {
  inquirer.prompt ([
    {
      type: "confirm",
      message: "Would you like to add a new team member?",
      name: "addTeamMember"
    }
  ])
}