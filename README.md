# Readme-generator

## ReadMe Generator Video

[![site gif]({https://github.com/Jules-Boogie/readme-generator/blob/master/Develop/Capture.PNG})]({https://github.com/Jules-Boogie/readme-generator/blob/master/Develop/bandicam%202020-04-11%2017-14-26-539.mp4} "Readme")




## ReadMe Generator Preview PIC

![Site Photo](https://github.com/Jules-Boogie/readme-generator/blob/master/Develop/Capture.PNG)



## Technologies Used

[ES6-JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  


[Nodejs](https://nodejs.org/en/docs/)


[Axios](https://github.com/axios/axios)


[Inquirer](https://www.npmjs.com/package/inquirer/v/0.2.3)


[MarkDown](https://www.markdownguide.org/) 




## Summary
 This program is an efficient way to generate the readme.md file of a project. As the demo above shows, it is interactive and uses user input to generate a readme that can be uploaded to github.


## Code Snippet 
```
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
            default:"none",
            name: "title"

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

```


## Author Links

**Author:**
Juliet George

**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)


