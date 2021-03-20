function solution (input) {
    
    let steps = 0;
    let index = 0;
    let targetSteps = 10000;

    let nextSteps = input[index];
   

    while ( nextSteps !== "Going home" && nextSteps !== undefined) {
        steps += Number(nextSteps);

        index++;
        nextSteps = input[index];
                  
    }    
       
    if (nextSteps === "Going home") {
        steps += Number(input[index + 1]);

    }
    if (steps >= targetSteps){
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - targetSteps} steps over the goal!`);
           
    } else {
       console.log(`${targetSteps - steps} more steps to reach goal.`);
    }         

}
solution
(["125",
"250",
"4000",
"30",
"2678",
"4682"])


;