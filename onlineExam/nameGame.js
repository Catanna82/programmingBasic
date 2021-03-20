function solution (input) {
    let index = 0;
    let playerName = input[index];
    index++;
    let score = 0;

    let winner;
    let winnerScore = 0;

    while (playerName !== 'Stop') {

        for (let i = 0; i < playerName.length; i++) {
            let alpha = playerName[i];
            if (alpha.charCodeAt(0) === Number(input[index])) {
                score += 10;
            } else {
                score += 2;
            }
            index++;
        }
        if (score >= winnerScore) {
            winnerScore = score;
            winner = playerName;
        }
        playerName = input[index];
        score = 0;
        index++;
    }
    console.log(`The winner is ${winner} with ${winnerScore} points!`);
}

solution ([
    'Pesho',
    '124',
    '34',
    '111',
    '97',
    '99',
    'Gosho',
    '98',
    '124',
    '88',
    '76',
    '18',
    'Stop'
    
  ]
  );