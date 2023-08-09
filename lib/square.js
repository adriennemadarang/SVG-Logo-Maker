const Shape = require('./shapes')

// Defines Circle class extended from Shape
class Square extends Shape{
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render(){
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect height="300" width="300" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>    
`
};
};
module.exports = Square;