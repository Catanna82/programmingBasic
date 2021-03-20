function solution (arg1, arg2, arg3) {
    let eggSize = arg1;
    let color = arg2;
    let number = Number(arg3);

    let eggPrice = number;
    switch (eggSize){
        case 'Large':
            if (color === "Red"){
                eggPrice *= 16;
            } else if (color === "Green"){
                eggPrice *= 12;
            } else if (color === "Yellow"){
                eggPrice *= 9;
            }
        break;
        case 'Medium':
            if (color === "Red"){
                eggPrice *= 13;
            } else if (color === "Green"){
                eggPrice *= 9;
            } else if (color === "Yellow"){
                eggPrice *= 7;
            }
        break;
        case 'Small':
            if (color === "Red"){
                eggPrice *= 9;
            } else if (color === "Green"){
                eggPrice *= 8;
            } else if (color === "Yellow"){
                eggPrice *= 5;
            }
        break;
    }
    let finalPrice = eggPrice * 0.65;
    console.log(`${finalPrice.toFixed(2)} leva.`);
};
solution ("Small", "Yellow", "3");