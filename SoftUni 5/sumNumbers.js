function solution(input){
    let index = 0;
    let needSum = Number(input[index]);
    index ++;
    let sum = 0;

    while(sum < needSum){
        let currentNumber = Number(input[index]);
        sum += currentNumber;
        index ++;

    }
    console.log(sum);
};
solution(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

