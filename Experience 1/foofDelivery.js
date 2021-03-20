function solution (arg1, arg2, arg3) {
    let chickens = Number(arg1);
    let fish = Number(arg2);
    let vegetarians = Number(arg3);

    let chickensPrice = chickens * 10.35;
    let fishPrice = fish * 12.40;
    let vegPrice = vegetarians * 8.15;
    let sum = chickensPrice + fishPrice + vegPrice;
    let desertPrice = sum * 0.2;

    let total = sum + desertPrice + 2.50;
    console.log (`Total: ${total.toFixed(2)}`)
};
solution ("10", "0", "6");