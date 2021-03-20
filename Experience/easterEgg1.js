function solution (...input) {    
    let numberOfEggs1 = parseInt(input[0]);
    let numberOfEggs2 = parseInt(input[1]);
    let index = 2;

    let command = input[index];
    while (command !== undefined && command !== "End of battle" && numberOfEggs1 > 0 && numberOfEggs2 > 0) {
        if (command === "one") {
            numberOfEggs2--;
        } else if (command == 'two') {
            numberOfEggs1--; 
        }
        index++; 
        command = input[index];
    }
    if (command === "End of battle"){
        console.log(`Player one has ${numberOfEggs1} eggs left.`);
        console.log(`Player two has ${numberOfEggs2} eggs left.`);
    } else if (numberOfEggs1 < 1) {
        console.log(`Player one is out of eggs. Player two has ${numberOfEggs2} eggs left.`);
    } else if (numberOfEggs2 < 1){
        console.log(`Player two is out of eggs. Player one has ${numberOfEggs1} eggs left.`);
    } 

}
solution (
    5,
    4,
    'one',
    'two',
    'one',
    'two',
    'two',
    'End of battle'
      
);
