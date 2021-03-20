function solution (arg1, arg2, arg3) {
    let fruit = arg1;
    let size = arg2;
    let number = Number(arg3);
    let sum = number;
    switch (fruit){
        case 'Watermelon':
            if (size === 'big'){
                sum *= 5 * 28.70;
            } else {
                sum *= 2 * 56;
            }
        break;
        case 'Mango':
            if (size === 'big'){
                sum *= 5 * 19.60;
            } else {
                sum *= 2 * 36.66;
            }
        break;
        case 'Pineapple':
            if (size === 'big'){
                sum *= 5 * 24.80;
            } else {
                sum *= 2 * 42.10;
            }
        break;
        case 'Raspberry':
            if (size === 'big'){
                sum *= 5 * 15.20;
            } else {
                sum *= 2 * 20;
            }
        break;
    }
    if (sum >= 400 && sum <= 1000){
        sum *= 0.85;
    } else if (sum > 1000){
        sum *= 0.50;
    }
    console.log (`${sum.toFixed(2)} lv.`)
};
solution ("Mango", "big", "8")