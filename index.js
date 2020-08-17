const fs = require("fs");
const inquirer = require("inquirer");

fs.writeFile("readme.md", "", function(err) {

    if (err) {
      return console.log(err);
    }
  
  });

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your App?",
      name: "title"
    },
    {
      type: "input",
      message: "Write a description of your app:",
      name: "description"
    },

    {
      type: "checkbox",
      message: "What kind of license should your project have?",
      name: "license",
      choices: [
        "MIT",
        "Apache 2.0", 
        "GPL 3.0", 
        "BSD 3",
        "None",
      ]
    },

    {
      type: "input",
      message: "Write some basic installation instructions for your app",
      name: "installation"
    },

    {
        type: "input",
        message: "Write some usage information for your app",
        name: "usage"
    },

    {
        type: "input",
        message: "Write some contribution guidelines for your app",
        name: "contribution"
    },

    {
        type: "input",
        message: "Write some test instructions for your app",
        name: "test"
    },

    {
      type: "input",
      message: "What is your GitHub UserName?",
      name: "github"
    },

    {
      type: "input",
      message: "What is your contact email?",
      name: "email"
    }


  ])
  .then(function(response) {

    const licenseAnswer = response.license
    let licenseLink = "test"

    if (licenseAnswer == 'MIT') {
      licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (licenseAnswer == 'Apache 2.0') {
      licenseLink = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (licenseAnswer == 'GPL 3.0') {
      licenseLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (licenseAnswer == 'BSD 3') {
      licenseLink = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else {
      licenseLink = ""
    }

    

  fs.appendFile("readme.md",`##ReadMe for ${response.title} 

  ${licenseLink}

  # Table of Contents: 

  [Description](#description)  
  [License](#license)  
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license)  
  [Contribution](#contribution)  
  [Testing](#testing)  
  [Questions](#questions)  
  


  ## Description
    
  ${response.description}

  ## License
    
  ${response.license}

  ## Installation
    
  ${response.installation}

  ## Usage
    
  ${response.usage}

  ## Contribution 
    
  ${response.contribution}
    
  ## Testing
    
  ${response.test}
    
  ## Questions

  For questions you may email me at ${response.email}.

  GitHub Profile Link: https://github.com/${response.github}
    
  `, function(err) {

        if (err) {
          console.log(err);
        }
        
      });

    
  });



