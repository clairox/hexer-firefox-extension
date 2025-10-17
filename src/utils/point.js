function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.isEqual = function (point1, point2) {
    return point1.x === point2.x && point1.y === point2.y;
};

export { Point };
