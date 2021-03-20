function solution (arg1, arg2, arg3, arg4) {
    let startSum = Number(arg1);
    let sex = arg2;
    let age = Number(arg3);
    let sport = arg4;
    let cardPrice = 0;

    switch (sport) {
        case 'Gym':
            if (age <= 19 && sex === 'f'){
                cardPrice = 35 * 0.80;
            } else if (age <=19 && sex === 'm') {
                cardPrice = 42 * 0.80;
            } else if (age > 18 && sex === 'f') {
                cardPrice = 35;
            } else if (age > 19 && sex === 'm') {
                cardPrice = 42;
            }            
        break;
        case 'Boxing':
            if (age <= 19 && sex === 'f'){
                cardPrice = 37 * 0.80;
            } else if (age <=19 && sex === 'm') {
                cardPrice = 41 * 0.80;
            } else if (age > 18 && sex === 'f') {
                cardPrice = 37;
            } else if (age > 19 && sex === 'm') {
                cardPrice = 41;
            }
        break;
        case 'Yoga':
            if (age <= 19 && sex === 'f'){
                cardPrice = 42 * 0.80;
            } else if (age <=19 && sex === 'm') {
                cardPrice = 45 * 0.80;
            } else if (age > 18 && sex === 'f') {
                cardPrice = 42;
            } else if (age > 19 && sex === 'm') {
                cardPrice = 45;
            }
        break;
        case 'Zumba':
            if (age <= 19 && sex === 'f'){
                cardPrice = 31 * 0.80;
            } else if (age <=19 && sex === 'm') {
                cardPrice = 34 * 0.80;
            } else if (age > 18 && sex === 'f') {
                cardPrice = 31;
            } else if (age > 19 && sex === 'm') {
                cardPrice = 34;
            }
        break;
        case 'Dances':
            if (age <= 19 && sex === 'f'){
                cardPrice = 53 * 0.80;
            } else if (age <=19 && sex === 'm') {
                cardPrice = 51 * 0.80;
            } else if (age > 18 && sex === 'f') {
                cardPrice = 53;
            } else if (age > 19 && sex === 'm') {
                cardPrice = 51;
            }
        break;
        case 'Pilates':
            if (age <= 19 && sex === 'f'){
                cardPrice = 37 * 0.80;
            } else if (age <=19 && sex === 'm') {
                cardPrice = 39 * 0.80;
            } else if (age > 18 && sex === 'f') {
                cardPrice = 37;
            } else if (age > 19 && sex === 'm') {
                cardPrice = 39;
            }
        break;
    }
if (startSum >= cardPrice){
    console.log(`You purchased a 1 month pass for ${sport}.`)
} else {
    console.log(`You don't have enough money! You need $${(cardPrice - startSum).toFixed(2)} more.`)
}
};

solution ("10", "m", "50", "Pilates");