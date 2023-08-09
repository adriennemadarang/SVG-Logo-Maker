const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

// Circle
describe('Circle test', () => {
    test('rendered correctly', () => {
        const circle = new Circle("blue", "LAD", "white");
        expect(circle.render()).toEqual(
        `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">LAD</text>
</svg>
`
    );
    });
});

// Square
describe('Square test', () => {
    test('rendered correctly', () => {
        const square = new Square("purple", "ADM", "yellow");
      expect(square.render()).toEqual(
        `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect height="300" width="300" fill="purple"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">ADM</text>
</svg>    
`
      );
    });
});

// Triangle
describe('Triangle test', () => {
    test('rendered correctly', () => {
        const triangle = new Triangle("pink", "ADM", "white");
        expect(triangle.render()).toEqual(
            `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon height="100%" width="100%" points="0, 200 300, 200 150,0" fill="pink"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ADM</text>
</svg>    
`
    );
    });
});