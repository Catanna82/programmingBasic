function solution (input) {
    let index = 0;
    let days = input[index];
    index++;
    let saveMoney = 0;
    let totalWinGame = 0;
    let totalLoseGame = 0;

    for (i = 0; i < days; i++){
        let command = input[index];
        index++;
        let counterWin = 0;
        let counterLose = 0;
        let tempMoney = 0;
        while (command !== "Finish") {
            let typeSport = command;
            let score = input[index];
            index++;
            if (score === "win") {
                tempMoney += 20;
                counterWin++;
            } else {
                counterLose++;
            }
            command = input[index];
            index++;
        }
        if (counterWin > counterLose){
            tempMoney *= 1.10;
            totalWinGame++;
        } else {
            totalLoseGame++;
        }
        saveMoney += tempMoney
    }
    if (totalWinGame > totalLoseGame){
        saveMoney *= 1.20;
        console.log (`You won the tournament! Total raised money: ${saveMoney.toFixed(2)}`)
    } else {
        console.log (`You lost the tournament! Total raised money: ${saveMoney.toFixed(2)}`)
    }
};

solution 
["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]

;