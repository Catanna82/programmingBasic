function solution(arg1, arg2, arg3){
    let b1 = Number(arg1);
    let b2 = Number(arg2);
    let h = Number(arg3);

    console.log(((b1 + b2)*h/2).toFixed(2));
};
solution(8, 13, 7);