const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');

let decorator;
let paintCan1;
let paintCan2;

describe('Decorator', function () {
    beforeEach(function() {
        decorator = new Decorator();
        paintCan1 = new PaintCan(3);
        paintCan2 = new PaintCan(3);

    });
    
    it('should have a paint stock', function() {
        assert.strictEqual(0, decorator.paintStock.length);
    });
    
    it('should add a paint can', function () {
        decorator.addCan(paintCan1);
        assert.strictEqual(1, decorator.paintStock.length);
    });

    it('should be able to calculate total litres paint it has in stock', function() {
        decorator.addCan(paintCan1);
        decorator.addCan(paintCan2);
        const actual = decorator.totalPaint();
        assert.strictEqual(6, actual);
    });
});


