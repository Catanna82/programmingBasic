function solution (arg1, arg2, arg3, arg4){
    let buget = Number(arg1);
    let videocardNumber = Number(arg2);
    let processorNumber = Number(arg3);
    let ramNumber = Number(arg4);

    let videoCost = videocardNumber * 250.00;
    let processorCost = processorNumber * (videoCost * 0.35);
    let ramCost = ramNumber * (videoCost * 0.1);

    let allCost = videoCost + processorCost + ramCost;

    if (videocardNumber > processorNumber){
        allCost -= allCost * 0.15;
    }
    if (buget >= allCost){
        console.log(`You have ${(buget - allCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(allCost - buget).toFixed(2)} leva more!`);
    }
};
solution (920.45, 3, 1, 1);