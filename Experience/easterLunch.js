function solution (arg1,  arg2, arg3){

    let easterBread = Number(arg1);
    let eggshells = Number(arg2);
    let cookiesKg = Number(arg3);
    
    let totalSum = (easterBread * 3.2) + (eggshells * 4.35) + (eggshells * 12 * 0.15) + (cookiesKg * 5.40);

console.log (totalSum.toFixed (2));
};
solution ("4", "4", "3");