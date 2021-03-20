function solution (arg1, arg2, arg3) {
    let budget = Number(arg1);
    let fuel = Number(arg2);
    let day = arg3;

    let fuelPrice = fuel * 2.10;
    let total = fuelPrice + 100;

    if (day === 'Sunday') {
        total *= 0.80;
    } else if (day === 'Saturday') {
        total *= 0.90
    }
    if (budget > total) {
        console.log(`Safari time! Money left: ${(budget - total).toFixed(2)} lv. `)
    } else {
        console.log(`Not enough money! Money needed: ${(total - budget).toFixed(2)} lv.`)
    }

};
solution ('105.20' , '15', 'Sunday');