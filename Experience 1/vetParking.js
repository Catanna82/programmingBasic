function solution (input) {
    let days = Number(input[0]);
    let hours =Number(input[1]);
    let tax = 0;
    let total = 0;
    
    for (let day = 1; day <= days; day++) {
        for (let hour = 1; hour <= hours; hour++){
            if (day % 2 !== 0 && hour % 2 === 0) {
                tax += 1.25;
            } else if (day % 2 === 0 && hour % 2 !== 0) {
                tax += 2.50;
            } else {
                tax += 1.00;
            }
        }
        console.log (`Day: ${day} - ${(tax).toFixed(2)} leva`);
        total += tax;
        tax = 0;
    }
    console.log (`Total: ${(total).toFixed(2)} leva`)
};
solution ([ '5', '2' ]);