function solution (arg1, arg2, arg3) {  
    let drinks = arg1;
    let shugar = arg2;
    let drinksNumber = Number(arg3);    

    switch (drinks){
        case 'Espresso':  
            switch (shugar){
                case 'Without':    
                    drinkPrice = 0.9 * 0.65;
                    break;
                case 'Normal':
                    drinkPrice = 1.00;
                    break; 
                case 'Extra':
                    drinkPrice = 1.20;
                    break;       
            }   
            
            if (drinksNumber >= 5){
                drinkPrice *= 0.75;
            }          
            
            break;
        case 'Cappuccino':
            switch (shugar) {
                case 'Without':
                    drinkPrice = 1.00 * 0.65;
                    break;
                case 'Normal':
                    drinkPrice = 1.20;
                    break;
                case 'Extra':
                    drinkPrice = 1.60;
                    break;
            }
            break;
        case 'Tea':
            switch (shugar) {
                case 'Without':
                    drinkPrice = 0.5 * 0.65;
                    break;
                case 'Normal':
                    drinkPrice = 0.60;
                    break;
                case 'Extra':
                    drinkPrice = 0.70;
                    break;
            }
            break;
    }
    drinkPrice = drinksNumber * drinkPrice;

    if (drinkPrice > 15){
       drinkPrice *= 0.80;        
    }   

    console.log(`You bought ${drinksNumber} cups of ${drinks} for ${drinkPrice.toFixed(2)} lv.`)
};
solution("Espresso",
"Without",
"10"
    );