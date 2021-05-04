const Room = function (size) {
    this.size = size;
    this.painted = false;
}

Room.prototype.paint = function(){
    this.painted = true;
};

module.exports = Room; 