function solution(arg1, arg2, arg3){
    let budget = Number(arg1);
    let season = arg2;
    let fishermanNumber = Number(arg3);
    let totalCost = 0;
    let discount = fishermanNumber % 2;
   
    switch(season){
        
case 'Summer':
    shipRent = 4200;
    if (fishermanNumber <= 6 ){
        
        if(discount ===0){
            totalCost = shipRent * 0.9 * 0.95;
        }
        else{
            totalCost = shipRent * 0.9;
        };
    }
    else if (fishermanNumber >= 7 && fishermanNumber <= 11){
        if(discount === 0){
            totalCost = shipRent * 0.85 * 0.95;
        }
        else{
            totalCost = shipRent * 0.85;
        };
    }
    else if (fishermanNumber > 12){
        if (discount === 0){

        totalCost =shipRent * 0.75 * 0.95;
        }
        else{
        totalCost = shipRent * 0.75
        };
    };

break;

case 'Spring':
    shipRent = 3000;
    if (fishermanNumber <= 6 ){
        
        if(discount ===0){
            totalCost = shipRent * 0.9 * 0.95;
        }
        else{
            totalCost = shipRent * 0.9;
        };
    }
    else if (fishermanNumber >= 7 && fishermanNumber <= 11){
        if(discount === 0){
            totalCost = shipRent * 0.85 * 0.95;
        }
        else{
            totalCost = shipRent * 0.85;
        };
    }
    else if (fishermanNumber > 12){
        if (discount === 0){

        totalCost =shipRent * 0.75 * 0.95;
        }
        else{
        totalCost = shipRent * 0.75
        };
    };
break;

case 'Autumn':
    shipRent = 4200;
    if (fishermanNumber <= 6 ){
        totalCost = shipRent * 0.9;
    }
    else if (fishermanNumber >= 7 && fishermanNumber <= 11 ){
        totalCost = shipRent * 0.85 ;
    }
    else if (fishermanNumber > 12 ){
        totalCost =shipRent * 0.75 ;
    };
break;

case 'Winter':
    shipRent = 2600;
     if (fishermanNumber <= 6 ){
        
        if(discount ===0){
            totalCost = shipRent * 0.9 * 0.95;
        }
        else{
            totalCost = shipRent * 0.9;
        };
    }
    else if (fishermanNumber >= 7 && fishermanNumber <= 11){
        if(discount === 0){
            totalCost = shipRent * 0.85 * 0.95;
        }
        else{
            totalCost = shipRent * 0.85;
        };
    }
    else if (fishermanNumber > 12){
        if (discount === 0){

        totalCost =shipRent * 0.75 * 0.95;
        }
        else{
        totalCost = shipRent * 0.75
        };
    };

break;
    };
    
    result = Math.abs(budget -totalCost).toFixed(2);
        
    if (totalCost <= budget){
        console.log(`Yes! You have ${result} leva left.`);
    }
    else if (totalCost > budget){
        console.log(`Not enough money! You need ${result} leva.`)
    };


};

solution(2000,
    "Winter",
    13)
    