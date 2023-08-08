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
    console.log("writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congrats! Here is your generated logo!");
    });
}

async function init() {
    console.log("Starting init");
    var svgString = "";
    var svgFile = "logo.svg";

    const answers = await inquirer.prompt(questions);

    var userText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        userText = answers.text;
    }
    else {
        console.log("Please enter 1-3 characters.");
        return;
    }
    console.log("Text: [" + userText + "]");
    fontColor = answers["text-color"];
    console.log("Font color: [" + fontColor + "]");
    shapeColor = answers.shape;
    console.log("Shape color: [" + shapeColor + "]");
    shape = answers["shape"];
    console.log("User chose shape = [" + shape + "]");

    let shapeType;
    if (shape === "Square") {
        shapeType = new Square();
        console.log("square selected");
    }
    else if (shape === "Circle") {
        shapeType = new Circle();
        console.log("Circle selected");
    }
    else if (shape === "Triangle") {
    shapeType = new Triangle();
    console.log("Triangle selected");
    }
    else {
        console.log("invalid shape");
    }
shapeType.setColor(shapeColor);

var svg = new Svg();
svg.setTextElement(userText, fontColor);
svg.setShapeElement(shapeType);
svgString = svg.render();

writeToFile(svgFile, svgString);
}

init()