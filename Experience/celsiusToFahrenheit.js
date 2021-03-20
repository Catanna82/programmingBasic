function solution(arg){
    let degreece = Number(arg);
    let fahrenheit = degreece * 9 / 5 + 32

    console.log(fahrenheit.toFixed(2));
};
solution(32.3);