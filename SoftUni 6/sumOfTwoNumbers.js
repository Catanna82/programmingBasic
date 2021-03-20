function solution (input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for(let i = a; i <= b; i++ ){
        for(let j = a; j <= b; j++){
            counter++
            if (i + j === magicNumber){
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`)
                isFound = true
                break;
            }         
        }
        if(isFound){
            break;
        }
    }
    if (!isFound){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
};
solution 
(["88", 
"888", 
"2000"])


;