function solution (input){
let numberSoldGames = Number(input[0]);
let index = 1;
let game = input[index];
let sold = 0;
let allSold = sold;
let total = 100;

for (let i = game; i !== undefined; i++) {
    if (i === "Hearthstone") {
        sold = 100 / numberSoldGames;
        allSold += sold     
    } else {
        console.log (`Hearthstone - ${(sold).toFixed(2)}%`);               
    }    
    index++;
    if (i === "Fornite") {
        sold = 100 / numberSoldGames;
        allSold += sold        
    } else {
        console.log (`Fornite - ${(sold).toFixed(2)}%`);
    }     
    index++;
    if (i === "Overwatch") {
        sold = 100 / numberSoldGames;
        allSold += sold       
    } else {
        console.log(`Overwatch - ${(sold).toFixed(2)}%`);
    }   
    index++;
    
    if (i !== undefined){
    total -= allSold; 
    console.log (`Others - ${total.toFixed(2)}%`)
    }
    break;
}  
};
solution (["4",
   "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"
    ]) ;