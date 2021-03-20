function solution (arg1, arg2,arg3,arg4){
   let nylon = Number(arg1);
   let paint = Number(arg2);
   let thinner = Number(arg3);
   let hours = Number(arg4);

   let paintPrice = (paint + paint * 0.1) * 14.50;
   let nylonPrice = (nylon + 2) * 1.50;
   let thinnersPrice = thinner * 5.00;

    let allCost = paintPrice + nylonPrice + thinnersPrice + 0.40;
    let salary = (allCost * 0.3) * hours;

    let totalExpenses = allCost + salary;

    console.log(`Total expenses: ${totalExpenses.toFixed(2)} lv.`)
}
solution (90, 99, 28, 9);