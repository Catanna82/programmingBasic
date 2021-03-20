function solution (input) {
    let name;
    let minutes;
    let seconds;
    let index = 0;
    let gold = 0;
    let silver = 0;
    let bronze = 0;
    let time;
    let winner = 0;
    let winnerTime = Number.MAX_SAFE_INTEGER;
    
    while (input[index] !== 'Finish') {
        name = input[index];
        index++;
        minutes = Number(input[index]);
        index++;
        seconds = Number(input[index]);
        time = (minutes * 60) + seconds;
        index++;
        if (time < 55){
            gold++;
        } else if (time >= 55 && time <= 85) {
            silver++;
        } else if (time > 85 && time <= 120) {
            bronze++;
        } 
        if (winnerTime > time) {
            winnerTime = time;
            winner = index - 3;
        }
    }

console.log(`With ${input[winner + 1]} minutes and ${input[winner + 2]} seconds ${input[winner]} is the winner of the day!`);
console.log(`Today's prizes are ${gold} Gold ${silver} Silver and ${bronze} Bronze cards!`);

};
solution ([
    'Nick',   '3',
    '20',     'Jack',
    '1',      '15',
    'Sofia',  '4',
    '10',     'Viktor',
    '2',      '52',
    'Finish'
  ]
  
  
  );