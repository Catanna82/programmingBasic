function solution (arg1, arg2, arg3, arg4){
    let buget = Number(arg1);
    let nights = Number(arg2);
    let nightsPrice = Number(arg3);
    let additionalCosts = Number(arg4);

    let nightsCost = nights * nightsPrice;
    

    if (nights > 7){
        nightsCost *= 0.95;
        
    }
    let vacantionCost = nightsCost + (buget * additionalCosts / 100);
    if (buget >= vacantionCost){
        console.log(`Ivanovi will be left with ${(buget - vacantionCost).toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${(vacantionCost - buget).toFixed(2)} leva needed.`)
    }

};
solution (500, 7, 66, 15);