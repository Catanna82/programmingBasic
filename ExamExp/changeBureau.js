function solution (arg1, arg2, arg3) {
    let numberOfBitcoin = Number(arg1);
    let numberOfYen = Number(arg2);
    let commision = Number(arg3);

    let bitcoinPrice = numberOfBitcoin * 1168;
    let yenPrice = (numberOfYen * 0.15) * 1.76;
    let allMoneyLv = bitcoinPrice + yenPrice;
    let sumInEuro = allMoneyLv / 1.95;

    let result = sumInEuro - (sumInEuro * commision)/ 100;

console.log (result.toFixed(2));

};
solution
("20", "5678", "2.4");