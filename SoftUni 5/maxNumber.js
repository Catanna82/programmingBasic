function solution(input){
    let index = 0;
    let data = input[index];
    index ++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(data !== "Stop"){
        let currentNumber = Number(data);

        if(currentNumber > maxNumber){
            maxNumber = currentNumber;
        }

        data = input[index];
        index ++;
    }
console.log(maxNumber);
};
solution(["100",
"99",
"80",
"70",
"Stop"]);
