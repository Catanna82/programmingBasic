function solution (arg) {
    let number = Number(arg);
    let result = 1;
    for(let i = 2; i <= number; i++){
       result = result * i;
    }
console.log(result);
    
};

solution("4");