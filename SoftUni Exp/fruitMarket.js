function cost(strawberiesLv, bananasKg, orangeKg, raspberriesKg, strawberiesKg){
    
  raspberriesLv = Number(strawberiesLv / 2) ;
  orangeLv =Number (raspberriesLv - raspberriesLv * 40 / 100);
  bananasLv = Number(raspberriesLv - raspberriesLv * 80 / 100);

strawberryCost= strawberiesLv * strawberiesKg;
orangeCost= orangeKg * orangeLv;
bananasCost= bananasKg * bananasLv;
raspberryCost= raspberriesKg * raspberriesLv;

totalCost = Number (strawberryCost + orangeCost + bananasCost + raspberryCost);

console.log(totalCost)

}

cost(48, 10, 3.3, 6.5, 1.7)