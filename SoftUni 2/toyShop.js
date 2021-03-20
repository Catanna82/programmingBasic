function toyShop( vacantionCnt, arg1, arg2, arg3, arg4, arg5) {
    vacantionPrice = Number(vacantionCnt);
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    arg3 = Number(arg3);
    arg4 = Number(arg4);
    arg5 = Number(arg5);
    
        puzzlePrice = arg1 * 2.6;
        talkingDollPrice = arg2 * 3;
        tedyBearPrice = arg3 * 4.10;
        minionsPrice = arg4 * 8.20;
        truckPrice = arg5 * 2;
       
        allToysNumber = arg1 + arg2 + arg3 + arg4 + arg5;
        totalPrice = puzzlePrice + talkingDollPrice + tedyBearPrice + minionsPrice + truckPrice;

    if (allToysNumber >= 50){
        
        totalPrice = totalPrice - totalPrice * 0.25;
             
    }
    
    finalPrice = totalPrice - totalPrice * 0.1;

    if(finalPrice >= vacantionPrice){

        moneyLeft = finalPrice - vacantionPrice;
        
        console.log(`Yes! ${(moneyLeft).toFixed(2)} lv left.`);

    }

    else{
       
            
        moneyNeed = vacantionPrice - finalPrice;
            
        console.log(`Not enough money! ${(moneyNeed).toFixed(2)} lv needed.`);
    };   
   
    
};

toyShop("320", "8", "2", "5", "5", "1")