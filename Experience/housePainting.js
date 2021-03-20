function solution (arg1, arg2, arg3){
    let x = Number(arg1);
    let y = Number(arg2);
    let h = Number(arg3);
    
    let frontWall = (x * x) - (1.2 * 2);
    let backWall = (x * x);
    let sides = (x * y) - (1.5 * 1.5);
    let roof = (x * y) + (x * y) + (x * h /2) + (x * h /2);
    let totalWalls = frontWall + backWall + sides + sides;
    let greenPaint = totalWalls / 3.4;
    let redPaint = roof / 4.3;

console.log(greenPaint.toFixed(2));
console.log(redPaint.toFixed(2));

};
solution(10.25, 15.45, 8.88);