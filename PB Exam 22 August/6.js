function solution (input) {
    let k = parseInt(input[0]);
    let l = parseInt(input[1]);
    let m = parseInt(input[2]);
    let n = parseInt(input[3]);
    let changes = 0;

    for (let k1 = k; k1 <= 8; k1++) {
        for (let l1 = 9; l1 >= l; l1--){
            for (let m1 = m; m1 <= 8; m1++){
                for (let n1 = 9; n1 >= n; n1--){
                    if(k1 % 2 === 0 && l1 % 2 !== 0 && m1 % 2 === 0 && n1 % 2 !== 0){
                        let number1 = parseInt(`${k1}${l1}`); 
                        let number2 = parseInt(`${m1}${n1}`);
                        if (number1 === number2) {
                            console.log('Cannot change the same player.')
                        } else {
                            changes++;
                            console.log(`${number1} - ${number2}`);
                        }
                    } 
                    if (changes === 6){
                        k1 = 8;
                        l1 = l;
                        m1 = 8;
                        n1 = n;
                        break;
                    }
                }
                if (changes === 6){
                    break;
                }
            }
            if (changes === 6){
                break;
            }
        }
        if (changes === 6){
            break;
        }
    }
};
solution ([6, 7, 5, 6]);