const { Circle, Square, Triangle} = require("./shapes")

// Circle
describe('Circle', () => {
    test('rendered correctly', () => {
        const shape = new Circle();
        var color =('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

// Square
describe('Square', () => {
    test('rendered correctly', () => {
        const shape = new Square();
        var color =('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});

// Triangle
describe('Triangle', () => {
    test('rendered correctly', () => {
        const shape = new Triangle();
        var color =('purple')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" fill="${color}">`);
    });
});