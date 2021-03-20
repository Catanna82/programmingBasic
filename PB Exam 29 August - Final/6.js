function solution (input) {
    let line = Number(input[0]);
    let positions = Number(input[1]);
    let numberStrawberry = 0;
    let numberBerry = 0;
    let total;

    for (let row = 1; row <= line ; row++){
        if (row % 2 !== 0) {
            numberStrawberry += positions;
        } else {
            for (let column = 1; column <= positions; column++){
                if (column % 3 !== 0)  {
                    numberBerry++;
                }
            }
        }
    }
total = ((numberStrawberry * 3.50) + (numberBerry * 5.00)) * 0.80;

console.log(`Total: ${total.toFixed(2)} lv.`);

};
solution ([ '5', '7' ]);