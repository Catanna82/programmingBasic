function radianceToDegrees(input){
let radiance =Number(input);
let degreece= radiance * 180/Math.PI;

console.log(degreece.toFixed(0))
}
radianceToDegrees(3.1416)