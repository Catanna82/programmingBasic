function solution (input){
    let income = input[0];
    let index = 1;
    let coctailName = input[index];
    let numberOfCoctails = input[index + 1];
    let coctailPrice = 0;
    let sum = 0;
    let total = 0;

    for (let i = 1; i !== undefined; i++){
        if (coctailName === undefined && total >= income){
            console.log(`Target acquired.`);
            console.log(`Club income - ${total.toFixed(2)} leva.`);
        break;        
        } else if (coctailName === "Party!"){
            console.log(`We need ${(income - total).toFixed(2)} leva more.`);
            console.log(`Club income - ${total} leva.`);
        break;
        }         
        coctailPrice = Number(coctailName.length)
        sum = coctailPrice * numberOfCoctails;
        index++;
        if (sum % 2 !== 0){                   
            sum *= 0.75;
        } 
        total += sum;
        index++;
        coctailName = input[index];
        numberOfCoctails = input[index + 1];
    }
};
solution 
(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!",
    
    
]);