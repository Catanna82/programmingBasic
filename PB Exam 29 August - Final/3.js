function solution (arg1, arg2, arg3, arg4) {
    let sum = Number(arg1);
    let lap = arg2;
    let fen = arg3;
    let cart = arg4;
    let price = 0;

    switch (cart) {
        case 'Child':
            switch (lap) {
                case 'five':
                    price = 7.00;
                    break;
                case 'ten':
                    price = 11.00;
                    break;
            }
            break;
        case 'Junior':
            switch (lap) {
                case 'five':
                    price = 9.00;
                    break;
                case 'ten':
                    price = 16.00;
                    break;
            }
            break;
        case 'Adult':
            switch (lap) {
                case 'five':
                    price = 12.00;
                break;
                case 'ten':
                    price = 21.00;
                break;
            }
            break;
        case 'Profi':
            switch (lap) {
                case 'five':
                    price = 18.00;
                break;
                case 'ten':
                    price = 32.00;
                break;
            }
            break;
    }
    if (fen === 'yes') {
        price *= 0.80;
    }
    if (sum >= price) {
       console.log(`You bought ${cart} ticket for ${lap} laps. Your change is ${(sum - price).toFixed(2)}lv.`); 
    } else {
        console.log(`You don't have enough money! You need ${(price - sum).toFixed(2)}lv more.`)
    }
};
solution (
    '16',
    'five',
    'no',
    'Adult'
    );