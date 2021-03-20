function solution (input) {
let days = Number(input[0]);
let allFood = Number(input[1]);
let index = 2;
let dogFood = 0;
let catFood = 0;
let thirdDay = 0;
let bisquits = 0;
let allFoodEatenPerDay = 0;

for (i = 0; i < days; i++){
    let dogFoodPerDay = Number(input[index]);
    let catFoodPerDay = Number(input[index + 1])
    index++
    dogFood += dogFoodPerDay
    catFood += catFoodPerDay
    allFoodEatenPerDay = dogFood + catFood;    
    thirdDay++;  
    if (thirdDay % 3 == 0){
        let foodForThirdDay = dogFoodPerDay + catFoodPerDay;
        bisquits += foodForThirdDay * 0.10;  
        index++;                            
    } 
   index++
}
console.log(`Total eaten biscuits: ${Math.ceil(bisquits)}gr.`);
console.log(`${((allFoodEatenPerDay / allFood) * 100).toFixed(2)}% of the food has been eaten.`);
console.log(`${((dogFood / allFoodEatenPerDay) * 100).toFixed(2)}% eaten from the dog.`);
console.log(`${((catFood / allFoodEatenPerDay) * 100).toFixed(2)}% eaten from the cat.`)
}

solution ([
    '3',   '1000',
    '300', '20',
    '100', '30',
    '110', '40'
  ]
  )