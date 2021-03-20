function solution(arg1, arg2, arg3, arg4){
    let vegetablePrice = Number(arg1);
    let fruitPrice = Number(arg2);
    let kgVegetable = Number(arg3);
    let kgFruit = Number(arg4);
    let vegetableIncome = vegetablePrice * kgVegetable;
    let fruitIncome = fruitPrice * kgFruit;
    let total = vegetableIncome + fruitIncome 
    let totalEuro = total / 1.94;

    console.log(totalEuro.toFixed(2));

};
solution(1.5, 2.5, 10, 10);