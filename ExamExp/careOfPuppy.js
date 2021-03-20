function solution (input) {
    let index = 0;
    let foodForPuppy = Number(input[index]);
    index++;
    let foodForPuppyIngram = foodForPuppy * 1000;
   
    let command = input[index];
    index++;

    while (command !== "Adopted") {
       let food = Number(command);
       foodForPuppyIngram -= food; 
        
        command = input[index];
        index++;

        
    }
    if (foodForPuppyIngram >= 0) {
        console.log(`Food is enough! Leftovers: ${foodForPuppyIngram} grams.`) 
    } else {
         console.log(`Food is not enough. You need ${Math.abs(foodForPuppyIngram)} grams more.`)
    }
};
solution 
([   '4',   '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted'
  ])
;  