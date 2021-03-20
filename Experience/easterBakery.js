function solution (arg1, arg2, arg3, arg4, arg5){
    let powderPrice = Number(arg1);
    let powderKg = Number(arg2);
    let shugarKg = Number(arg3);
    let eggshell = Number(arg4);
    let yeastPackages = Number(arg5);

    let shugarPrice = powderPrice * 0.75;
    let eggshellPrice = powderPrice * 1.1;
    let yeastPrice =  shugarPrice * 0.20;
    let total = (powderPrice * powderKg) + (shugarPrice * shugarKg) + (eggshell * eggshellPrice) + (yeastPackages * yeastPrice);
    console.log(total.toFixed(2));
};
solution ("50", "10", "3.5", "6", "1");