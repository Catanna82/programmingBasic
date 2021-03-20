function solution (arg1, arg2, arg3, arg4) {
    let month = arg1;
    let hour = Number(arg2);
    let people = Number(arg3);
    let time = arg4;
    let price = 0;
    let priceForOne = 0;
    switch (month) {
        case 'march':
        case 'april':
        case 'may':
            if (time === 'day'){
                priceForOne = 10.50;

            } else if (time === 'night'){
                priceForOne = 8.40;
            }

        break;
        case 'june':
        case 'july':
        case 'august':
            if (time === 'day'){
                priceForOne = 12.60;

            } else if (time === 'night'){
                priceForOne = 10.20;
            }

        break;
    }
    if (people >= 4){
        priceForOne *= 0.90;
    } 
    if (hour >= 5){
        priceForOne *= 0.50;
    } 
    price = priceForOne * people * hour;
    console.log(`Price per person for one hour: ${priceForOne.toFixed(2)}`);
    console.log(`Total cost of the visit: ${price.toFixed(2)}`)

};
solution ("july", "5", "5", "night");