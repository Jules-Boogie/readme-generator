const axios = require("axios"); // npm install axios
const inquirer = require("inquirer"); /// npm install inquirer
const fs = require("fs");

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
            name: "title"

        },
        {
            type: "editor",
            message: "Please enter project discription?",
            name: "description"

        },
        {
            type: "editor",
            message: "Please enter installation?",
            name: "installation"

        },
        {
            type: "editor",
            message: "Please enter table of contents?",
            name: "contents"

        },
        {
            type: "editor",
            message: "what apps did you use for your project?",
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
            name: "contributors"


        },
        {
            type: "input",
            message: "what is the github repo of the project?",
            name: "repo"
        },
        {
            type: "editor",
            message: "Please enter questions?",
            name: "question"
        }
    ]).then(input => {

        const gitUrl = "https://api.github.com/users/" + input.username;
        axios.get(gitUrl).then(response => {
            let gitName = "# <span style='color:" + input.color + ";'>" + response.data.name + "</span>"
            let profPic = "![profile](" + response.data.avatar_url + ")";
            let userEmail = "Github Email: " + response.data.email;
            let userBio = "About User:" + response.data.bio;
            let userLocation = "Location:" + response.data.location

            let userInfo = gitName + "\n" + profPic + "\n" + userEmail + "\n" + userBio + "\n" + userLocation

            fs.appendFile("userproject.md", userInfo, error => {
                if (error) {
                    console.log("Unfortunately your request was invalid!")
                } else {
                    console.log("I found the user Profile!")
                }



            })


        })

        let projTitle = "## Title" + '\n' + input.title;
        let projDes = "## Description" + "\n" + input.description;
        let projCont = "## Contents" + "\n" + input.contents;
        let projInst = "## Installation" + "\n" + input.installation;
        let projUs = "## Usage" + "\n" + input.usage;
        let projContr = "## Contributors" + "\n" + input.contributors;
        let projRepo = "## Project Repository" + "\n" + input.repo;
        let projQA = "## Questions" + "\n" + input.question;

        let projInfo = projTitle + "\n" + projDes + "\n" + projCont + "\n" + projInst + "\n" + projUs + "\n" + projContr + "\n" + projRepo + "\n" + projQA

        fs.appendFile("userproject.md", projInfo, error => {
            if (error) {
                console.log("Unfortunately your request was invalid!")
            } else {
                console.log("added project info to .md file!")
            }


        })





    })









