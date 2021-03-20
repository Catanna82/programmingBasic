function solution (input) {
    
    let numberBread = Number(input[0]);
    let index = 1;
    let usedSugar = Number(input[index]);
    index++; 
    let usedFlour = Number(input[index]);
    let maxSugar = Number.NEGATIVE_INFINITY;
    let maxFlour = Number.NEGATIVE_INFINITY;
    let allSugar = 0;
    let allFlour = 0;
    let numSugar = 0;
    let numFlour = 0;

    for (let i = 1; i <= numberBread; i++){
        
        allSugar += usedSugar;
        allFlour += usedFlour
        
        numSugar = Number(input[i]);
        numFlour = Number(input [i+1]);
        
        if(numSugar > maxSugar ){
        maxSugar = numSugar;
                            
        }  
        if(numFlour > maxFlour) {
         maxFlour = numFlour;
        }
        index++;
        usedSugar = Number(input[index]);
        index++;
        usedFlour = Number(input[index]);
    }  

    console.log(`Sugar: ${Math.ceil(allSugar / 950)}`);
    console.log(`Flour: ${Math.ceil(allFlour / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)
};
solution ([
    '3',   '400',
    '350', '250',
    '300', '450',
    '380', ''
  ]
    )