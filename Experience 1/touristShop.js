function solution (...input) {
    let budget = Number(input[0]);
    let stuff = input[1];
    let stuffPrice = Number(input[2]);
    let counter = 0;
    let totalCost = 0;
    let index = 2;

    while (stuff !== 'Stop') {
        counter++;
        if (counter % 3 === 0){
            stuffPrice *= 0.50;
        }
        budget -= stuffPrice;
        totalCost += stuffPrice;

        index++;
        stuff = input[index];
        index++;
        if (index < input.length) {
            stuffPrice = Number(input[index]);
        }
        if (budget < stuffPrice) {
            console.log (`You don't have enough money!`)
            console.log(`You need ${(stuffPrice - budget).toFixed(2)} leva!`)
            break;
        }
    }

    if (stuff === 'Stop') {
        console.log(`You bought ${counter} products for ${totalCost.toFixed(2)} leva.`)
    }
};
solution (
    '153.20',
    'Backpack',
    '25.20',
    'Shoes',
    '54',
    'Sunglasses',
    '30',
    'Stop'
);
