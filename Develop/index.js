const axios = require("axios"); // npm install axios
const inquirer = require("inquirer"); /// npm install inquirer
const fs = require("fs");
const path = require("path")


inquirer
    .prompt([
        {
            type: "input",
            message: "what is your github username?",
            default: "Jules-Boogie",
            name: "username"

        },
        {
            type: "input",
            message: "what is the title of your project?",
            default:"Homework 09",
            name: "title"

        },
        {
            type: "editor",
            message: "Please enter project discription?",
            default: "none",
            name: "description"

        },
        {
            type: "editor",
            message: "Please enter installation?",
            default: "none",
            name: "installation"

        },
        {
            type: "editor",
            message: "Please enter table of contents?",
            default: "none",
            name: "contents"

        },
        {
            type: "editor",
            message: "what apps did you use for your project?",
            default: "none",
            name: "usage"

        },
        {
            type: "input",
            message: "what is the license you used for project?",
            default: "MIT License",
            name: "license"
        },
        {
            type: "editor",
            message: "who did you work with on this project?",
            default: "none",
            name: "contributing"


        },
        {
            type: "input",
            message: "what is the github repo of the project?",
            default: "none",
            name: "repo"
        },
        {
            type: "editor",
            message: "Please enter Test?",
            default: "none",
            name: "test"
        },
        {
            type: "editor",
            message: "Please enter questions?",
            default: "none",
            name: "question"
        }
    ]).then(input => {

        const gitUrl = "https://api.github.com/users/" + input.username;
        axios.get(gitUrl).then(response => {

            //call getReadMeTExt 
        

            var data = {...input, ...response.data};

            var text = getReadMeBodyText(data)
            writeFile("read.md", text)
        });

    })


    function writeFile(fileName, readMeText){
        return fs.writeFileSync(fileName, readMeText);
    }



function getReadMeBodyText(data){
   
    const projectTitle = data.title.toLowerCase().split(" ").join("-");
  let projectUrl = `https://github.com/${data.github}/${projectTitle}`;
  let license ='';
  let licenseBadge ='';
 
  if (data.license !== "None") {
    licenseBadge =  `[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](${projectUrl})`;
    license =   `## License

    This project is licensed under the ${license} license.`

  }

    return `
       

# ${data.title}
${licenseBadge}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${license}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}.


    `;
}




