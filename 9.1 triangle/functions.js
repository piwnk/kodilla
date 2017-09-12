var triangle1Area, triangle2Area, triangle3Area;

var getTriangleArea = function (a, h) {
   return a<=0 || h<=0 ? "Nieprawidłowe dane" : a*h/2;
}

triangle1Area = getTriangleArea(10, 15);
triangle2Area = getTriangleArea(14, 22);
triangle3Area = getTriangleArea(12, 0);

console.log(triangle3Area);