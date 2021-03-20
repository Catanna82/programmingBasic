function solution(arg1, arg2){
    let budget = Number(arg1);
    // summer, winter
    let season = arg2;

    let destination = '';
    let vacation = '';

    switch (season) {
        case'summer':
            if (budget <= 100.00) {
                destination = 'Bulgaria';
                vacation = 'Camp';
                totalPrice = budget * 0.3 ;
            } else if (budget > 100.00 && budget <= 1000.00) {
                destination = 'Balkans';
                vacation = 'Camp';
                totalPrice = budget * 0.4;
            } else if (budget > 1000.00) {
                destination = 'Europe';
                vacation = 'Hotel';
                totalPrice = budget * 0.9;
            }
            break;
        case 'winter':
            if (budget <= 100.00) {
                destination = 'Bulgaria';
                vacation = 'Hotel';
                totalPrice = budget * 0.7 ;
            } else if (budget > 100.00 && budget <= 1000.00) {
                destination = 'Balkans';
                vacation = 'Hotel';
                totalPrice = budget * 0.8;
            } else if (budget > 1000.00) {
                destination = 'Europe';
                vacation = 'Hotel';
                totalPrice = budget * 0.9;
            };
            break;
    };

    console.log(`Somewhere in ${destination}`);
    console.log(`${vacation} - ${totalPrice.toFixed(2)}`);
};

solution("75", "winter");