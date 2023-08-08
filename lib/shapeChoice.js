const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

function shapeChoice(response) {
    if (response.shape === "Circle") {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response.shape === "Triangle") {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.shape === "Square") {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = shapeChoice;