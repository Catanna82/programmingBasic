function solution (data) {
    let destination;
    let minBudget;
    let saveAmount = 0;
    let index = 0;

    while (data[index] !== 'End') {
        destination = data[index];
        index++;
        minBudget = Number(data[index]);
        while(!isNaN(data[index + 1])) {
            index++;
            saveAmount += Number(data[index]);
        }

        if (saveAmount >= minBudget) {
            console.log(`Going to ${destination}!`);
        }
        index++;
    }
}

solution 
(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
;