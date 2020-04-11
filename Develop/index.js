const axios = require("axios"); // npm install axios
const inquirer = require("inquirer"); /// npm install inquirer
const fs = require("fs");

inquirer
.prompt([
{   type:"input",
    message:"what is your github username?",
    name:"username"

}
]).then(input => {
    const gitUrl = "https://api.github.com/users/" + input.username;
    axios.get(gitUrl).then(response => {
        let gitName = "# <span style='color:" + input.color + ";'>" + response.data.name + "</span>"
        let profPic = "![profile](" + response.data.avatar_url+")";
        let userEmail = "Github Email: " + response.data.email;
        let userBio = "About User:" + response.data.bio;
        let userLocation = "Location:" + response.data.location

        let userInfo = gitName + '/n'+ profPic + "/n" + userEmail + "/n" + userBio + "/n" + userLocation
        
        fs.writeToFile(userprofile.md, userInfo => {
            if(error){
                console.log("Unfornately your request was invalid!")
            } else{
                console.log("I found the user Profile!!")
            }



        })

    })

}
    
    
    
    
    )








function init() {

}

init();
