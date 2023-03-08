const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamArray = [];

const initApp = () => {
  addEmployee();
}

const addEngineer = () => {
  inquirer.prompt ([
    {
      type: "input",
      message: "Please enter the engineer's name.",
      name: "engineerName",
    },
    {
      type: "input",
      message: "Please enter the engineer's ID.",
      name: "engineerId",
    },
    {
      type: "input",
      message: "Please enter the engineer's email.",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "Please enter the engineer's GitHub username.",
      name: "engineerGithub",
    },
    {
      type: "confirm",
      message: "Would you like to add a new team member?",
      name: "addTeamMember"
    }
  ])
    .then(answers => {
      const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
  
      teamArray.push(engineer);
      console.log(teamArray);

      if(answers.addTeamMember) {
        addEmployee();
      } else {
        teamArray;
        createFile();
      }
    })
};
  
const addIntern = () => {
  inquirer.prompt ([
    {
      type: "input",
      message: "Please enter the intern's name.",
      name: "internName",
    },
    {
      type: "input",
      message: "Please enter the intern's ID.",
      name: "internId",
    },
    {
      type: "input",
      message: "Please enter the intern's email.",
      name: "internEmail",
    },
    {
      type: "input",
      message: "Please enter the intern's school.",
      name: "internSchool",
    },
    {
      type: "confirm",
      message: "Would you like to add a new team member?",
      name: "addTeamMember"
    }
  ])
    .then(answers => {
      const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);

      teamArray.push(intern);
      console.log(teamArray);

      if(answers.addTeamMember) {
        addEmployee();
      } else {
        teamArray;
        createFile();
      }
    })
};

const addManager = () => {
  inquirer.prompt ([
    {
      type: "input",
      message: "Please enter the manager's name.",
      name: "managerName",
    },
    {
      type: "input",
      message: "Please enter the manager's ID.",
      name: "managerId",
    },
    {
      type: "input",
      message: "Please enter the manager's email.",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Please enter the manager's office number",
      name: "managerOfficeNumber",
    },
    {
      type: "confirm",
      message: "Would you like to add a new team member?",
      name: "addTeamMember"
    }
  ])
    .then(answers => {
      const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);

      teamArray.push(manager);
      console.log(teamArray);

      if(answers.addTeamMember) {
        addEmployee();
      } else {
        teamArray;
        createFile();
      }
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
      .then(answer => {
        if (answer.role === "Engineer") {
          addEngineer();
        } else if (answer.role === "Intern") {
          addIntern();
        } else if (answer.role === "Manager") {
          addManager();
        }
      });
}

const createFile = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  } else {
    fs.writeFileSync(outputPath, render(teamArray), "UTF-8");
  }
}; 

initApp();