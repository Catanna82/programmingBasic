function solution (arg1, arg2, arg3){
    let people = Number(arg1);
    let envelope = Number(arg2);
    let budget = Number(arg3);
    let cakePrice = budget * 0.1;
    let allEnvelope = people * envelope;
    if (people > 20){
        allEnvelope *= 0.75;
    } else if (people > 15 && people <= 20){
        allEnvelope *= 0.80;
    } else if (people >= 10 && people <=15){
        allEnvelope *= 0.85;
    }else{
        allEnvelope = allEnvelope;
    };
    let totalCost = cakePrice + allEnvelope;
    if (budget < totalCost){
        console.log(`No party! ${(totalCost - budget).toFixed(2)} leva needed.`);
    } else {
        console.log(`It is party time! ${(budget - totalCost).toFixed(2)} leva left.`);
    }
};
solution ("8", "25", "340");