function solution (...input) {  
     
    let index = 0;
    let numberOfEggs1 = Number(input[index]);
    index++;
    let secondEggs = Number(input[index]);
    index++;
    let command = input[index];
    let oneEggs = numberOfEggs1; 
    let secEggs = secondEggs;
    while (command !== undefined && command !== 'End of battle') {
        if (command === 'one') {
            secEggs--;
        } else {
            oneEggs--; 
        }
        if (secEggs < 1 && oneEggs < 1){
            break;
        }
        index++; 
        command = input[index];
    
    }
    if (oneEggs < 1) {
        console.log(`Player one is out of eggs. Player two has ${secEggs} eggs left.`);
    } else if (secEggs < 1){
        console.log(`Player two is out of eggs. Player one has ${oneEggs} eggs left.`);
    } 
    if (command === "End of battle"){
        console.log(`Player one has ${oneEggs} eggs left.`);
        console.log(`Player two has ${secEggs} eggs left.`);
    }

}
solution (
    "6",
    "3",
    "one",
    "two",
    "two",
    "one",
    "one"
);
