function solution(budget, people, cloth){
    budget = Number(budget);
    people = Number(people);
    cloth = Number(cloth);

    decorCost = budget * 0.1;
    expenses = people * cloth;
    

    if(people > 150){
        expenses = expenses * 0.90;
        
    };
    totalExpenses = expenses + decorCost;
   
    if(budget >= totalExpenses){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`);

    }
    else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`);
    };

};
solution("9587.88", "222", "55.68")


//result = Math.abs(budget-filmCost).toFixed(2);