const PaintCan = function (litres){
    this.litres = litres;
};

PaintCan.prototype.isEmpty = function(){
    if (this.litres){
        return false
    } else{
        return true
    };
};

PaintCan.prototype.empty = function(){
    this.litres = 0; 
};



module.exports = PaintCan; 
