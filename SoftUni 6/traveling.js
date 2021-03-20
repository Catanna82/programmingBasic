function solution (input) {
    let index = 0;
    let destination = input[index];
    index++;
    let minBudget = Number(input[index]);
    index++;
    let saveMoney = Number(input[index]);
    let total = 0;
    let newTotal = 0;

    for (let i = 0; i <= minBudget; i++ ){
        for (let j = 0; j = destination; j++){
            for (let z = 0; z !== "End!"; z++){
                total += saveMoney;
                index++;

                if (j !== destination){
                    newTotal += saveMoney;
                    index++;
                }
                if (z === "End!"){
                    break;
                }
            }

        }
       
    }
console.log(`Going to ${destination}!`);


}
solution 
(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])


;