function solution(arg1, arg2, arg3){
    let age = Number(arg1);
    let laundryPrice = Number(arg2);
    let toySinglePrice = Number(arg3);

    let piggyBank = 0;
    let toysCount = 0;
    let lastCashGift = 0;
    
    for(let i = 1; i <= age; i++){
        if (i % 2 !== 0){
            toysCount += 1;
        }
        else{
            piggyBank += lastCashGift + 9;
            lastCashGift += 10;
        }
    }
    piggyBank += (toysCount * toySinglePrice);
    
   if( piggyBank >= laundryPrice){     
    console.log(`Yes! ${(piggyBank - laundryPrice).toFixed(2)}`);
   }
   else{
       console.log(`No! ${(laundryPrice - piggyBank).toFixed(2)}`);
   };

};

solution("21", "1570.98", "3");