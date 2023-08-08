const inquirer = require("inquirer");

const fs = require("fs");
const fileName = "./examples/logo.svg";

const shapeChoice = require("./lib/shapeChoice");


// Array of questions 
const questions = [
    {
        type: "list",
        name: "shape",
        message: "Shape: Choose which shape you would like",
        choices: ["Circle", "Triangle", "Square"],
    },

    {
        type: "input",
        name: "shape-color",
        message: "Shape Color: Enter a color or number:"
    },
    {
        type: "input",
        name: "text",
        message: "Text: Enter up to three (3) characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Text Color: Enter a color or number:"
    },
];


function createLogo(reponse) {
    const svg = shapeChoice(response);
    fs.writeFile(fileName, svg, ()=> console.log("Congrats! Here is your generated logo!"));
}
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init();