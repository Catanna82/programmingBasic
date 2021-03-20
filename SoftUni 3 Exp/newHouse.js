function solution(arg1, arg2, arg3){
    let flowers = arg1;
    let flowersNumber = Number(arg2);
    let budget = Number(arg3);
    let totalPrice = 0;

switch (flowers){
    case 'Roses':
    totalPrice = flowersNumber * 5.00;
    if (flowersNumber > 80){
    totalPrice = totalPrice * 0.9;
    }    
    break;
    case 'Dahlias':
    totalPrice = flowersNumber * 3.80;
    if (flowersNumber > 90){
    totalPrice = totalPrice * 0.85;
    }
    break;

    case 'Tulips':
    totalPrice = flowersNumber * 2.80
    if (flowersNumber > 80){
     totalPrice = totalPrice * 0.85;
    }        
    break;
    case 'Narcissus':
        totalPrice = flowersNumber * 3.00;
        if (120 > flowersNumber){
            totalPrice = totalPrice * 1.15;
        }        
    break;

    case 'Gladiolus':
        totalPrice = flowersNumber * 2.50
        if (80 > flowersNumber ){
        totalPrice = totalPrice * 1.2;
        }               
    break;

};
let result = Math.abs(budget - totalPrice).toFixed(2);
if(budget >= totalPrice){
   
console.log (`Hey, you have a great garden with ${flowersNumber} ${flowers} and ${result} leva left.`)
}
else if(budget < totalPrice){
    
console.log(`Not enough money, you need ${result} leva more.`)
};


};

solution("Gladiolus" , 
"64",
"160");
