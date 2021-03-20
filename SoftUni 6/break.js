function solution (){
    let isBreak = false;
    for (let i = 0; i < 10; i++){
        for (let b = 1; b<= 10; b++){
            console.log( a * b)
            if (b === 5){
                isBreak = true;
                break;
            }
        }
        if(isBreak){
            break;
        }
    }
}