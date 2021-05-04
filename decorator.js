const   Decorator = function () {
    this.paintStock = [];
};

Decorator.prototype.addCan = function (can) {
    this.paintStock.push(can);
}

Decorator.prototype.totalPaint = function () {
    let total = 0;
    for (let paintCan of this.paintStock) {
        total += paintCan.litres;
    };
    return total;
};

module.exports = Decorator;