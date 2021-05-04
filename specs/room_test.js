const assert = require('assert');
const Room = require('../room.js');

let room;

describe('Room', function (){
    beforeEach(function(){
        room = new Room(20);
    });

    it('should have a size', function(){
        assert.strictEqual(20, room.size);
    });

    it('should not be painted', function(){
        assert.strictEqual(false, room.painted);
    });

    it('should be painted', function (){
        room.paint();
        assert.strictEqual(true, room.painted)
    });
});