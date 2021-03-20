function solution (days, makers, cake, goffretes, pancakes){
    days= Number(days);
    makers= Number(makers);
    cake= Number(cake);
    goffretes= Number(goffretes);
    pancakes= Number(pancakes);
let cakePrice= 45;
let goffretsPrice= 5.80;
let pancakesPrice= 3.2;
 cakeSum = cake * cakePrice;
 goffretesSum = goffretes * goffretsPrice;
 pancakesSum= pancakes * pancakesPrice;

totalPerDay= (cakeSum + goffretesSum + pancakesSum) * makers;
allCampainSum= (totalPerDay * days);
finalSum= allCampainSum - 1/8*allCampainSum;

console.log(finalSum)
}

solution(23, 8, 14,30, 16)