function solution (arg1, arg2, arg3, arg4){
    let people = Number(arg1);
    let taxes = Number(arg2);
    let shezlongPrice = Number(arg3);
    let umbrellaPrice = Number(arg4);

    let entranceTaxes = people * taxes;
    let shezlongCost = Math.ceil(people * 0.75) * shezlongPrice;
    let umbrellaCost = Math.ceil(people * 0.50) * umbrellaPrice;
    let totalCost = entranceTaxes + shezlongCost + umbrellaCost;

    console.log (`${totalCost.toFixed(2)} lv.`);
}
solution 
(100,
8,
6,
4)
;
