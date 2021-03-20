function solution (arg1, arg2) {
    let guests = Number(arg1);
    let budget = Number(arg2);

    let easterBreadNeeded = Math.ceil(guests / 3);
    let eggNeeded = guests * 2;
    let eggPrice = eggNeeded * 0.45;
    let easterBreadPrice = easterBreadNeeded * 4;
    let total = easterBreadPrice + eggPrice;

    if (total <= budget){
        console.log(`Lyubo bought ${easterBreadNeeded} Easter bread and ${eggNeeded} eggs.`);
        console.log(`He has ${(budget - total).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(total - budget).toFixed(2)} lv. more.`);
    }   
};
solution ("9", "12")