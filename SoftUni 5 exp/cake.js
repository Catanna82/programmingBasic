function solution (input) {
   
    let w = Number(input[0]);    
    let l = Number(input[1]);
    let index = 2;     
    let allCake = w * l;
    let cakeNeed = 0;
    
    

    while (input[index] !== 'STOP' && input[index] !== undefined) {
            
        cakeNeed += Number(input[index]);
        index++ 


    }
    if (cakeNeed >= allCake){
        console.log (`No more cake left! You need ${Math.abs(allCake - cakeNeed)} pieces more.`);
    } else if (input[index] === 'STOP' && cakeNeed <= allCake) {
        console.log (`${Math.abs(allCake - cakeNeed)} pieces are left.`);
    }

}

solution 
(["10",
"10",
"20",
"20",
"20",
"20",
"21"])




 ;