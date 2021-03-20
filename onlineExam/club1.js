function solution (...input){
    let income = Number(input[0]);
    let index = 1;
    let coctailPrice = 0;
    let sum = 0;
    let total = 0;
    
    while (input[index] && (input[index] !== 'Party!' || income <= total)){
        let coctailName = input[index];
        let numberOfCoctails = Number(input[index + 1]);
        coctailPrice = Number(coctailName.length)
        
        sum = coctailPrice * numberOfCoctails;
        if (sum % 2 !== 0){                   
            sum *= 0.75;
        } 
        total += sum;
        index += 2;
    }
    if (input[index] === "Party!" && total < income) {
        console.log(`We need ${(income - total).toFixed(2)} leva more.`);
    } else if (total >= income){
        console.log(`Target acquired.`);
    } 
    console.log(`Club income - ${total.toFixed(2)} leva.`);    
};
solution 
("500",
    "Bellini",
    "6",
    "Bamboo",
    "7"
    
    
);