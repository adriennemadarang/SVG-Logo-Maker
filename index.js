const inquirer = require("inquirer");

const fs = require("fs");

const { Circle, Triangle, Square } = require("./lib/shapes");

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

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

// Function to write data to fs
function writeToFile(fileName, data) {
    console.log("writing [" + data + "] to file [" + fileName +"]")
    fs.writeFile(fileName, data, function (err) {
if (err) {
    return console.log(err);
}
console.log("Congrats! Here is your generated logo!");
    });
}