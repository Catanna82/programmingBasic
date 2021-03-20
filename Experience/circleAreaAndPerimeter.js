function solution(arg1){
let r = Number(arg1);
let s = Math.PI * r * r;
let p = 2 * r * Math.PI;

console.log(s.toFixed(2));
console.log(p.toFixed(2));

};
solution(4.5);