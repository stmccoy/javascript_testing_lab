const assert = require('assert');
const PaintCan = require('../paint_can.js');

let paintCan;

describe('Paint Can', function(){
    beforeEach(function (){
        paintCan = new PaintCan(1);
    });

    it('should have a number of litres of paint', function (){
        assert.strictEqual(1, paintCan.litres);
    });

    it('should not be empty', function(){
        const actual = paintCan.isEmpty();
        assert.strictEqual(false, actual)
    })

    it('should be empty', function(){
        paintCan.empty();
        const actual = paintCan.isEmpty();
        assert.strictEqual(true, actual);
    })

    it('should be able to empty itself', function(){
        paintCan.empty();
        assert.strictEqual(0, paintCan.litres)
    })
});