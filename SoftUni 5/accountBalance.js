function solution(input) {
    let totalSum = 0;
    let index = 0;
    let command = input[index];

    while(command !== undefined && command !== "NoMoreMoney") {
        const currentMoney = Number(command);
        if(currentMoney < 0) {
            console.log("Invalid operation!");
            index++;
            command = input[index];
            break;
        }

        totalSum += currentMoney;
        index++;
        command = input[index];

        console.log("Increase: " + currentMoney.toFixed(2));
    }

    console.log("Total: " + totalSum.toFixed(2));
};

solution
(["120",
"45.55",
"-150"])
;
