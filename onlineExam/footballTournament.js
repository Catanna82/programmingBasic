function solution (input) {
    let index = 0;
    let footbalTeam = input[index];
    index++;
    let numberOfToutnament = Number(input[index]);
    index++;
    let counter = input[index];
    let wins = 0;
    let lose = 0;
    let equal = 0;
    let totalScore = 0;
    
    for (i = 0; i < numberOfToutnament; i++){
            
        if (counter === 'W'){
            wins ++;
            totalScore += 3;
        } else if (counter === 'D'){
            equal ++;
            totalScore += 1;
        } else if (counter === 'L'){
            lose++;
        }
        index++;
        counter = input[index];
    }
    let winPersent = (wins / numberOfToutnament) * 100;
    if (numberOfToutnament < 1){
        console.log(`${footbalTeam} hasn't played any games during this season.`)
    } else {
        console.log(`${footbalTeam} has won ${totalScore} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wins}`);
        console.log(`## D: ${equal}`);
        console.log(`## L: ${lose}`);
        console.log(`Win rate: ${winPersent.toFixed(2)}%`);
    }

};
solution ([ 'Barcelona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D' ]);
