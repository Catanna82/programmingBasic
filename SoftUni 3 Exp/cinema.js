function solution(arg1, arg2, arg3){
    let projectionType = arg1;
    let rows = Number(arg2);
    let cols = Number(arg3);

    let ticketPrice = 0;

    switch(projectionType){
        case 'Normal':
        ticketPrice = ticketPrice + 7.50;
        break;
        case 'Premiere':
        ticketPrice = ticketPrice + 12.00;
        break;
        case 'Discount':
        ticketPrice = ticketPrice + 5.00;
        break;

    };
    let totalCapacity = rows * cols;
    let totalIncome = totalCapacity * ticketPrice;

console.log(`${(totalIncome).toFixed(2)} leva`);

};

solution("Premiere", "59", "35");
