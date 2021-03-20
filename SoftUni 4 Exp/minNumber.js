function solution(arg){
    let n = Number(arg[0]);
    let min = Number.POSITIVE_INFINITY;
    for (let i = 1; i<= n ; i++){
        let num = Number(arg[i]);

        if(num < min){
            min = num;
        };
    };

console.log(min);


};
solution(["2",
"-1",
"-2"])


;