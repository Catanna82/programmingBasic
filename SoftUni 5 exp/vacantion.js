function solution (input) {
    
    let index = 2;
    let moneyNeed = Number(input[0]);
    let haveMoney = Number(input[1]);
    let action = "";
    let totalMoney = 0;
    let days = 0;
    let newTotalMoney = 0; 

    while (input[index] !== undefined && totalMoney !== moneyNeed) {
        action = input[index];
        index++;
        totalMoney += haveMoney;
                       
        if(action === "spend"){
            totalMoney -= Number(input[index]);
            days++;
            index++;
           
        }
        if(action === "spend" && totalMoney <= 0){
            totalMoney = newTotalMoney;
                     
            
        }
        if (action === "save"){
            newTotalMoney += Number(input[index]);
            days++;
            index++;

        }
    }
    if (days >= 5 && action === "spend") {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
    
}

solution 
(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
;
