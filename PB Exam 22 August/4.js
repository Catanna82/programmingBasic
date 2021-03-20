function solution (arg1, arg2) {
    let startSum = Number(arg1);
    let months = Number(arg2);
    let simple = startSum;
    let complex = startSum;

    for (let i = 1; i <= months; i++){
        simple = simple + ((startSum * 3) / 100);
        complex = complex + ((complex * 2.7) / 100);

    }
console.log(`Simple interest rate: ${simple.toFixed(2)} lv.`);
console.log(`Complex interest rate: ${complex.toFixed(2)} lv.`);
if (simple > complex){
    console.log(`Choose a simple interest rate. You will win ${(simple - complex).toFixed(2)} lv.`)
} else {
    console.log(`Choose a complex interest rate. You will win ${(complex - simple).toFixed(2)} lv.`)
}

};
solution ("50555.50", "36");