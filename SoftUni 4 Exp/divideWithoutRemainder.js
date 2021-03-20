function solution (input) {
    let numberInLine = Number(input[0]);
    let p1 = 0; // /2
    let p2 = 0; // /3
    let p3 = 0; // /4

    for (let number = 1 ; number <= numberInLine; number++){
        let needNumber = Number(input[number])
        if (needNumber % 2 === 0) {
            p1 += 1;
        }
        if (needNumber % 3 === 0) {
            p2 += 1;
        } 
        if (needNumber % 4 === 0) {
            p3 += 1
        }
    }

    let totalP1 = (p1 / numberInLine) * 100;
    let totalP2 = (p2 / numberInLine) * 100;
    let totalP3 = (p3 / numberInLine) * 100;
    console.log(totalP1.toFixed(2) + '%');
    console.log(totalP2.toFixed(2) + '%');
    console.log(totalP3.toFixed(2) + '%');
};

solution 
(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])
;