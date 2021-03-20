function solution(arg1, arg2, arg3, arg4, arg5){
    let mackerelPrice = Number(arg1);
    let spratPrice = Number(arg2);
    let bonitoKg = Number(arg3);
    let scadKg = Number(arg4);
    let musselKg = Number(arg5);
    let bonitoPrice = mackerelPrice + mackerelPrice * 0.6;
    let skadPrice = spratPrice + spratPrice * 0.80;
    let musselCost = musselKg * 7.50;
    let bonitoCost = bonitoPrice * bonitoKg;
    let scadCost = skadPrice *scadKg;
    
    let total = musselCost + bonitoCost + scadCost;

    console.log(total.toFixed(2));

};
solution (5.55, 3.57, 4.3, 3.6, 7);