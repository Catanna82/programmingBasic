function solution (input){
    let numberSoldGames = Number(input[0]);
    let index = 1;
    let game = input[index];
    let sold = 0;
    let allSold = sold;
    let total = 100;
    
    for (let i = game; i !== undefined; i++) {
        if (game !== 'Hearthstone' && game !== 'Fornite' && 'game !== Overwatch' && game !== undefined) {
            total -= allSold; 
        } else if (game === undefined){
           break;
        }
        switch (game){

            case "Hearthstone":
                sold = 100 / numberSoldGames;
                allSold += sold                                               
            break;
            case "Fornite":
                sold = 100 / numberSoldGames;
                allSold += sold     
            break;
            case "Overwatch":
                sold = 100 / numberSoldGames;
                allSold += sold      
            break;                          
        }                 
        index++;
        game = input[index];
    }  
    console.log (`Hearthstone - ${(sold).toFixed(2)}%`);
    console.log (`Fornite - ${(sold).toFixed(2)}%`);
    console.log(`Overwatch - ${(sold).toFixed(2)}%`);
    console.log (`Others - ${total.toFixed(2)}%`);
};
    
solution (["4",
       "Hearthstone",
        "Fornite",
        "Overwatch",
        "Counter-Strike"
        ]) ;